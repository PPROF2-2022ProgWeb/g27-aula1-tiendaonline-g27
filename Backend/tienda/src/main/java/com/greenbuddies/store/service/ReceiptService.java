package com.greenbuddies.store.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.greenbuddies.store.model.Receipt;
import com.greenbuddies.store.repository.IReceiptRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReceiptService {

    private final Logger LOGGER = LoggerFactory.getLogger((String.valueOf(CartService.class)));
    private final ObjectMapper MAPPER = new ObjectMapper();


    @Autowired
    private final IReceiptRepository receiptRepository;

    public ReceiptService(IReceiptRepository receiptRepository) {
        this.receiptRepository = receiptRepository;
    }


    public Receipt save(Receipt receipt) {
        receiptRepository.save(MAPPER.convertValue(receipt, Receipt.class));
        if (LOGGER.isInfoEnabled()) {
            LOGGER.info("Receipt saved successfully: {}", receipt);
        }
        return receipt;
    }

    public Optional<Receipt> findById(Long id) {
        Optional<Receipt> receipt = receiptRepository.findById(id);
        if (receipt.isPresent() && LOGGER.isInfoEnabled()) {
            LOGGER.info("Receipt founded: {}", receipt);
        } else {
            LOGGER.info("The id does not match with any existing receipt");
        }
        return receipt;
    }


    public List<Receipt> findAll() {
        List<Receipt> receipts = receiptRepository.findAll();
        if (LOGGER.isInfoEnabled()) {
            LOGGER.info("List of all receipts: {}", receipts);
        }
        return receipts;
    }

    public Receipt update(Receipt newReceipt) {
        Receipt receipt = receiptRepository.findById(newReceipt.getId()).get();
        receipt.setNumber(newReceipt.getNumber());
        receipt.setCart(newReceipt.getCart());
        receipt.setTotal(newReceipt.getTotal());
        if (LOGGER.isInfoEnabled()) {
            LOGGER.info("Receipt with ID {} has been updated", receipt.getId());
        }
        receiptRepository.save(receipt);
        return receipt;
    }


    public void delete(Long id) {
        if (receiptRepository.findById(id).isPresent() && LOGGER.isInfoEnabled()) {
            receiptRepository.deleteById(id);
            LOGGER.info("Receipt deleted correctly!");
        } else {
            LOGGER.info("Receipt was not found!");
        }
    }


    public Optional<Receipt> findReceiptByCartId(Long id) {
        Optional<Receipt> receipt = receiptRepository.findReceiptByCartId(id);
        if (LOGGER.isInfoEnabled()) {
            LOGGER.info("Receipt matching the cart with ID {}: {}", id, receipt);
        }
        return receipt;
    }

    public Optional<Receipt> findReceiptByNumber(Integer number) {
        Optional<Receipt> receipt = receiptRepository.findReceiptByNumber(number);
        if (LOGGER.isInfoEnabled()) {
            LOGGER.info("Receipt founded: {}", receipt);
        }
        return receipt;
    }
}
