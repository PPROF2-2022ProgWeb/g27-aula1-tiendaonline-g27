package com.greenbuddies.store.repository;

import com.greenbuddies.store.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IUserRepository extends JpaRepository<User, Long> {
}
