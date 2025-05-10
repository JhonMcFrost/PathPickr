package com.project.pathpickr.email;

public class EmailSendRequest {
    private String to;
    private String name;
    private String result;
    private Long messageId;

    // Getters
    public String getTo() {
        return to;
    }

    public String getName() {
        return name;
    }

    public String getResult() {
        return result;
    }

    public Long getMessageId() {
        return messageId;
    }

    // Setters
    public void setTo(String to) {
        this.to = to;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setResult(String result) {
        this.result = result;
    }

    public void setMessageId(Long messageId) {
        this.messageId = messageId;
    }
}
