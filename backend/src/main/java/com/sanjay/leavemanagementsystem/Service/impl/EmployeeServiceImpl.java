package com.sanjay.leavemanagementsystem.Service.impl;

import com.sanjay.leavemanagementsystem.Entity.Employee;
import com.sanjay.leavemanagementsystem.Enums.Role;
import com.sanjay.leavemanagementsystem.Repository.EmployeeRepository;
import com.sanjay.leavemanagementsystem.Service.EmployeeService;
import com.sanjay.leavemanagementsystem.dto.EmployeeRequestDTO;
import com.sanjay.leavemanagementsystem.dto.EmployeeResponseDTO;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeRepository employeeRepository;
    private final PasswordEncoder passwordEncoder;

    public EmployeeServiceImpl(EmployeeRepository employeeRepository,
                               PasswordEncoder passwordEncoder) {
        this.employeeRepository = employeeRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public EmployeeResponseDTO saveEmployee(EmployeeRequestDTO requestDTO) {

        Employee employee = Employee.builder()
                .name(requestDTO.getName())
                .email(requestDTO.getEmail())
                .password(requestDTO.getPassword())
                .department(requestDTO.getDepartment())
                .designation(requestDTO.getDesignation())
                .salary(requestDTO.getSalary())
                .role(Role.valueOf(requestDTO.getRole().toUpperCase()))
                .build();
        System.out.println(passwordEncoder.encode(requestDTO.getPassword()));

        Employee savedEmployee = employeeRepository.save(employee);

        return mapToResponse(savedEmployee);
    }

    @Override
    public List<EmployeeResponseDTO> getAllEmployees() {
        return employeeRepository.findAll()
                .stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    @Override
    public EmployeeResponseDTO getEmployeeById(Long id) {

        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() ->
                        new EntityNotFoundException("Employee not found with id : " + id));

        return mapToResponse(employee);
    }

    @Override
    public EmployeeResponseDTO updateEmployee(Long id,
                                              EmployeeRequestDTO requestDTO) {

        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() ->
                        new EntityNotFoundException("Employee not found with id : " + id));

        employee.setName(requestDTO.getName());
        employee.setEmail(requestDTO.getEmail());
        employee.setPassword(passwordEncoder.encode(requestDTO.getPassword()));
        employee.setDepartment(requestDTO.getDepartment());
        employee.setDesignation(requestDTO.getDesignation());
        employee.setSalary(requestDTO.getSalary());
        employee.setRole(Role.valueOf(requestDTO.getRole().toUpperCase()));


        Employee updatedEmployee = employeeRepository.save(employee);

        return mapToResponse(updatedEmployee);
    }

    @Override
    public void deleteEmployee(Long id) {

        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() ->
                        new EntityNotFoundException("Employee not found with id : " + id));

        employeeRepository.delete(employee);
    }

    private EmployeeResponseDTO mapToResponse(Employee employee) {

        return EmployeeResponseDTO.builder()
                .id(employee.getId())
                .name(employee.getName())
                .email(employee.getEmail())
                .department(employee.getDepartment())
                .designation(employee.getDesignation())
                .salary(employee.getSalary())
                .role(employee.getRole().name())
                .build();
    }
}