package com.greenbuddies.store.security.service;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.greenbuddies.store.model.Role;
import com.greenbuddies.store.model.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.*;

public class UserPrinciple implements UserDetails {

    /* Attributes */
    private static final long serialVersionUID = 1L;
    private Long id;
    private String email;

    @JsonIgnore
    private String password;
    private Role role;

    /* Constructor */
    public UserPrinciple(Long id, String email, String password, Role role) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.role = role;
    }


    public static UserPrinciple build(Optional<User> user) {

        Role role = user.get().getRole();

        return new UserPrinciple(
                user.get().getId(),
                user.get().getEmail(),
                user.get().getPassword(),
                role
        );
    }


    /* Getters and Setters */

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }


    /* Methods */
    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        List<GrantedAuthority> roles = new ArrayList<>();
        roles.add(new SimpleGrantedAuthority(role.getName().toString()));
        return roles;
    }

    @Override
    public String getPassword() {
        return password;
    }



    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        UserPrinciple user = (UserPrinciple) o;
        return Objects.equals(id, user.id);
    }

}
