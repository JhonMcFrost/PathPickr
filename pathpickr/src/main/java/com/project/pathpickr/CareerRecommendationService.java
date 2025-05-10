package com.project.pathpickr;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CareerRecommendationService {

    @Autowired
    private CareerRecommendationRepository repository;

    public CareerRecommendation getRecommendation(String tag) {
        return repository.findByTag(tag);
    }
}
