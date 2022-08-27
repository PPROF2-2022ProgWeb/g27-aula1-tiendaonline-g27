package com.greenbuddies.store.controller;

import com.greenbuddies.store.exceptions.BadRequestException;
import com.greenbuddies.store.model.Article;
import com.greenbuddies.store.model.Product;
import com.greenbuddies.store.service.ArticleService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;

@CrossOrigin
@ControllerAdvice
@RestController
@RequestMapping("/articles")
@Data
public class ArticleController {


    /* Attributes */
    @Autowired
    private ArticleService articleService;
    private final Logger LOGGER = Logger.getLogger(String.valueOf(ArticleController.class));


    /* Methods */
    /* GET */

    @ApiOperation(value = "Search by Id in Articles entity"
            ,notes = "")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK. The resource is obtained correctly", response = Product.class ),
            @ApiResponse(code = 400, message = "Bad Request", response = String.class),
            @ApiResponse(code = 500, message = "Unexpected error") })
    @GetMapping("id/{id}")
    public Article findById(@PathVariable Long id) {
        LOGGER.info("Search by Id in Articles entity");
        return articleService.findById(id).orElse(null);
    }

    @ApiOperation(value = "Search by title in Articles entity"
            ,notes = "")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK. The resource is obtained correctly", response = Product.class ),
            @ApiResponse(code = 400, message = "Bad Request", response = String.class),
            @ApiResponse(code = 500, message = "Unexpected error") })
    @GetMapping("/{title}")
    public Optional<Article> findArticlesByTitle(@PathVariable String title) {
        LOGGER.info("Search by title in Articles entity");
        return articleService.findArticleByTitle(title);
    }

    @ApiOperation(value = "List of all Articles"
            ,notes = "")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK. The resource is obtained correctly", response = Product.class ),
            @ApiResponse(code = 400, message = "Bad Request", response = String.class),
            @ApiResponse(code = 500, message = "Unexpected error") })
    @GetMapping()
    public List<Article> findAll() {
        LOGGER.info("List of all Articles");
        return articleService.findAll();
    }


    /* POST */

    @ApiOperation(value = "Insertion of a new registry in Articles entity"
            ,notes = "")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK. The resource is obtained correctly", response = Product.class ),
            @ApiResponse(code = 400, message = "Bad Request", response = String.class),
            @ApiResponse(code = 500, message = "Unexpected error") })
    //@PreAuthorize("hasAuthority('ROLE_ADMIN')")
    @PostMapping("/save")
    public ResponseEntity save(@RequestBody Article a) {
        ResponseEntity<Article> resp;
        if (articleService.findArticleByTitle(a.getTitle()).isPresent()) {
            resp = new ResponseEntity("The article is already published!", HttpStatus.CONFLICT);
            LOGGER.info("The article is already published!");
        } else {
            resp = new ResponseEntity<Article>(articleService.save(a), HttpStatus.CREATED);
            LOGGER.info("Article published correctly");
        }
        return resp;
    }


    /* PUT */
    @ApiOperation(value = "Update by id of a record in Articles entity"
            ,notes = "")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK. The resource is obtained correctly", response = Product.class ),
            @ApiResponse(code = 400, message = "Bad Request", response = String.class),
            @ApiResponse(code = 500, message = "Unexpected error") })
    //@PreAuthorize("hasAuthority('ROLE_ADMIN')")
    @PutMapping("/update")
    public ResponseEntity<Article> updateArticle(@RequestBody Article newA) throws BadRequestException {
        ResponseEntity<Article> resp = null;

        if(articleService.findById(newA.getId()).isPresent()) {
            resp = new ResponseEntity(articleService.update(newA), HttpStatus.OK);
            LOGGER.info("Article updated successfully");
        }else{
            resp = new ResponseEntity("Article not found!", HttpStatus.NOT_FOUND);
            LOGGER.info("Article not found!");
        }
        return resp;
    }



    /* DELETE */
    @ApiOperation(value = "Deletion of a record in Articles entity by id"
            ,notes = "")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK. The resource is obtained correctly", response = Product.class ),
            @ApiResponse(code = 400, message = "Bad Request", response = String.class),
            @ApiResponse(code = 500, message = "Unexpected error") })
    //@PreAuthorize("hasAuthority('ROLE_ADMIN')")

    @DeleteMapping("/delete/{id}")
    public ResponseEntity deleteProduct(@PathVariable Long id) {
        ResponseEntity resp;

        if (articleService.findById(id).isPresent()) {
            articleService.delete(id);
            resp = new ResponseEntity(HttpStatus.NO_CONTENT);
            LOGGER.info("Article deleted successfully");
        } else {
            resp = new ResponseEntity("Article not found!", HttpStatus.NOT_FOUND);
            LOGGER.info("Article not found!");
        }
        return resp;
    }
}
