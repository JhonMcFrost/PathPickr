package com.project.pathpickr;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CareerRecommendationRepository extends JpaRepository<CareerRecommendation, Long> {
    CareerRecommendation findByTag(String tag);
}
