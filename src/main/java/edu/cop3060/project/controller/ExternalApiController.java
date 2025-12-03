package edu.cop3060.project.controller;

import edu.cop3060.project.service.ExternalApiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*") // allow React → Spring Boot
public class ExternalApiController {

    @Autowired
    private ExternalApiService service;

    // NEW: Search Health.gov health content
    @GetMapping("/health/search")
    public String searchHealthContent(@RequestParam(required = false) String keyword) {
        return service.searchTopics(keyword);
    }
}


