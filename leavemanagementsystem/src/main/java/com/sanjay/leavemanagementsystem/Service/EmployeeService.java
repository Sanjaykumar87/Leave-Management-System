package com.sanjay.leavemanagementsystem.Service;

import com.sanjay.leavemanagementsystem.Entity.Employee;
import com.sanjay.leavemanagementsystem.dto.EmployeeRequestDTO;
import com.sanjay.leavemanagementsystem.dto.EmployeeResponseDTO;

import java.util.List;

public interface EmployeeService {

    EmployeeResponseDTO saveEmployee(EmployeeRequestDTO requestDTO);

    List<EmployeeResponseDTO> getAllEmployees();

    EmployeeResponseDTO getEmployeeById(Long id);

    EmployeeResponseDTO updateEmployee(Long id, EmployeeRequestDTO requestDTO);

    void deleteEmployee(Long id);
}