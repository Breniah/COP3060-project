package edu.cop3060.project.controller;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import edu.cop3060.project.dto.AuthResponse;
import edu.cop3060.project.dto.LoginRequest;
import edu.cop3060.project.dto.RegisterRequest;
import edu.cop3060.project.model.Role;
import edu.cop3060.project.model.User;
import edu.cop3060.project.repository.UserRepository;
import edu.cop3060.project.security.JwtService;
import org.mockito.ArgumentCaptor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
// Disabled because Mockito's ByteBuddy integration doesn't support Java 25 yet.
// CRUD backend tests + auth frontend tests are sufficient for this milestone.
//@Disabled("Disabled on Java 25 due to Mockito / ByteBuddy incompatibility.")
@ExtendWith(MockitoExtension.class)
class AuthControllerTest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private PasswordEncoder passwordEncoder;

    @Mock
    private JwtService jwtService;

    @Mock
    private AuthenticationManager authenticationManager;

    @InjectMocks
    private AuthController authController;

    @Test
    void register_createsUserAndReturnsToken() {
        RegisterRequest request = new RegisterRequest();
        request.setEmail("test@example.com");
        request.setFullName("Tester");
        request.setPassword("password");

        when(userRepository.existsByEmail("test@example.com")).thenReturn(false);
        when(passwordEncoder.encode("password")).thenReturn("ENCODED");
        when(jwtService.generateToken("test@example.com")).thenReturn("fake-jwt");

        ResponseEntity<?> response = authController.register(request);

        assertEquals(200, response.getStatusCode().value());
        assertTrue(response.getBody() instanceof AuthResponse);

        AuthResponse body = (AuthResponse) response.getBody();
        assertEquals("fake-jwt", body.getToken());
        assertEquals("test@example.com", body.getEmail());
        assertEquals(Role.USER.name(), body.getRole());

        ArgumentCaptor<User> userCaptor = ArgumentCaptor.forClass(User.class);
        verify(userRepository).save(userCaptor.capture());
        assertEquals("ENCODED", userCaptor.getValue().getPassword());
    }

    @Test
    void login_authenticatesAndReturnsToken() {
        LoginRequest request = new LoginRequest();
        request.setEmail("test@example.com");
        request.setPassword("password");

        Authentication fakeAuth = mock(Authentication.class);
        when(authenticationManager.authenticate(any(Authentication.class)))
                .thenReturn(fakeAuth);
        when(jwtService.generateToken("test@example.com")).thenReturn("fake-jwt");

        ResponseEntity<?> response = authController.login(request);

        assertEquals(200, response.getStatusCode().value());
        assertTrue(response.getBody() instanceof AuthResponse);

        AuthResponse body = (AuthResponse) response.getBody();
        assertEquals("fake-jwt", body.getToken());
        assertEquals("test@example.com", body.getEmail());
    }
}
