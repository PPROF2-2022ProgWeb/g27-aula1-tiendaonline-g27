package com.greenbuddies.store.controller;

import com.greenbuddies.store.exceptions.BadRequestException;
import com.greenbuddies.store.model.Cart;
import com.greenbuddies.store.service.CartService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin
@ControllerAdvice
@RestController
@RequestMapping("/carts")
public class CartController {

    private final Logger LOGGER = LoggerFactory.getLogger(String.valueOf(CartController.class));

    @Autowired
    private final CartService cartService;

    public CartController(CartService cartService) {
        this.cartService = cartService;
    }

    /* Methods */
    /* GET */

    @ApiOperation(value = "Search by Id in Carts entity"
            , notes = "")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK. The resource is obtained correctly", response = Cart.class),
            @ApiResponse(code = 400, message = "Bad Request", response = String.class),
            @ApiResponse(code = 500, message = "Unexpected error")})
    @GetMapping("id/{id}")
    public Cart findById(@PathVariable Long id) {
        if (LOGGER.isInfoEnabled()) {
            LOGGER.info("Search by Id in Carts entity");
        }
        return cartService.findById(id).orElse(null);
    }


    @ApiOperation(value = "List of all Carts"
            , notes = "")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK. The resource is obtained correctly", response = Cart.class),
            @ApiResponse(code = 400, message = "Bad Request", response = String.class),
            @ApiResponse(code = 500, message = "Unexpected error")})
    @GetMapping()
    public List<Cart> findAll() {
        if (LOGGER.isInfoEnabled()) {
            LOGGER.info("List of all Carts");
        }
        return cartService.findAll();
    }

    @ApiOperation(value = "List of all Carts by user"
            , notes = "")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK. The resource is obtained correctly", response = Cart.class),
            @ApiResponse(code = 400, message = "Bad Request", response = String.class),
            @ApiResponse(code = 500, message = "Unexpected error")})
    //@PreAuthorize("hasAuthority('ROLE_ADMIN')")
    @GetMapping("user/{id}")
    public List<Cart> listCartsByUserId(@PathVariable Long id) {
        if (LOGGER.isInfoEnabled()) {
            LOGGER.info("List of all Carts by user");
        }
        return cartService.listCartsByUserId(id);
    }


    /* POST */

    @ApiOperation(value = "Insertion of a new registry in Carts entity"
            , notes = "")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK. The resource is obtained correctly", response = Cart.class),
            @ApiResponse(code = 400, message = "Bad Request", response = String.class),
            @ApiResponse(code = 500, message = "Unexpected error")})
    //@PreAuthorize("hasAuthority('ROLE_ADMIN')")
    @PostMapping("/save")
    public ResponseEntity<Cart> save(@RequestBody Cart c) {
        ResponseEntity<Cart> resp;
        if (cartService.findById(c.getId()).isPresent()) {
            resp = new ResponseEntity("The cart already exists!", HttpStatus.CONFLICT);

        } else {
            resp = new ResponseEntity<>(cartService.save(c), HttpStatus.CREATED);
        }
        return resp;
    }


    /* PUT */
    @ApiOperation(value = "Update by id of a record in Carts entity"
            , notes = "")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK. The resource is obtained correctly", response = Cart.class),
            @ApiResponse(code = 400, message = "Bad Request", response = String.class),
            @ApiResponse(code = 500, message = "Unexpected error")})
    //@PreAuthorize("hasAuthority('ROLE_ADMIN')")
    @PutMapping("/update")
    public ResponseEntity<Cart> updateCart(@RequestBody Cart newCart) throws BadRequestException {
        ResponseEntity<Cart> resp = null;

        if (cartService.findById(newCart.getId()).isPresent()) {
            resp = new ResponseEntity<>(cartService.update(newCart), HttpStatus.OK);

        } else {
            resp = new ResponseEntity("Cart not found!", HttpStatus.NOT_FOUND);

        }
        return resp;
    }


    /* DELETE */
    @ApiOperation(value = "Deletion of a record in Carts entity by id"
            , notes = "")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK. The resource is obtained correctly", response = Cart.class),
            @ApiResponse(code = 400, message = "Bad Request", response = String.class),
            @ApiResponse(code = 500, message = "Unexpected error")})
    //@PreAuthorize("hasAuthority('ROLE_ADMIN')")

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteCart(@PathVariable Long id) {
        ResponseEntity<String> resp;

        if (cartService.findById(id).isPresent()) {
            cartService.delete(id);
            resp = new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            resp = new ResponseEntity<>("Cart not found!", HttpStatus.NOT_FOUND);
        }
        return resp;
    }
}
