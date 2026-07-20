package com.sanjay.leavemanagementsystem.Service.impl;

import com.sanjay.leavemanagementsystem.Entity.Employee;
import com.sanjay.leavemanagementsystem.Entity.Leave;
import com.sanjay.leavemanagementsystem.Enums.LeaveStatus;
import com.sanjay.leavemanagementsystem.Exception.ResourceNotFoundException;
import com.sanjay.leavemanagementsystem.Repository.EmployeeRepository;
import com.sanjay.leavemanagementsystem.Repository.LeaveRepository;
import com.sanjay.leavemanagementsystem.Service.LeaveService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LeaveServiceImpl implements LeaveService {

    private final LeaveRepository leaveRepository;
    private final EmployeeRepository employeeRepository;

    public LeaveServiceImpl(LeaveRepository leaveRepository,
                            EmployeeRepository employeeRepository) {
        this.leaveRepository = leaveRepository;
        this.employeeRepository = employeeRepository;
    }


    @Override
    public Leave applyLeave(Long employeeId, Leave leave) {

        // Step 1: Find the employee
        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Employee not found with id: " + employeeId));

        leave.setEmployee(employee);
        leave.setStatus(LeaveStatus.PENDING);
        return leaveRepository.save(leave);
    }

    @Override
    public List<Leave> getLeavesByEmployee(Long employeeId) {

        // Check if employee exists
        employeeRepository.findById(employeeId)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Employee not found with id: " + employeeId));

        // Fetch all leaves
        return leaveRepository.findByEmployeeId(employeeId);
    }

    @Override
    public Leave approveLeave(Long leaveId) {

        Leave leave = leaveRepository.findById(leaveId)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Leave not found with id: " + leaveId));

        leave.setStatus(LeaveStatus.APPROVED);

        return leaveRepository.save(leave);
    }

    @Override
    public Leave rejectLeave(Long leaveId) {

        Leave leave = leaveRepository.findById(leaveId)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Leave not found with id: " + leaveId));

        leave.setStatus(LeaveStatus.REJECTED);

        return leaveRepository.save(leave);
    }
}
