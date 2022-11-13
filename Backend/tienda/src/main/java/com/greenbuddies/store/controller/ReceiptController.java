package com.greenbuddies.store.controller;

import com.greenbuddies.store.exceptions.BadRequestException;
import com.greenbuddies.store.model.Receipt;
import com.greenbuddies.store.service.ReceiptService;
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
@RequestMapping("/receipts")
public class ReceiptController {

    private final Logger LOGGER = LoggerFactory.getLogger(String.valueOf(ReceiptController.class));

    @Autowired
    private final ReceiptService receiptService;

    public ReceiptController(ReceiptService receiptService) {
        this.receiptService = receiptService;
    }

    /* Methods */
    /* GET */

    @ApiOperation(value = "Search by Id in Receipts entity"
            , notes = "")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK. The resource is obtained correctly", response = Receipt.class),
            @ApiResponse(code = 400, message = "Bad Request", response = String.class),
            @ApiResponse(code = 500, message = "Unexpected error")})
    @GetMapping("id/{id}")
    public Receipt findById(@PathVariable Long id) {
        if (LOGGER.isInfoEnabled()) {
            LOGGER.info("Search by Id in Receipts entity");
        }
        return receiptService.findById(id).orElse(null);
    }


    @ApiOperation(value = "List of all Receipts"
            , notes = "")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK. The resource is obtained correctly", response = Receipt.class),
            @ApiResponse(code = 400, message = "Bad Request", response = String.class),
            @ApiResponse(code = 500, message = "Unexpected error")})
    @GetMapping()
    public List<Receipt> findAll() {
        if (LOGGER.isInfoEnabled()) {
            LOGGER.info("List of all Receipts");
        }
        return receiptService.findAll();
    }

    @ApiOperation(value = "Find by cart Id in Receipts entity"
            , notes = "")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK. The resource is obtained correctly", response = Receipt.class),
            @ApiResponse(code = 400, message = "Bad Request", response = String.class),
            @ApiResponse(code = 500, message = "Unexpected error")})
    //@PreAuthorize("hasAuthority('ROLE_ADMIN')")
    @GetMapping("cart/{id}")
    public Optional<Receipt> findReceiptByCartId(@PathVariable Long id) {
        if (LOGGER.isInfoEnabled()) {
            LOGGER.info("Find receipt by cart id");
        }
        return receiptService.findReceiptByCartId(id);
    }

    @ApiOperation(value = "Find by Receipt by number"
            , notes = "")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK. The resource is obtained correctly", response = Receipt.class),
            @ApiResponse(code = 400, message = "Bad Request", response = String.class),
            @ApiResponse(code = 500, message = "Unexpected error")})
    //@PreAuthorize("hasAuthority('ROLE_ADMIN')")
    @GetMapping("number/{number}")
    public Optional<Receipt> findReceiptByNumber(@PathVariable Integer number) {
        if (LOGGER.isInfoEnabled()) {
            LOGGER.info("Find receipt by number");
        }
        return receiptService.findReceiptByNumber(number);
    }


    /* POST */

    @ApiOperation(value = "Insertion of a new registry in Receipts entity"
            , notes = "")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK. The resource is obtained correctly", response = Receipt.class),
            @ApiResponse(code = 400, message = "Bad Request", response = String.class),
            @ApiResponse(code = 500, message = "Unexpected error")})
    //@PreAuthorize("hasAuthority('ROLE_ADMIN')")
    @PostMapping("/save")
    public ResponseEntity<Receipt> save(@RequestBody Receipt receipt) {
        ResponseEntity<Receipt> resp;
        if (receiptService.findById(receipt.getId()).isPresent()) {
            resp = new ResponseEntity("The receipt already exists!", HttpStatus.CONFLICT);

        } else {
            resp = new ResponseEntity<>(receiptService.save(receipt), HttpStatus.CREATED);
        }
        return resp;
    }


    /* PUT */
    @ApiOperation(value = "Update by id of a record in Receipts entity"
            , notes = "")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK. The resource is obtained correctly", response = Receipt.class),
            @ApiResponse(code = 400, message = "Bad Request", response = String.class),
            @ApiResponse(code = 500, message = "Unexpected error")})
    //@PreAuthorize("hasAuthority('ROLE_ADMIN')")
    @PutMapping("/update")
    public ResponseEntity<Receipt> update(@RequestBody Receipt newReceipt) throws BadRequestException {
        ResponseEntity<Receipt> resp;

        if (receiptService.findById(newReceipt.getId()).isPresent()) {
            resp = new ResponseEntity<>(receiptService.update(newReceipt), HttpStatus.OK);

        } else {
            resp = new ResponseEntity("Receipt not found!", HttpStatus.NOT_FOUND);

        }
        return resp;
    }


    /* DELETE */
    @ApiOperation(value = "Deletion of a record in Receipts entity by id"
            , notes = "")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK. The resource is obtained correctly", response = Receipt.class),
            @ApiResponse(code = 400, message = "Bad Request", response = String.class),
            @ApiResponse(code = 500, message = "Unexpected error")})
    //@PreAuthorize("hasAuthority('ROLE_ADMIN')")

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        ResponseEntity<String> resp;

        if (receiptService.findById(id).isPresent()) {
            receiptService.delete(id);
            resp = new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            resp = new ResponseEntity<>("Receipt not found!", HttpStatus.NOT_FOUND);
        }
        return resp;
    }
}
