package com.greenbuddies.tienda.exceptions;


public class BadRequestException extends Exception {
    public BadRequestException(String mensaje){
        super(mensaje);
    }
}