package com.sanjay.leavemanagementsystem.controller;

import com.sanjay.leavemanagementsystem.dto.LeaveRequestDTO;
import com.sanjay.leavemanagementsystem.dto.LeaveResponseDTO;
import com.sanjay.leavemanagementsystem.security.CustomUserDetails;
import com.sanjay.leavemanagementsystem.service.LeaveService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/leaves")
public class LeaveController {

    private final LeaveService leaveService;

    public LeaveController(LeaveService leaveService) {
        this.leaveService = leaveService;
    }

    @PostMapping
    public ResponseEntity<LeaveResponseDTO> applyLeave(
            @Valid @RequestBody LeaveRequestDTO requestDTO,
            @AuthenticationPrincipal CustomUserDetails userDetails
    ) {
        LeaveResponseDTO created = leaveService.applyLeave(requestDTO, userDetails.getUsername());
        return new ResponseEntity<>(created, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<LeaveResponseDTO>> getAllLeaves(
            @AuthenticationPrincipal CustomUserDetails userDetails
    ) {
        List<LeaveResponseDTO> leaves = leaveService.getAllLeaves(userDetails.getUsername());
        return ResponseEntity.ok(leaves);
    }

    @PutMapping("/{id}/approve")
    public ResponseEntity<LeaveResponseDTO> approveLeave(@PathVariable Long id) {
        LeaveResponseDTO approved = leaveService.approveLeave(id);
        return ResponseEntity.ok(approved);
    }

    @PutMapping("/{id}/reject")
    public ResponseEntity<LeaveResponseDTO> rejectLeave(@PathVariable Long id) {
        LeaveResponseDTO rejected = leaveService.rejectLeave(id);
        return ResponseEntity.ok(rejected);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteLeave(@PathVariable Long id) {
        leaveService.deleteLeave(id);
        return ResponseEntity.noContent().build();
    }
    @GetMapping("/admin")
    public ResponseEntity<List<LeaveResponseDTO>> getAllLeavesForAdmin() {

        return ResponseEntity.ok(
                leaveService.getAllLeavesForAdmin()
        );
    }
}
