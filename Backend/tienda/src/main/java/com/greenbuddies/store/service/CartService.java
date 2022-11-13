package com.greenbuddies.store.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.greenbuddies.store.model.Cart;
import com.greenbuddies.store.repository.ICartRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CartService {
    private final Logger LOGGER = LoggerFactory.getLogger((String.valueOf(CartService.class)));
    private final ObjectMapper MAPPER = new ObjectMapper();


    @Autowired
    private final ICartRepository cartRepository;

    public CartService(ICartRepository cartRepository) {
        this.cartRepository = cartRepository;
    }

    public Cart save(Cart cart) {
        cartRepository.save(MAPPER.convertValue(cart, Cart.class));
        if (LOGGER.isInfoEnabled()) {
            LOGGER.info("Cart saved successfully: {}", cart);
        }
        return cart;
    }

    public Optional<Cart> findById(Long id) {
        LOGGER.info("Search by id in Carts entity");
        Optional<Cart> cart = cartRepository.findById(id);
        if (cart.isPresent() && LOGGER.isInfoEnabled()) {
            LOGGER.info("Cart founded: {}", cart);
        } else {
            LOGGER.info("The id does not match with any existing cart");
        }
        return cart;
    }


    public List<Cart> findAll() {
        List<Cart> carts = cartRepository.findAll();
        if (LOGGER.isInfoEnabled()) {
            LOGGER.info("Carts: {}", carts);
        }
        return carts;
    }

    public Cart update(Cart newCart) {
        Cart cart = cartRepository.findById(newCart.getId()).get();
        cart.setUser(newCart.getUser());
        cart.setReceipt(newCart.getReceipt());
        cart.setProducts(newCart.getProducts());
        if (LOGGER.isInfoEnabled()) {
            LOGGER.info("Cart with ID: {} has been updated", cart.getId());
        }
        cartRepository.save(cart);
        return cart;
    }


    public void delete(Long id) {
        if (cartRepository.findById(id).isPresent() && LOGGER.isInfoEnabled()) {
            cartRepository.deleteById(id);
            LOGGER.info("Cart deleted correctly!");
        } else {
            LOGGER.info("Cart was not found!");
        }
    }


    public List<Cart> listCartsByUserId(Long id) {
        List<Cart> carts = cartRepository.listCartsByUserId(id);
        if (LOGGER.isInfoEnabled()) {
            LOGGER.info("List of all carts by user Id {}: {}", id, carts);
        }
        return carts;
    }
}
