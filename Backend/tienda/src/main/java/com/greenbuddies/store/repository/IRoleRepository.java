package com.greenbuddies.store.repository;



import com.greenbuddies.store.model.Role;
import com.greenbuddies.store.model.RoleName;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface IRoleRepository extends JpaRepository<Role, Long>{
    @Query("SELECT r FROM Role r WHERE r.roleName = ?1")
    Optional<Role> findRoleByName(RoleName roleName);
}
