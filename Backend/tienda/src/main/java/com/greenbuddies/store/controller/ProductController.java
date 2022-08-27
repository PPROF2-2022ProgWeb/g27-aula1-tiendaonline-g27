package com.greenbuddies.store.controller;


import com.greenbuddies.store.service.ProductService;
import com.greenbuddies.store.exceptions.BadRequestException;
import com.greenbuddies.store.model.Product;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;

@CrossOrigin
@ControllerAdvice
@RestController
@RequestMapping("/products")
@Data
public class ProductController {

    /* Attributes */
    @Autowired
    private ProductService productService;
    private final Logger LOGGER = Logger.getLogger(String.valueOf(ProductController.class));


    /* Methods */
    /* GET */

    @ApiOperation(value = "Search by Id in Products entity"
            ,notes = "")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK. The resource is obtained correctly", response = Product.class ),
            @ApiResponse(code = 400, message = "Bad Request", response = String.class),
            @ApiResponse(code = 500, message = "Unexpected error") })
    @GetMapping("id/{id}")
    public Product findById(@PathVariable Long id) {
        LOGGER.info("Search by Id in Products entity");
        return productService.findById(id).orElse(null);
    }

    @ApiOperation(value = "Search by name in Products entity"
            ,notes = "")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK. The resource is obtained correctly", response = Product.class ),
            @ApiResponse(code = 400, message = "Bad Request", response = String.class),
            @ApiResponse(code = 500, message = "Unexpected error") })
    @GetMapping("/{name}")
    public Optional<Product> findProductByName(@PathVariable String name) {
        LOGGER.info("Search by name in Products entity");
        return productService.findProductByName(name);
    }


    @ApiOperation(value = "List of all Products by category"
            ,notes = "")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK. The resource is obtained correctly", response = Product.class ),
            @ApiResponse(code = 400, message = "Bad Request", response = String.class),
            @ApiResponse(code = 500, message = "Unexpected error") })
    @GetMapping("category/{name}")
    public List<Product> listProductsByCategory(@PathVariable String name) {
        LOGGER.info("List of all Products by category");
        return productService.listProductsByCategory(name);
    }


    @ApiOperation(value = "List of all Products"
            ,notes = "")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK. The resource is obtained correctly", response = Product.class ),
            @ApiResponse(code = 400, message = "Bad Request", response = String.class),
            @ApiResponse(code = 500, message = "Unexpected error") })
    @GetMapping()
    public List<Product> findAll() {
        LOGGER.info("List of all Products");
        return productService.findAll();
    }


    /* POST */

    @ApiOperation(value = "Insertion of a new registry in Products entity"
            ,notes = "")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK. The resource is obtained correctly", response = Product.class ),
            @ApiResponse(code = 400, message = "Bad Request", response = String.class),
            @ApiResponse(code = 500, message = "Unexpected error") })
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    @PostMapping("/save")
    public ResponseEntity save(@RequestBody Product p) {
        ResponseEntity<Product> resp;
        if (productService.findProductByName(p.getName()).isPresent()) {
            resp = new ResponseEntity("The product is already registered!", HttpStatus.CONFLICT);
            LOGGER.info("The product is already registered!");
        } else {
            resp = new ResponseEntity<Product>(productService.save(p), HttpStatus.CREATED);
            LOGGER.info("Product registered correctly");
        }
        return resp;
    }


    /* PUT */
    @ApiOperation(value = "Update by id of a record in Products entity"
            ,notes = "")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK. The resource is obtained correctly", response = Product.class ),
            @ApiResponse(code = 400, message = "Bad Request", response = String.class),
            @ApiResponse(code = 500, message = "Unexpected error") })
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    @PutMapping("/update")
    public ResponseEntity<Product> updateProduct(@RequestBody Product newP) throws BadRequestException {
        ResponseEntity<Product> resp = null;

        if(productService.findById(newP.getId()).isPresent()) {
            resp = new ResponseEntity(productService.update(newP), HttpStatus.OK);
            LOGGER.info("Product updated successfully");
        }else{
            resp = new ResponseEntity("Product not found!", HttpStatus.NOT_FOUND);
            LOGGER.info("Product not found!");
        }
        return resp;
    }



    /* DELETE */
    @ApiOperation(value = "Deletion of a record in Products entity by id"
            ,notes = "")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK. The resource is obtained correctly", response = Product.class ),
            @ApiResponse(code = 400, message = "Bad Request", response = String.class),
            @ApiResponse(code = 500, message = "Unexpected error") })
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")

    @DeleteMapping("/delete/{id}")
    public ResponseEntity deleteProduct(@PathVariable Long id) {
        ResponseEntity resp;

        if (productService.findById(id).isPresent()) {
            productService.delete(id);
            resp = new ResponseEntity(HttpStatus.NO_CONTENT);
            LOGGER.info("Product deleted successfully");
        } else {
            resp = new ResponseEntity("Product not found!", HttpStatus.NOT_FOUND);
            LOGGER.info("Product not found!");
        }
        return resp;
    }
}
