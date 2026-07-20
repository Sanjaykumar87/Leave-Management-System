package com.sanjay.leavemanagementsystem.Service;

import com.sanjay.leavemanagementsystem.Entity.Leave;
import java.util.List;

public interface LeaveService {

    Leave applyLeave(Long employeeId, Leave leave);

    List<Leave> getLeavesByEmployee(Long employeeId);

    Leave approveLeave(Long leaveId);

    Leave rejectLeave(Long leaveId);
}
