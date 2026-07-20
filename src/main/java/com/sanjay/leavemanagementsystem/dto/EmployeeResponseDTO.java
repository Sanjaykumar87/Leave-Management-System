package com.sanjay.leavemanagementsystem.dto;

import com.sanjay.leavemanagementsystem.enums.Role;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class EmployeeResponseDTO {
    private Long id;
    private String name;
    private String email;
    private String department;
    private String designation;
    private Double salary;
    private Role role;
}
