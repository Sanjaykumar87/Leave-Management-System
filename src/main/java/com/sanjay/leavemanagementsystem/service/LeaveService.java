package com.sanjay.leavemanagementsystem.service;

import com.sanjay.leavemanagementsystem.dto.LeaveRequestDTO;
import com.sanjay.leavemanagementsystem.dto.LeaveResponseDTO;

import java.util.List;

public interface LeaveService {
    LeaveResponseDTO applyLeave(LeaveRequestDTO requestDTO, String requesterEmail);
    List<LeaveResponseDTO> getAllLeaves(String requesterEmail);
    LeaveResponseDTO approveLeave(Long id);
    LeaveResponseDTO rejectLeave(Long id);
    void deleteLeave(Long id);
    List<LeaveResponseDTO> getAllLeavesForAdmin();
}
