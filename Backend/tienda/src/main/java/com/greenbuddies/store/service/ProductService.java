package com.greenbuddies.store.service;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.greenbuddies.store.model.Product;
import com.greenbuddies.store.repository.IProductRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class ProductService {

    private final Logger LOGGER = LoggerFactory.getLogger((String.valueOf(ProductService.class)));
    private final ObjectMapper MAPPER = new ObjectMapper();


    @Autowired
    private final IProductRepository productRepository;


    public ProductService(IProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Product save(Product product) {
        productRepository.save(MAPPER.convertValue(product, Product.class));
        if (LOGGER.isInfoEnabled()) {
            LOGGER.info("Product saved successfully: {}", product);
        }
        return product;
    }


    public Optional<Product> findById(Long id) {
        Optional<Product> product = productRepository.findById(id);
        if (product.isPresent()) {
            LOGGER.info("Product founded: {}", product);
        } else {
            LOGGER.info("The id does not match with any existing product");
        }
        return product;
    }


    public List<Product> findAll() {
        List<Product> products = productRepository.findAll();
        if (LOGGER.isInfoEnabled()) {
            LOGGER.info("Available products: {}", products);
        }
        return products;
    }

    public Product update(Product newProduct) {
        Product prod = productRepository.findById(newProduct.getId()).get();
        prod.setName(newProduct.getName());
        prod.setQuantity(newProduct.getQuantity());
        prod.setCategory(newProduct.getCategory());
        prod.setDescription(newProduct.getDescription());
        prod.setPrice(newProduct.getPrice());
        prod.setImages(newProduct.getImages());
        prod.setDetails(newProduct.getDetails());
        prod.setPriceWithDiscount(newProduct.getPriceWithDiscount());

        if (LOGGER.isInfoEnabled()) {
            LOGGER.info("Product with ID {}: has been updated", prod.getId());
        }
        productRepository.save(prod);
        return prod;
    }


    public void delete(Long id) {
        if (productRepository.findById(id).isPresent() && LOGGER.isInfoEnabled()) {
            productRepository.deleteById(id);
            LOGGER.info("Product deleted correctly!");
        } else {
            LOGGER.info("Product was not found!");
        }
    }


    public Optional<Product> findProductByName(String name) {
        Optional<Product> prod = productRepository.findProductByName(name);
        if (prod.isEmpty() && LOGGER.isInfoEnabled()) {
            LOGGER.info("Product not found");
        } else {
            LOGGER.info("Product founded: {}", prod);
        }
        return prod;
    }


    public List<Product> listProductsByCategory(String name) {
        List<Product> products = productRepository.listProductsByCategory(name);
        if (LOGGER.isInfoEnabled()) {
            LOGGER.info("List of all products by category {}: {}", name, products);
        }
        return products;
    }
}
