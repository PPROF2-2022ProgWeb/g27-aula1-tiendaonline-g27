package com.greenbuddies.store.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.greenbuddies.store.model.User;
import com.greenbuddies.store.repository.IUserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.http.converter.json.Jackson2ObjectMapperBuilder;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class UserServiceTest {

    private final Jackson2ObjectMapperBuilder JSON_BUILDER = Jackson2ObjectMapperBuilder.json();
    private final ObjectMapper MAPPER = JSON_BUILDER.build();

    List<User> users = (MAPPER.readValue(new File("src/test/resources/mocked-objects/users.json"), new TypeReference<>() {}));
    IUserRepository iUserRepositoryMock = mock(IUserRepository.class);
    UserService userServiceTest = new UserService(iUserRepositoryMock);


    public UserServiceTest() throws IOException {
    }

    @BeforeEach
    public void setUp() {

        when(iUserRepositoryMock.findAll()).thenReturn(users);

        Optional<User> userName = Optional.empty();
        for (User u : users) {
            if (u.getName().equals("Green") && (u.getLastName().equals("Buddy"))) {
                userName = Optional.of(u);
            }
        }
        when(iUserRepositoryMock.findUserByCompleteName("Green", "Buddy")).thenReturn(userName);

        Optional<User> userId = Optional.empty();
        for (User u : users) {
            if (u.getId().equals(1L)) {
                userId = Optional.of(u);
            }
        }
        when(userServiceTest.findById(1L)).thenReturn(userId);

        Optional<User> userEmail = Optional.empty();
        for (User u : users) {
            if (u.getEmail().equals("cliente_green_buddies@gmail.com")) {
                userEmail = Optional.of(u);
            }
        }
        when(iUserRepositoryMock.findUserByEmail("cliente_green_buddies@gmail.com")).thenReturn(userEmail);


        List<User> usersByRole = new ArrayList<>();
        for (User u : users){
            if(u.getRole().getRoleName().name().equals("ROLE_ADMIN")){
                usersByRole.add(u);//que te pasa metodo que no haces tu trabajo?
            }
        }
        when(iUserRepositoryMock.listUsersByRole("ROLE_ADMIN")).thenReturn(usersByRole);

        List<User> usersByCountry = new ArrayList<>();
        for (User u : users){
            if(u.getCountry().getName().equals("Argentina")){
                usersByCountry.add(u);
            }
        }
        when(iUserRepositoryMock.listUsersByCountry("Argentina")).thenReturn(usersByCountry);

        List<User> usersByState = new ArrayList<>();
        for (User u : users){
            if(u.getState().getName().equals("Buenos Aires")){
                usersByState.add(u);
            }
        }
        when(iUserRepositoryMock.listUsersByState("Buenos Aires")).thenReturn(usersByState);

        List<User> usersByZipCode = new ArrayList<>();
        for (User u : users){
            if(u.getZipCode().getCode().equals("5000")){
                usersByZipCode.add(u);
            }
        }
        when(iUserRepositoryMock.listUsersByZipCode("500")).thenReturn(usersByZipCode);

        List<User> usersByZBirthDate = new ArrayList<>();
        for (User u : users){
            if(u.getBirthDate().equals("1/4/2000")){
                usersByZBirthDate.add(u);
            }
        }
        when(iUserRepositoryMock.listUsersByBirthDate("1/4/2000")).thenReturn(usersByZBirthDate);

        //User newUser = new User();
        //when(iUserRepositoryMock.save(newUser)).thenReturn(newUser);


    }

    @Test
    void shouldFindAllUsers() throws IOException {
        List<User> users = userServiceTest.findAll();
        assertFalse(users.isEmpty());
    }

    @Test
    void shouldFindUserBySpecificCompleteName() {
        Optional<User> user = userServiceTest.findUserByCompleteName("Green", "Buddy");
        assertTrue(user.isPresent());
    }

    @Test
    void shouldNotFindUserBySpecificCompleteName() {
        Optional<User> user = userServiceTest.findUserByCompleteName("José", "Milanesa");
        assertFalse(user.isPresent());
    }

    @Test
    void shouldValidateUserId1() {
        Optional<User> user = userServiceTest.findById(1L);
        assertEquals(1L, user.get().getId());
    }
    @Test
    void shouldNotFindUser() {
        Optional<User> user = userServiceTest.findById(3L);
        assertFalse(user.isPresent());
    }


    @Test
    void shouldFindUserByEmail() {
        Optional<User> user = userServiceTest.findUserByEmail("cliente_green_buddies@gmail.com");
        assertTrue(user.isPresent());
        assertEquals("Juan", user.get().getName());
    }

    @Test
    void shouldReturnValidName(){
        Optional<User> user = userServiceTest.findUserByEmail("cliente_green_buddies@gmail.com");

    }


    @Test
    void shouldListAdminUsers() {
        List<User> adminUsers = userServiceTest.listUsersByRole("ROLE_ADMIN");
        assertTrue(adminUsers.size() > 0);

    }
/*
    @Test
    void shouldSaveNewProduct() {
    }

    @Test
    void update() {
    }

    @Test
    void delete() {
    }
 */
}
