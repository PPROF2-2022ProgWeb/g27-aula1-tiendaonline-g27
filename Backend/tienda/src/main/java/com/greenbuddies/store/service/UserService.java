package com.greenbuddies.store.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.greenbuddies.store.model.Product;
import com.greenbuddies.store.model.User;
import com.greenbuddies.store.repository.IUserRepository;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;

@Data
@Service
public class UserService {

    /* Attributes*/
    @Autowired
    private IUserRepository userRepository;
    private final Logger LOGGER = Logger.getLogger((String.valueOf(UserService.class)));
    @Autowired
    private ObjectMapper mapper;

    public UserService(IUserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User save(User user)  {
        userRepository.save(mapper.convertValue(user, User.class));
        LOGGER.info("User saved successfully");
        return user;
    }

    public Optional<User> findById(Long id) {
        LOGGER.info("Search by id in Users entity");
        Optional<User> u = userRepository.findById(id);
        if(u.isPresent()) {
            LOGGER.info("User founded");
        } else {
            LOGGER.info("The id does not match with any existing user");
        }
        return u;
    }


    public List<User> findAll() {
        List<User> users = userRepository.findAll();
        LOGGER.info("List of all existing users");
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

        LOGGER.info("User with ID: "+ user.getId() + " has been updated");
        userRepository.save(user);
        return user;
    }


    public void delete(Long id) {
        if(userRepository.findById(id).isPresent()){
            userRepository.deleteById(id);
            LOGGER.info("User deleted correctly!");
        } else {
            LOGGER.info("User was not found!");
        }
    }


    public Optional<User> findUserByCompleteName(String name, String lastName) {
        LOGGER.info("Search by complete name in User entity");
        Optional<User> user = userRepository.findUserByCompleteName(name, lastName);
        if(user.isEmpty()) {
            LOGGER.info("User not found");
        }
        return user;
    }

    public Optional<User> findUserByEmail(String email) {
        LOGGER.info("Search by email in User entity");
        Optional<User> user = userRepository.findUserByEmail(email);
        if(user.isEmpty()) {
            LOGGER.info("User not found");
        }
        return user;
    }

    public List<User> listUsersByRole(String roleName){
        LOGGER.info("List of all users by role");
        return userRepository.listUsersByRole(roleName);
    }

    public List<User> listUsersByCountry(String countryName){
        LOGGER.info("List of all users by country");
        return userRepository.listUsersByCountry(countryName);
    }

    public List<User> listUsersByState(String stateName){
        LOGGER.info("List of all users by state");
        return userRepository.listUsersByState(stateName);
    }

    public List<User> listUsersByZipCode(String code){
        LOGGER.info("List of all users by zip code");
        return userRepository.listUsersByZipCode(code);
    }

    public List<User> listUsersByBirthDate(String birthDate){
        LOGGER.info("List of all users by date of birth");
        return userRepository.listUsersByBirthDate(birthDate);
    }

}
