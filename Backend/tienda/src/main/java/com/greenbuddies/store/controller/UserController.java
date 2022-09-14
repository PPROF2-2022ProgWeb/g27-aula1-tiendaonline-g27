package com.greenbuddies.store.controller;

import com.greenbuddies.store.exceptions.BadRequestException;
import com.greenbuddies.store.model.Product;
import com.greenbuddies.store.model.User;
import com.greenbuddies.store.service.UserService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;

@CrossOrigin
@ControllerAdvice
@RestController
@RequestMapping("/users")
@Data
public class UserController {

    private final Logger LOGGER = Logger.getLogger(String.valueOf(UserController.class));
    /* Attributes */
    @Autowired
    private UserService userService;


    /* Methods */
    /* GET */

    @ApiOperation(value = "Search by Id in Users entity"
            , notes = "")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK. The resource is obtained correctly", response = Product.class),
            @ApiResponse(code = 400, message = "Bad Request", response = String.class),
            @ApiResponse(code = 500, message = "Unexpected error")})
    //@PreAuthorize("hasAuthority('ROLE_ADMIN')")
    @GetMapping("id/{id}")
    public User findById(@PathVariable Long id) {
        LOGGER.info("Search by Id in Users entity");
        return userService.findById(id).orElse(null);
    }


    @ApiOperation(value = "Search by complete name in Users entity"
            , notes = "")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK. The resource is obtained correctly", response = Product.class),
            @ApiResponse(code = 400, message = "Bad Request", response = String.class),
            @ApiResponse(code = 500, message = "Unexpected error")})
    //@PreAuthorize("hasAuthority('ROLE_ADMIN')")
    @GetMapping("/completeName")
    public Optional<User> findUserByName(@RequestParam(required = true) String name, @RequestParam(required = true) String lastName) {
        LOGGER.info("Search by complete name in Users entity");
        return userService.findUserByCompleteName(name, lastName);
    }

    @ApiOperation(value = "Search by email in Users entity"
            , notes = "")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK. The resource is obtained correctly", response = Product.class),
            @ApiResponse(code = 400, message = "Bad Request", response = String.class),
            @ApiResponse(code = 500, message = "Unexpected error")})
    //@PreAuthorize("hasAuthority('ROLE_ADMIN')")
    @GetMapping("/{email}")
    public User findByEmail(@PathVariable String email) {
        LOGGER.info("Search by email in Users entity");
        return userService.findUserByEmail(email).orElse(null);
    }

    @ApiOperation(value = "List of all Users"
            , notes = "")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK. The resource is obtained correctly", response = Product.class),
            @ApiResponse(code = 400, message = "Bad Request", response = String.class),
            @ApiResponse(code = 500, message = "Unexpected error")})

    //@PreAuthorize("hasAuthority('ROLE_ADMIN')")
    @GetMapping()
    public List<User> findAll() {
        LOGGER.info("List of all Users");
        return userService.findAll();
    }

    @ApiOperation(value = "List of all Users by country"
            , notes = "")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK. The resource is obtained correctly", response = Product.class),
            @ApiResponse(code = 400, message = "Bad Request", response = String.class),
            @ApiResponse(code = 500, message = "Unexpected error")})
    //@PreAuthorize("hasAuthority('ROLE_ADMIN')")
    @GetMapping("country/{name}")
    public List<User> listUsersByCountry(@PathVariable String name) {
        LOGGER.info("List of all Users by country");
        return userService.listUsersByCountry(name);
    }

    @ApiOperation(value = "List of all Users by state"
            , notes = "")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK. The resource is obtained correctly", response = Product.class),
            @ApiResponse(code = 400, message = "Bad Request", response = String.class),
            @ApiResponse(code = 500, message = "Unexpected error")})
    //@PreAuthorize("hasAuthority('ROLE_ADMIN')")
    @GetMapping("state/{name}")
    public List<User> listUsersByState(@PathVariable String name) {
        LOGGER.info("List of all Users by state");
        return userService.listUsersByState(name);
    }

    @ApiOperation(value = "List of all Users by zip code"
            , notes = "")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK. The resource is obtained correctly", response = Product.class),
            @ApiResponse(code = 400, message = "Bad Request", response = String.class),
            @ApiResponse(code = 500, message = "Unexpected error")})
    //@PreAuthorize("hasAuthority('ROLE_ADMIN')")
    @GetMapping("zipcode/{code}")
    public List<User> listUsersByZipCode(@PathVariable String code) {
        LOGGER.info("List of all Users by zip code");
        return userService.listUsersByZipCode(code);
    }

    @ApiOperation(value = "List of all Users by role"
            , notes = "")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK. The resource is obtained correctly", response = Product.class),
            @ApiResponse(code = 400, message = "Bad Request", response = String.class),
            @ApiResponse(code = 500, message = "Unexpected error")})
    //@PreAuthorize("hasAuthority('ROLE_ADMIN')")
    @GetMapping("role/{roleName}")
    public List<User> listUsersByRole(@PathVariable String roleName) {
        LOGGER.info("List of all Users by role");
        return userService.listUsersByRole(roleName);
    }

    @ApiOperation(value = "List of all Users by birth date"
            , notes = "")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK. The resource is obtained correctly", response = Product.class),
            @ApiResponse(code = 400, message = "Bad Request", response = String.class),
            @ApiResponse(code = 500, message = "Unexpected error")})
    //@PreAuthorize("hasAuthority('ROLE_ADMIN')")
    @GetMapping("birthdate/{date}")
    public List<User> listUsersByBirthDate(@PathVariable String date) {
        LOGGER.info("List of all Users by birth date");
        return userService.listUsersByBirthDate(date);
    }



    /* PUT */
    @ApiOperation(value = "Update by id of a record in Users entity"
            , notes = "")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK. The resource is obtained correctly", response = Product.class),
            @ApiResponse(code = 400, message = "Bad Request", response = String.class),
            @ApiResponse(code = 500, message = "Unexpected error")})
    //@PreAuthorize("hasAuthority('ROLE_ADMIN')")
    @PutMapping("/update")
    public ResponseEntity<User> updateUser(@RequestBody User newU) throws BadRequestException {
        ResponseEntity<User> resp = null;

        if (userService.findById(newU.getId()).isPresent()) {
            resp = new ResponseEntity(userService.update(newU), HttpStatus.OK);
            LOGGER.info("User data updated successfully");
        } else {
            resp = new ResponseEntity("User not found!", HttpStatus.NOT_FOUND);
            LOGGER.info("User not found!");
        }
        return resp;
    }


    /* DELETE */
    @ApiOperation(value = "Deletion of a record in Users entity by id"
            , notes = "")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK. The resource is obtained correctly", response = Product.class),
            @ApiResponse(code = 400, message = "Bad Request", response = String.class),
            @ApiResponse(code = 500, message = "Unexpected error")})
    //@PreAuthorize("hasAuthority('ROLE_ADMIN')")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity deleteUser(@PathVariable Long id) {
        ResponseEntity resp;

        if (userService.findById(id).isPresent()) {
            userService.delete(id);
            resp = new ResponseEntity(HttpStatus.NO_CONTENT);
            LOGGER.info("User deleted successfully");
        } else {
            resp = new ResponseEntity("User not found!", HttpStatus.NOT_FOUND);
            LOGGER.info("User not found!");
        }
        return resp;
    }
}
