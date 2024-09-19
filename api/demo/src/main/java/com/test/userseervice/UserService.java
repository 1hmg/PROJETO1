package com.test.userseervice;

import java.util.List;

import com.test.user.User;

public interface UserService {
	User registerUser(String username, String password);
    User findUserByUsername(String username);
    List<User> getAllUsers();
}
