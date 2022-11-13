package com.greenbuddies.store.repository;


import com.greenbuddies.store.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface IUserRepository extends JpaRepository<User, Long> {
    @Query("SELECT u FROM User u WHERE u.name = ?1 AND u.lastName = ?2")
    Optional<User> findUserByCompleteName(String name, String lastName);

    @Query("SELECT u FROM User u WHERE u.email = ?1")
    Optional<User> findUserByEmail(String email);

    @Query("SELECT u FROM User u WHERE u.role.roleName = ?1")
    List<User> listUsersByRole(String roleName);

    @Query("SELECT u FROM User u WHERE u.country.name = ?1")
    List<User> listUsersByCountry(String name);

    @Query("SELECT u FROM User u WHERE u.state.name = ?1")
    List<User> listUsersByState(String name);

    @Query("SELECT u FROM User u WHERE u.zipCode.code = ?1")
    List<User> listUsersByZipCode(String code);

    @Query("SELECT u FROM User u WHERE u.birthDate = ?1")
    List<User> listUsersByBirthDate(String birthDate);


}
