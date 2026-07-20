package com.sanjay.leavemanagementsystem.service;

import com.sanjay.leavemanagementsystem.dto.LoginRequestDTO;
import com.sanjay.leavemanagementsystem.dto.LoginResponseDTO;
import com.sanjay.leavemanagementsystem.security.CustomUserDetails;
import com.sanjay.leavemanagementsystem.security.CustomUserDetailsService;
import com.sanjay.leavemanagementsystem.security.JwtService;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {

    private final AuthenticationManager authenticationManager;
    private final CustomUserDetailsService userDetailsService;
    private final JwtService jwtService;

    public AuthServiceImpl(
            AuthenticationManager authenticationManager,
            CustomUserDetailsService userDetailsService,
            JwtService jwtService
    ) {
        this.authenticationManager = authenticationManager;
        this.userDetailsService = userDetailsService;
        this.jwtService = jwtService;
    }

    @Override
    public LoginResponseDTO login(LoginRequestDTO loginRequest) {
        // Authenticate credentials; throws BadCredentialsException if invalid.
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getEmail(),
                        loginRequest.getPassword()
                )
        );

        UserDetails userDetails = userDetailsService.loadUserByUsername(loginRequest.getEmail());
        String jwtToken = jwtService.generateToken(userDetails);

        String role = "";
        if (userDetails instanceof CustomUserDetails) {
            role = ((CustomUserDetails) userDetails).getEmployee().getRole().name();
        }

        return LoginResponseDTO.builder()
                .token(jwtToken)
                .email(userDetails.getUsername())
                .role(role)
                .build();
    }
}
