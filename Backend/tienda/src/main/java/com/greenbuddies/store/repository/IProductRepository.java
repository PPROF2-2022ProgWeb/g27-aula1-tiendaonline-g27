package com.greenbuddies.store.repository;

import com.greenbuddies.store.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface IProductRepository extends JpaRepository<Product, Long> {
    @Query("SELECT p FROM Product p WHERE p.name LIKE %:name%")
    Optional<Product> findProductByName(@Param("name")String name);

    @Query("SELECT p FROM Product p WHERE p.category.name = ?1")
    List<Product> listProductsByCategory(String name);

}
