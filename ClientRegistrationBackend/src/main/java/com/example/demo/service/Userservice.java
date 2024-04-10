package com.example.demo.service;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.repository.userrepo;


@Service
public class Userservice {
	
	 @Autowired
	 private userrepo userRepository;

	    public Optional<User> findByPhoneNumberOrEmail(String userphno, String email) {
	        return userRepository.findByUserphnoOrEmail(userphno, email);
	    }
	    
	    public User login(String userid, String pwd) {
	        Optional<User> user = userRepository.findByUserphnoOrEmail(userid, userid);
	        if (user.isPresent() && user.get().getPwd().equals(pwd)) {
	            return user.get();
	        } else {
	            throw new IllegalArgumentException("Invalid credentials");
	        }
	    }
	    
	    
	    public User register(User client) {
	    	client.setPwd(client.getPwd());
	    	client.setUserphno(client.getUserphno());
	    	client.setEmail(client.getEmail());
	    	client.setUsername(client.getUsername());
	        return  userRepository.save(client);
	    }
	public User getUserById(Long sno) {
		 Optional<User> optionalUser =  userRepository.findById(sno);
	        return optionalUser.orElse(null);
	}

}
