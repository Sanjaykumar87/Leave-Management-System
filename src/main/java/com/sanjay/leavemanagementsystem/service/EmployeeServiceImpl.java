package com.sanjay.leavemanagementsystem.service;

import com.sanjay.leavemanagementsystem.dto.EmployeeRequestDTO;
import com.sanjay.leavemanagementsystem.dto.EmployeeResponseDTO;
import com.sanjay.leavemanagementsystem.entity.Employee;
import com.sanjay.leavemanagementsystem.exception.ResourceNotFoundException;
import com.sanjay.leavemanagementsystem.repository.EmployeeRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeRepository employeeRepository;
    private final PasswordEncoder passwordEncoder;

    public EmployeeServiceImpl(EmployeeRepository employeeRepository, PasswordEncoder passwordEncoder) {
        this.employeeRepository = employeeRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public EmployeeResponseDTO createEmployee(EmployeeRequestDTO requestDTO) {
        if (employeeRepository.existsByEmail(requestDTO.getEmail())) {
            throw new IllegalArgumentException("Employee email already exists: " + requestDTO.getEmail());
        }

        Employee employee = Employee.builder()
                .name(requestDTO.getName())
                .email(requestDTO.getEmail())
                .password(passwordEncoder.encode(requestDTO.getPassword()))
                .department(requestDTO.getDepartment())
                .designation(requestDTO.getDesignation())
                .salary(requestDTO.getSalary())
                .role(requestDTO.getRole())
                .build();

        Employee savedEmployee = employeeRepository.save(employee);
        return convertToResponseDTO(savedEmployee);
    }

    @Override
    public EmployeeResponseDTO updateEmployee(Long id, EmployeeRequestDTO requestDTO) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found with id: " + id));

        if (!employee.getEmail().equalsIgnoreCase(requestDTO.getEmail()) &&
                employeeRepository.existsByEmail(requestDTO.getEmail())) {
            throw new IllegalArgumentException("Email already in use by another employee: " + requestDTO.getEmail());
        }

        employee.setName(requestDTO.getName());
        employee.setEmail(requestDTO.getEmail());
        employee.setPassword(passwordEncoder.encode(requestDTO.getPassword()));
        employee.setDepartment(requestDTO.getDepartment());
        employee.setDesignation(requestDTO.getDesignation());
        employee.setSalary(requestDTO.getSalary());
        employee.setRole(requestDTO.getRole());

        Employee updatedEmployee = employeeRepository.save(employee);
        return convertToResponseDTO(updatedEmployee);
    }

    @Override
    public void deleteEmployee(Long id) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found with id: " + id));
        employeeRepository.delete(employee);
    }

    @Override
    @Transactional(readOnly = true)
    public EmployeeResponseDTO getEmployeeById(Long id) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found with id: " + id));
        return convertToResponseDTO(employee);
    }

    @Override
    @Transactional(readOnly = true)
    public List<EmployeeResponseDTO> getAllEmployees() {
        return employeeRepository.findAll().stream()
                .map(this::convertToResponseDTO)
                .collect(Collectors.toList());
    }

    private EmployeeResponseDTO convertToResponseDTO(Employee employee) {
        return EmployeeResponseDTO.builder()
                .id(employee.getId())
                .name(employee.getName())
                .email(employee.getEmail())
                .department(employee.getDepartment())
                .designation(employee.getDesignation())
                .salary(employee.getSalary())
                .role(employee.getRole())
                .build();
    }
}
