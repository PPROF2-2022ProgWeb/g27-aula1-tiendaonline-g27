package com.greenbuddies.store.controller;

import com.greenbuddies.store.message.request.LoginForm;
import com.greenbuddies.store.message.request.SignUpForm;
import com.greenbuddies.store.message.response.JwtResponse;
import com.greenbuddies.store.message.response.ResponseMessage;
import com.greenbuddies.store.model.Role;
import com.greenbuddies.store.model.RoleName;
import com.greenbuddies.store.model.User;
import com.greenbuddies.store.repository.IRoleRepository;
import com.greenbuddies.store.repository.IUserRepository;
import com.greenbuddies.store.security.jwt.JwtProvider;
import com.greenbuddies.store.security.service.UserPrinciple;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/api/auth")
public class AuthRestAPIs {

    AuthenticationManager authenticationManager;
    IUserRepository userRepository;
    IRoleRepository roleRepository;
    PasswordEncoder encoder;
    JwtProvider jwtProvider;
    //private EmailServiceImpl emailSenderService;


    @Autowired
    public AuthRestAPIs(AuthenticationManager authenticationManager, IUserRepository userRepository, IRoleRepository roleRepository, PasswordEncoder encoder, JwtProvider jwtProvider) {
        this.authenticationManager = authenticationManager;
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.encoder = encoder;
        this.jwtProvider = jwtProvider;
    }

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginForm loginRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = jwtProvider.generateJwtToken(authentication);
        UserDetails userDetails = (UserPrinciple) authentication.getPrincipal();

        Optional<User> user = userRepository.findUserByEmail(userDetails.getUsername());


        return ResponseEntity.ok(new JwtResponse(jwt, userDetails.getUsername(), user.get().getName(), user.get().getLastName(), userDetails.getAuthorities()));
    }


    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignUpForm signUpRequest) {
        if (userRepository.findUserByEmail(signUpRequest.getEmail()).isPresent()) {
            return new ResponseEntity<>(new ResponseMessage("Fail -> Email is already taken!"),
                    HttpStatus.BAD_REQUEST);
        }


        User user = new User(signUpRequest.getName(), signUpRequest.getLastName(),
                signUpRequest.getEmail(), encoder.encode(signUpRequest.getPassword()));


        Role role;


        String roleSignUp = signUpRequest.getRole();

        switch (roleSignUp) {
            case "admin":
                Role adminRole = roleRepository.findRoleByName(RoleName.ROLE_ADMIN)
                        .orElseThrow(() -> new RuntimeException("Fail! -> Cause: User Role not find."));
                role = adminRole;
                break;
            case "user":
                Role userRole = roleRepository.findRoleByName(RoleName.ROLE_USER)
                        .orElseThrow(() -> new RuntimeException("Fail! -> Cause: User Role not find."));
                role = userRole;
                break;
            default:
                Role defaultRole = roleRepository.findRoleByName(RoleName.ROLE_USER)
                        .orElseThrow(() -> new RuntimeException("Fail! -> Cause: User Role not find."));
                role = defaultRole;
        }


        user.setRole(role);
        userRepository.save(user);
        /*
        emailSenderService.sendSimpleEmail(user.getEmail(), "Confirmación de cuenta",
                "Hola " + user.getName() + "! Te damos la bienvenida a GreenBuddies." + "\n\n" +
                        "-------------------------------------------------------------------------------" + "\n\n" +
                        "Hi " + user.getName() + "! Welcome to GreenBuddies.");
*/
        return new ResponseEntity<>(new ResponseMessage("User "+ signUpRequest.getName() + " was successfully registered!"), HttpStatus.CREATED);

    }

}