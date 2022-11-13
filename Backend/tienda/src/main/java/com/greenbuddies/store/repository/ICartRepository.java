package com.greenbuddies.store.repository;

import com.greenbuddies.store.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;


public interface ICartRepository extends JpaRepository<Cart, Long> {
    @Query("SELECT c FROM Cart c WHERE c.user.id = ?1")
    List<Cart> listCartsByUserId(Long id);
}
