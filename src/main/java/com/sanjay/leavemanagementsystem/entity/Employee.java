package com.sanjay.leavemanagementsystem.entity;

import com.sanjay.leavemanagementsystem.enums.Role;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "employees")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    private String department;
    
    private String designation;

    private Double salary;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Role role;
}
