package com.college.virtuallab.quiz;

import java.util.Map;

public class QuizSubmitRequest {
    private Map<Integer, Integer> answers;

    public Map<Integer, Integer> getAnswers() {
        return answers;
    }

    public void setAnswers(Map<Integer, Integer> answers) {
        this.answers = answers;
    }
}
