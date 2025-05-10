package com.project.pathpickr.email;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    public void sendEmailFromDatabase(EmailSendRequest request) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("pathpickrofficial@gmail.com");
        message.setTo(request.getTo());
        message.setSubject("Your PathPickr Career Result");
    
        message.setText(
            "Hi " + request.getName() + ",\n\n" +
            "Thanks for using PathPickr!\n\n" +
            "Your suggested career path is: " + request.getResult() + "\n\n" +
            "We wish you success! 🚀\n\n" +
            "- The PathPickr Team"
        );
    
        mailSender.send(message);
    }
    

}