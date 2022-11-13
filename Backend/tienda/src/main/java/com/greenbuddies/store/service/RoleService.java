package com.greenbuddies.store.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.greenbuddies.store.model.Role;
import com.greenbuddies.store.model.RoleName;
import com.greenbuddies.store.repository.IRoleRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RoleService {

    private final Logger LOGGER = LoggerFactory.getLogger((String.valueOf(RoleService.class)));
    private final ObjectMapper MAPPER = new ObjectMapper();

    @Autowired
    private final IRoleRepository roleRepository;


    public RoleService(IRoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    public Role save(Role role) {
        roleRepository.save(MAPPER.convertValue(role, Role.class));
        if (LOGGER.isInfoEnabled()) {
            LOGGER.info("Role saved successfully: {}", role);
        }
        return role;
    }

    public Optional<Role> findById(Long id) {
        Optional<Role> role = roleRepository.findById(id);
        if (role.isPresent() && LOGGER.isInfoEnabled()) {
            LOGGER.info("Role founded: {}", role);
        } else {
            LOGGER.info("The id does not match with any existing role");
        }
        return role;
    }


    public List<Role> findAll() {
        List<Role> roles = roleRepository.findAll();
        if (LOGGER.isInfoEnabled()) {
            LOGGER.info("List of all available roles: {}", roles);
        }
        return roles;
    }

    public Role update(Role newRole) {
        Role role = roleRepository.findById(newRole.getId()).get();
        role.setRoleName(newRole.getRoleName());

        if (LOGGER.isInfoEnabled()) {
            LOGGER.info("Role with ID: {} has been updated", role.getId());
        }
        roleRepository.save(role);
        return role;
    }


    public void delete(Long id) {
        if (roleRepository.findById(id).isPresent() && LOGGER.isInfoEnabled()) {
            roleRepository.deleteById(id);
            LOGGER.info("Role deleted correctly!");
        } else {
            LOGGER.info("Role was not found!");
        }
    }


    public Optional<Role> findRoleByName(RoleName roleName) {
        Optional<Role> role = roleRepository.findRoleByName(roleName);
        if (role.isEmpty() && LOGGER.isInfoEnabled()) {
            LOGGER.info("Role not found");
        } else {
            LOGGER.info("Role founded: {}", role);
        }
        return role;
    }
}
