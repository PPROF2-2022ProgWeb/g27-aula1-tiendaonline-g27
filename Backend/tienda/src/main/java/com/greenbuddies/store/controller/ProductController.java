package com.greenbuddies.store.controller;


import com.greenbuddies.store.exceptions.BadRequestException;
import com.greenbuddies.store.model.Product;
import com.greenbuddies.store.service.ProductService;
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
import java.util.Optional;


@CrossOrigin
@ControllerAdvice
@RestController
@RequestMapping("/products")
public class ProductController {

    private final Logger LOGGER = LoggerFactory.getLogger(String.valueOf(ProductController.class));
    /* Attributes */
    @Autowired
    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    /* Methods */
    /* GET */

    @ApiOperation(value = "Search by Id in Products entity"
            , notes = "")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK. The resource is obtained correctly", response = Product.class),
            @ApiResponse(code = 400, message = "Bad Request", response = String.class),
            @ApiResponse(code = 500, message = "Unexpected error")})
    @GetMapping("id/{id}")
    public Product findById(@PathVariable Long id) {

        LOGGER.info("Search by Id in Products entity");

        return productService.findById(id).orElse(null);
    }

    @ApiOperation(value = "Search by name in Products entity"
            , notes = "")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK. The resource is obtained correctly", response = Product.class),
            @ApiResponse(code = 400, message = "Bad Request", response = String.class),
            @ApiResponse(code = 500, message = "Unexpected error")})
    @GetMapping("/{name}")
    public Optional<Product> findProductByName(@PathVariable String name) {

        LOGGER.info("Search by name in Products entity");

        return productService.findProductByName(name);
    }


    @ApiOperation(value = "List of all Products by category"
            , notes = "")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK. The resource is obtained correctly", response = Product.class),
            @ApiResponse(code = 400, message = "Bad Request", response = String.class),
            @ApiResponse(code = 500, message = "Unexpected error")})
    @GetMapping("category/{name}")
    public List<Product> listProductsByCategory(@PathVariable String name) {

        LOGGER.info("List of all Products by category");

        return productService.listProductsByCategory(name);
    }


    @ApiOperation(value = "List of all Products"
            , notes = "")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK. The resource is obtained correctly", response = Product.class),
            @ApiResponse(code = 400, message = "Bad Request", response = String.class),
            @ApiResponse(code = 500, message = "Unexpected error")})
    @GetMapping()
    public List<Product> findAll() {

        LOGGER.info("List of all Products");

        return productService.findAll();
    }


    /* POST */

    @ApiOperation(value = "Insertion of a new registry in Products entity"
            , notes = "")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK. The resource is obtained correctly", response = Product.class),
            @ApiResponse(code = 400, message = "Bad Request", response = String.class),
            @ApiResponse(code = 500, message = "Unexpected error")})
    //@PreAuthorize("hasAuthority('ROLE_ADMIN')")
    @PostMapping("/save")
    public ResponseEntity<Product> save(@RequestBody Product p) {
        ResponseEntity<Product> resp;
        if (productService.findProductByName(p.getName()).isPresent()) {
            resp = new ResponseEntity("The product is already registered!", HttpStatus.CONFLICT);
        } else {
            resp = new ResponseEntity<>(productService.save(p), HttpStatus.CREATED);
        }
        return resp;
    }


    /* PUT */
    @ApiOperation(value = "Update by id of a record in Products entity"
            , notes = "")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK. The resource is obtained correctly", response = Product.class),
            @ApiResponse(code = 400, message = "Bad Request", response = String.class),
            @ApiResponse(code = 500, message = "Unexpected error")})
    //@PreAuthorize("hasAuthority('ROLE_ADMIN')")
    @PutMapping("/update")
    public ResponseEntity<Product> updateProduct(@RequestBody Product newP) throws BadRequestException {
        ResponseEntity<Product> resp;
        if (productService.findById(newP.getId()).isPresent()) {
            resp = new ResponseEntity<>(productService.update(newP), HttpStatus.OK);
        } else {
            resp = new ResponseEntity("Product not found!", HttpStatus.NOT_FOUND);
        }
        return resp;
    }


    /* DELETE */
    @ApiOperation(value = "Deletion of a record in Products entity by id"
            , notes = "")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK. The resource is obtained correctly", response = Product.class),
            @ApiResponse(code = 400, message = "Bad Request", response = String.class),
            @ApiResponse(code = 500, message = "Unexpected error")})
    //@PreAuthorize("hasAuthority('ROLE_ADMIN')")

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable Long id) {
        ResponseEntity<String> resp;
        if (productService.findById(id).isPresent()) {
            productService.delete(id);
            resp = new ResponseEntity<>(HttpStatus.NO_CONTENT);

        } else {
            resp = new ResponseEntity<>("Product not found!", HttpStatus.NOT_FOUND);
        }
        return resp;
    }
}
