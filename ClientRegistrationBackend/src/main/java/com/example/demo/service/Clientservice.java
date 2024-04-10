package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Clients;
import com.example.demo.repository.clientrepo;

@Service
public class Clientservice {
	
	@Autowired
    private clientrepo clientRepo; 
    public Clients register(Clients client) {
    	client.setClient_Name(client.getClient_Name());
    	client.setIndustry(client.getIndustry());
    	client.setService_looking(client.getService_looking());
    	client.setService_req(client.getService_req());
    	client.setWhen_req(client.getWhen_req());
    	client.setDescription(client.getDescription());
        return  clientRepo.save(client);
    }

    public List<Clients> getAllClients() {
        return clientRepo.findAll();
    }

}
