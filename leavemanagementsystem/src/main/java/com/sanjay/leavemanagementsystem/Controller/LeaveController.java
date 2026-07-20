package com.sanjay.leavemanagementsystem.Controller;

import com.sanjay.leavemanagementsystem.Entity.Leave;
import com.sanjay.leavemanagementsystem.Service.LeaveService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employees")
public class LeaveController {

    private final LeaveService leaveService;

    public LeaveController(LeaveService leaveService) {
        this.leaveService = leaveService;
    }

    @PostMapping("/{employeeId}/leaves")
    public ResponseEntity<Leave> applyLeave(
            @PathVariable Long employeeId,
            @RequestBody Leave leave) {

        Leave savedLeave = leaveService.applyLeave(employeeId, leave);

        return ResponseEntity.ok(savedLeave);
    }

    @GetMapping("/{employeeId}/leaves")
    public ResponseEntity<List<Leave>> getLeavesByEmployee(
            @PathVariable Long employeeId) {

        return ResponseEntity.ok(
                leaveService.getLeavesByEmployee(employeeId));
    }

    @PutMapping("/leaves/{leaveId}/approve")
    public ResponseEntity<Leave> approveLeave(
            @PathVariable Long leaveId) {

        return ResponseEntity.ok(
                leaveService.approveLeave(leaveId));
    }

    @PutMapping("/leaves/{leaveId}/reject")
    public ResponseEntity<Leave> rejectLeave(
            @PathVariable Long leaveId) {

        return ResponseEntity.ok(
                leaveService.rejectLeave(leaveId));
    }
}
