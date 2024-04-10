package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Clients;

public interface clientrepo extends JpaRepository<Clients,Long>{

}
