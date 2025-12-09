package edu.cop3060.project.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import java.util.Map;

@RestController
public class HealthController {

    @GetMapping("/api/health/search")
    public Object searchHealthTopics(@RequestParam String keyword) {

        String url = "https://health.gov/myhealthfinder/api/v3/topicsearch.json?keyword=" + keyword;

        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(url, Map.class);
    }
}
