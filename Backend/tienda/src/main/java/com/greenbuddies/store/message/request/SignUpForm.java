package com.greenbuddies.store.message.request;

import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class SignUpForm {
    /* Attributes */
    private String name;
    private String lastName;
    private String email;
    private String role;
    private String password;
}
