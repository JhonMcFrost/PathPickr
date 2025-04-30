package com.project.pathpickr;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*") // Allow frontend calls
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "index"; // corresponds to index.html in the templates folder
    }

     @Autowired
    private CareerRecommendationService service;

    @GetMapping("/getCareerRecommendations/{tag}")
    public ResponseEntity<CareerRecommendation> getCareer(@PathVariable String tag) {
        CareerRecommendation recommendation = service.getRecommendation(tag);
        if (recommendation != null) {
            return ResponseEntity.ok(recommendation);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
}
