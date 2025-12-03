package edu.cop3060.project.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class ExternalApiService {

    private final RestTemplate restTemplate = new RestTemplate();

    private final String BASE_URL = "https://health.gov/myhealthfinder/api/v4/topicsearch.json";

    public String searchTopics(String keyword) {
        String url = BASE_URL;

        if (keyword != null && !keyword.isEmpty()) {
            url += "?keyword=" + keyword;
        }

        return restTemplate.getForObject(url, String.class);
    }
}


