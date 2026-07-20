package com.sanjay.leavemanagementsystem.dto;

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

    private String role;
}