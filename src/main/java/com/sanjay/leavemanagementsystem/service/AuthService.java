package com.sanjay.leavemanagementsystem.service;

import com.sanjay.leavemanagementsystem.dto.LoginRequestDTO;
import com.sanjay.leavemanagementsystem.dto.LoginResponseDTO;

public interface AuthService {
    LoginResponseDTO login(LoginRequestDTO loginRequest);
}
