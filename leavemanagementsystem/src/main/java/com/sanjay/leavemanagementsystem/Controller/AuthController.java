package com.sanjay.leavemanagementsystem.Controller;

import com.sanjay.leavemanagementsystem.Service.AuthService;
import com.sanjay.leavemanagementsystem.dto.LoginRequestDTO;
import com.sanjay.leavemanagementsystem.dto.LoginResponseDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDTO> login(
            @RequestBody LoginRequestDTO request) {

        return ResponseEntity.ok(authService.login(request));
    }
}