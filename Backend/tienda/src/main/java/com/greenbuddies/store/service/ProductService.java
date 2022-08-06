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
    Logger logger = Logger.getLogger(String.valueOf(ProductService.class));
    private ObjectMapper mapper;


    public Product save(Product product)  {
        productRepository.save(mapper.convertValue(product, Product.class));
        logger.info("Product saved successfully");
        return product;
    }


    public Optional<Product> findById(Long id) {
        logger.info("Search by id in Products entity");
        Optional<Product> p = productRepository.findById(id);
        if(p.isPresent()) {
           logger.info("Product founded");
        } else {
            logger.info("The id does not match with any existing product");
        }
        return p;
    }


    public List<Product> findAll() {
        List<Product> products = productRepository.findAll();
        logger.info("List of all available products");
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
        prod.setCarts(newProduct.getCarts());

        logger.info("Product with ID: "+ prod.getId() + " has been updated");
        productRepository.save(prod);
        return prod;
    }


    public void delete(Long id) {
        if(productRepository.findById(id).isPresent()){
            productRepository.deleteById(id);
            logger.info("Product deleted correctly!");
        } else {
            logger.info("Product was not found!");
        }
    }


    public Optional<Product> findProductByName(String name) {
        logger.info("Search by name in Product entity");
        Optional<Product> prod = productRepository.findProductByName(name);
        if(prod.isEmpty()) {
            logger.info("Product not found");
        }
        return prod;
    }


    public List<Product> listProductsByCategory(String name){
        logger.info("List of all products by category");
        return productRepository.listProductsByCategory(name);
    }

}
