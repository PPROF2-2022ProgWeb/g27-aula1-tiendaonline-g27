package com.greenbuddies.store.message.request;

import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class LoginForm {

    /* Attributes */
    private String email;
    private String password;


}
