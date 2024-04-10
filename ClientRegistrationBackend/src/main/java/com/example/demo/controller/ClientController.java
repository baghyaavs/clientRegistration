package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Clients;
import com.example.demo.service.Clientservice;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/dualtricks")
public class ClientController {
	
	    @Autowired
	    private Clientservice clientService;
	    @PostMapping("/clientDetails")
	    public ResponseEntity<Clients>register(@RequestBody Clients client) {
	        Clients registeredClient = clientService.register(client);
	        System.out.println(registeredClient.getClient_Name()+" is saved");
	        return new ResponseEntity<>(registeredClient, HttpStatus.CREATED);
	    }

	    @GetMapping("/adminclientDetails")
	    public List<Clients> getAllClients() {
	        return clientService.getAllClients();
	    }

}
