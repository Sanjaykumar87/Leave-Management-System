package com.sanjay.leavemanagementsystem.Service;

import com.sanjay.leavemanagementsystem.dto.LoginRequestDTO;
import com.sanjay.leavemanagementsystem.dto.LoginResponseDTO;

public interface AuthService {

    LoginResponseDTO login(LoginRequestDTO request);

}