package com.sanjay.leavemanagementsystem.dto;

import com.sanjay.leavemanagementsystem.enums.LeaveStatus;
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
    private LeaveStatus status;
    private Long employeeId;
    private String employeeName;
    private String employeeEmail;
}
