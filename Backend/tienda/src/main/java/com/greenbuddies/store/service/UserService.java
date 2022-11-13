package com.greenbuddies.store.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.greenbuddies.store.model.User;
import com.greenbuddies.store.repository.IUserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class UserService {

    private final Logger LOGGER = LoggerFactory.getLogger((String.valueOf(UserService.class)));
    private final ObjectMapper MAPPER = new ObjectMapper();

    @Autowired
    private final IUserRepository userRepository;


    public UserService(IUserRepository userRepository) {
        this.userRepository = userRepository;
    }


    public User save(User user) {
        userRepository.save(MAPPER.convertValue(user, User.class));
        if (LOGGER.isInfoEnabled()) {
            LOGGER.info("User saved successfully: {}", user);
        }
        return user;
    }

    public Optional<User> findById(Long id) {
        Optional<User> user = userRepository.findById(id);
        if (user.isPresent() && LOGGER.isInfoEnabled()) {
            LOGGER.info("User founded: {}", user);
        } else {
            LOGGER.info("The id does not match with any existing user");
        }
        return user;
    }


    public List<User> findAll() {
        List<User> users = userRepository.findAll();
        if (LOGGER.isInfoEnabled()) {
            LOGGER.info("List of all existing users: {}", users);
        }
        return users;
    }

    public User update(User newUser) {
        User user = userRepository.findById(newUser.getId()).get();
        user.setName(newUser.getName());
        user.setLastName(newUser.getLastName());
        user.setBirthDate(newUser.getBirthDate());
        user.setPassword(newUser.getPassword());
        user.setCountry(newUser.getCountry());
        user.setEmail(newUser.getEmail());
        user.setState(newUser.getState());
        user.setRole(newUser.getRole());
        user.setZipCode(newUser.getZipCode());
        if (LOGGER.isInfoEnabled()) {
            LOGGER.info("User with ID: {} has been updated", user.getId());
        }
        userRepository.save(user);
        return user;
    }


    public void delete(Long id) {
        if (userRepository.findById(id).isPresent() && LOGGER.isInfoEnabled()) {
            userRepository.deleteById(id);
            LOGGER.info("User deleted correctly!");
        } else {
            LOGGER.info("User was not found!");
        }
    }


    public Optional<User> findUserByCompleteName(String name, String lastName) {
        Optional<User> user = userRepository.findUserByCompleteName(name, lastName);
        if (user.isEmpty() && LOGGER.isInfoEnabled()) {
            LOGGER.info("User not found");
        } else {
            LOGGER.info("User founded: {}", user);
        }
        return user;
    }

    public Optional<User> findUserByEmail(String email) {
        Optional<User> user = userRepository.findUserByEmail(email);
        if (user.isEmpty() && LOGGER.isInfoEnabled()) {
            LOGGER.info("User not found");
        } else {
            LOGGER.info("User founded: {}", user);
        }
        return user;
    }

    public List<User> listUsersByRole(String roleName) {
        List<User> usersByRole = userRepository.listUsersByRole(roleName);
        if (LOGGER.isInfoEnabled()) {
            LOGGER.info("Users by role name {}: {}", roleName, usersByRole);
        }
        return usersByRole;
    }

    public List<User> listUsersByCountry(String countryName) {
        List<User> usersByCountry = userRepository.listUsersByCountry(countryName);
        if (LOGGER.isInfoEnabled()) {
            LOGGER.info("Users by country {}: {}", countryName, usersByCountry);
        }
        return usersByCountry;
    }

    public List<User> listUsersByState(String stateName) {
        List<User> usersByState = userRepository.listUsersByState(stateName);
        if (LOGGER.isInfoEnabled()) {
            LOGGER.info("Users by state {}: {}", stateName, usersByState);
        }
        return usersByState;
    }

    public List<User> listUsersByZipCode(String code) {
        List<User> usersByZipCode = userRepository.listUsersByZipCode(code);
        if (LOGGER.isInfoEnabled()) {
            LOGGER.info("Users by zip code {}: {}", code, usersByZipCode);
        }
        return usersByZipCode;
    }

    public List<User> listUsersByBirthDate(String birthDate) {
        List<User> usersByBirthDate = userRepository.listUsersByBirthDate(birthDate);
        if (LOGGER.isInfoEnabled()) {
            LOGGER.info("Users by birth date {}: {}", birthDate, usersByBirthDate);
        }
        return usersByBirthDate;
    }
}
