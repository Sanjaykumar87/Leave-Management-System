package com.sanjay.leavemanagementsystem.dto;

import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LeaveResponseDTO {

    private Long id;

    private LocalDate startDate;

    private LocalDate endDate;

    private String reason;

    private String status;
}
