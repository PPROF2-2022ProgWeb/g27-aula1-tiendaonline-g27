package com.greenbuddies.store.exceptions;


public class BadRequestException extends Exception {
    public BadRequestException(String mensaje){
        super(mensaje);
    }
}