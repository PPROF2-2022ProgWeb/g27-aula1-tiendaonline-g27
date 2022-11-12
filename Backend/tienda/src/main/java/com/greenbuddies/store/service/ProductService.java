package com.greenbuddies.store.service;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.greenbuddies.store.model.Product;
import com.greenbuddies.store.repository.IProductRepository;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;

@Data
@Service
public class ProductService {

    /* Attributes*/
    @Autowired
    private IProductRepository productRepository;
    private final Logger LOGGER = Logger.getLogger((String.valueOf(ProductService.class)));

    @Autowired
    private ObjectMapper mapper;

    public ProductService(IProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Product save(Product product)  {
        productRepository.save(mapper.convertValue(product, Product.class));
        LOGGER.info("Product saved successfully");
        return product;
    }


    public Optional<Product> findById(Long id) {
        LOGGER.info("Search by id in Products entity");
        Optional<Product> p = productRepository.findById(id);
        if(p.isPresent()) {
           LOGGER.info("Product founded");
        } else {
            LOGGER.info("The id does not match with any existing product");
        }
        return p;
    }


    public List<Product> findAll() {
        List<Product> products = productRepository.findAll();
        LOGGER.info("List of all available products");
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

        LOGGER.info("Product with ID: "+ prod.getId() + " has been updated");
        productRepository.save(prod);
        return prod;
    }


    public void delete(Long id) {
        if(productRepository.findById(id).isPresent()){
            productRepository.deleteById(id);
            LOGGER.info("Product deleted correctly!");
        } else {
            LOGGER.info("Product was not found!");
        }
    }


    public Optional<Product> findProductByName(String name) {
        LOGGER.info("Search by name in Product entity");
        Optional<Product> prod = productRepository.findProductByName(name);
        if(prod.isEmpty()) {
            LOGGER.info("Product not found");
        }
        return prod;
    }


    public List<Product> listProductsByCategory(String name){
        LOGGER.info("List of all products by category");
        return productRepository.listProductsByCategory(name);
    }
}
