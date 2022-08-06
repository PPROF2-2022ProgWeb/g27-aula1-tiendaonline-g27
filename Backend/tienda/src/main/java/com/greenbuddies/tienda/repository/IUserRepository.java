package com.greenbuddies.tienda.repository;

import com.greenbuddies.tienda.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IUserRepository extends JpaRepository<User, Long> {
}
