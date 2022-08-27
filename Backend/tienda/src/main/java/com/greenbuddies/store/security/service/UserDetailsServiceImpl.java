package com.greenbuddies.store.security.service;

import com.greenbuddies.store.model.User;
import com.greenbuddies.store.repository.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {


    /* Attributes */
    @Autowired
    IUserRepository userRepository;


    /* Mehtods */
    @Override
    @Transactional
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

        Optional<User> user = userRepository.findUserByEmail(email);

        if (user == null) {
            throw new UsernameNotFoundException("Not found!");
        }

        return UserPrinciple.build(user);
    }
}
