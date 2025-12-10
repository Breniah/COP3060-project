package edu.cop3060.project.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import java.util.Map;

@RestController
public class SelfCareController {

    @GetMapping("/api/affirmation")
    public Map<String, Object> getAffirmation() {
        String url = "https://www.affirmations.dev/";
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(url, Map.class);
    }
}
