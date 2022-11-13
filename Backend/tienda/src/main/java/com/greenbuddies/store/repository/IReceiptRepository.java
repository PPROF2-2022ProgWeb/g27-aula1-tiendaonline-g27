package com.greenbuddies.store.repository;

import com.greenbuddies.store.model.Receipt;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface IReceiptRepository extends JpaRepository<Receipt, Long> {
    @Query("SELECT r FROM Receipt r WHERE r.cart.id = ?1")
    Optional<Receipt> findReceiptByCartId(Long id);

    @Query("SELECT r FROM Receipt r WHERE r.number = ?1")
    Optional<Receipt> findReceiptByNumber(Integer number);
}
