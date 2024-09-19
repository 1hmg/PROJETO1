package com.test.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.test.user.User;
import com.test.userrepo.UserRepository;
import com.test.userseervice.UserService;

@Service
public class UserServiceImpl implements UserService {
	 @Autowired
	 private UserRepository userRepository;

	 @Autowired
	 private BCryptPasswordEncoder passwordEncoder;
	    
	  @Override
	    public User registerUser(String username, String password) {
	        User user = new User();
	        user.setUsername(username);
	        user.setPassword(passwordEncoder.encode(password));
	        return userRepository.save(user);
	    }

	    @Override
	    public User findUserByUsername(String username) {
	        return userRepository.findByUsername(username);
	    }

	    @Override
	    public List<User> getAllUsers() {
	        return userRepository.findAll(); // Busca todos os usuários
	    }  
}
