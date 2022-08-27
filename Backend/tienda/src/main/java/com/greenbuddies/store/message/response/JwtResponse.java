package com.greenbuddies.store.message.response;

import lombok.*;
import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class JwtResponse {

    /* Attributes */
    private String token;
    private String type = "Bearer";
    private String email;
    private String name;
    private String lastName;
    private Collection<? extends GrantedAuthority> authorities;

    public JwtResponse(String jwt, String username, String name, String lastName, Collection<? extends GrantedAuthority> authorities) {
    }
}
