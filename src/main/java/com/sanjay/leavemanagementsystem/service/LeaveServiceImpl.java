package com.sanjay.leavemanagementsystem.service;

import com.sanjay.leavemanagementsystem.dto.LeaveRequestDTO;
import com.sanjay.leavemanagementsystem.dto.LeaveResponseDTO;
import com.sanjay.leavemanagementsystem.entity.Employee;
import com.sanjay.leavemanagementsystem.entity.Leave;
import com.sanjay.leavemanagementsystem.enums.LeaveStatus;
import com.sanjay.leavemanagementsystem.enums.Role;
import com.sanjay.leavemanagementsystem.exception.ResourceNotFoundException;
import com.sanjay.leavemanagementsystem.repository.EmployeeRepository;
import com.sanjay.leavemanagementsystem.repository.LeaveRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class LeaveServiceImpl implements LeaveService {

    private final LeaveRepository leaveRepository;
    private final EmployeeRepository employeeRepository;

    public LeaveServiceImpl(LeaveRepository leaveRepository, EmployeeRepository employeeRepository) {
        this.leaveRepository = leaveRepository;
        this.employeeRepository = employeeRepository;
    }

    @Override
    public LeaveResponseDTO applyLeave(LeaveRequestDTO requestDTO, String requesterEmail) {
        Employee employee = employeeRepository.findByEmail(requesterEmail)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found with email: " + requesterEmail));

        if (requestDTO.getStartDate().isAfter(requestDTO.getEndDate())) {
            throw new IllegalArgumentException("Start date cannot be after end date");
        }

        Leave leave = Leave.builder()
                .startDate(requestDTO.getStartDate())
                .endDate(requestDTO.getEndDate())
                .reason(requestDTO.getReason())
                .status(LeaveStatus.PENDING)
                .employee(employee)
                .build();

        Leave savedLeave = leaveRepository.save(leave);
        return convertToResponseDTO(savedLeave);
    }

    @Override
    @Transactional(readOnly = true)
    public List<LeaveResponseDTO> getAllLeaves(String requesterEmail) {
        Employee employee = employeeRepository.findByEmail(requesterEmail)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found with email: " + requesterEmail));

        List<Leave> leaves;
        if (employee.getRole() == Role.ADMIN) {
            leaves = leaveRepository.findAll();
        } else {
            leaves = leaveRepository.findByEmployeeId(employee.getId());
        }

        return leaves.stream()
                .map(this::convertToResponseDTO)
                .collect(Collectors.toList());
    }

    @Override
    public LeaveResponseDTO approveLeave(Long id) {
        Leave leave = leaveRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Leave application not found with id: " + id));

        leave.setStatus(LeaveStatus.APPROVED);
        Leave updatedLeave = leaveRepository.save(leave);
        return convertToResponseDTO(updatedLeave);
    }

    @Override
    public LeaveResponseDTO rejectLeave(Long id) {
        Leave leave = leaveRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Leave application not found with id: " + id));

        leave.setStatus(LeaveStatus.REJECTED);
        Leave updatedLeave = leaveRepository.save(leave);
        return convertToResponseDTO(updatedLeave);
    }

    private LeaveResponseDTO convertToResponseDTO(Leave leave) {
        return LeaveResponseDTO.builder()
                .id(leave.getId())
                .startDate(leave.getStartDate())
                .endDate(leave.getEndDate())
                .reason(leave.getReason())
                .status(leave.getStatus())
                .employeeId(leave.getEmployee().getId())
                .employeeName(leave.getEmployee().getName())
                .employeeEmail(leave.getEmployee().getEmail())
                .build();
    }
    @Override
    public void deleteLeave(Long id) {
        Leave leave = leaveRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Leave not found with id: " + id));

        leaveRepository.delete(leave);
    }
    @Override
    public List<LeaveResponseDTO> getAllLeavesForAdmin() {

        return leaveRepository.findAll()
                .stream()
                .map(this::convertToResponseDTO)
                .toList();
    }
}
