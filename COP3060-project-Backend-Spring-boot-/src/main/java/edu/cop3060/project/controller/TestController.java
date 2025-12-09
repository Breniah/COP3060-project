package edu.cop3060.project.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @GetMapping("/test")
    public String test() {
        return "Backend is running!";
    }

    @GetMapping("/api/protected")
    public String protectedEndpoint() {
        return "You accessed a protected endpoint!";
    }
}
