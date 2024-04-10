 package com.example.demo.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.service.Userservice;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/dualtricks")
public class UserController {
	
	 @Autowired
	 private Userservice userservice;
	 
	    @PostMapping("/signin")
	    public ResponseEntity<User>register(@RequestBody User client) {
	        User registeredClient = userservice.register(client);
	        System.out.println(registeredClient.getUsername()+" is saved");
	        return new ResponseEntity<>(registeredClient, HttpStatus.CREATED);
	    }
	    @PostMapping("/login")
	    public ResponseEntity<User> login(@RequestParam String userid, @RequestParam String pwd) {
	        User loggedInUser = userservice.login(userid, pwd);
	        return ResponseEntity.ok(loggedInUser);
	    }
     
	

}
