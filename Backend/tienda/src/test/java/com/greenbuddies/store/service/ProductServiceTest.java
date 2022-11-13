package com.greenbuddies.store.service;


import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.greenbuddies.store.model.Product;
import com.greenbuddies.store.repository.IProductRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.http.converter.json.Jackson2ObjectMapperBuilder;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;


public class ProductServiceTest {


    private final Jackson2ObjectMapperBuilder JSON_BUILDER = Jackson2ObjectMapperBuilder.json();
    private final ObjectMapper MAPPER = JSON_BUILDER.build();

    List<Product> products = (MAPPER.readValue(new File("src/test/resources/mocked-objects/products.json"), new TypeReference<>() {
    }));
    IProductRepository iProductRepositoryMock = mock(IProductRepository.class);
    ProductService productServiceTest = new ProductService(iProductRepositoryMock);


    public ProductServiceTest() throws IOException {
    }

    @BeforeEach
    public void setUp() {

        when(iProductRepositoryMock.findAll()).thenReturn(products);

        Optional<Product> productName = Optional.empty();
        for (Product p : products) {
            if (p.getName().equals("Porta Cepillo | Meraki")) {
                productName = Optional.of(p);
            }
        }
        when(iProductRepositoryMock.findProductByName("Porta Cepillo | Meraki")).thenReturn(productName);

        Optional<Product> productId = Optional.empty();
        for (Product p : products) {
            if (p.getId().equals(2L)) {
                productId = Optional.of(p);
            }
        }
        when(iProductRepositoryMock.findById(2L)).thenReturn(productId);

        List<Product> byCategoryProducts = new ArrayList<>();
        for (Product p : products) {
            if (p.getCategory().getName().equals("Cuidado personal")) {
                byCategoryProducts.add(p);
            }
        }
        when(iProductRepositoryMock.listProductsByCategory("Cuidado personal")).thenReturn(byCategoryProducts);

        Product newProduct = new Product();
        when(iProductRepositoryMock.save(newProduct)).thenReturn(newProduct);
    }

    @Test
    void shouldReturnNonEmptyListOfProducts() throws IOException {
        List<Product> products = productServiceTest.findAll();
        assertTrue(products.size() > 0);
        //assertFalse(products.size()==0);
    }


    @Test
    void shouldFindProductByName() {
        Optional<Product> product = productServiceTest.findProductByName("Porta Cepillo | Meraki");
        assertTrue(product.isPresent());
        Assertions.assertEquals("Porta Cepillo | Meraki", product.get().getName());
        System.out.println(product);
    }

    @Test
    void shouldFindProductById() {
        Optional<Product> product = productServiceTest.findById(2L);
        Assertions.assertEquals(2L, product.get().getId());
    }

    @Test
    void shouldListProductsByCategory() {
        List<Product> personalCareProducts = productServiceTest.listProductsByCategory("Cuidado personal");
        assertTrue(personalCareProducts.size() == 6);
        personalCareProducts.forEach(System.out::println);
    }

    @Test
    void shouldSaveNewProduct() {
    }

    @Test
    void update() {
    }

    @Test
    void delete() {
    }

}
