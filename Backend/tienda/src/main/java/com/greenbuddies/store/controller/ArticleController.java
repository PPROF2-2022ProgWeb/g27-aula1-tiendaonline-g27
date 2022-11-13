package com.greenbuddies.store.controller;

import com.greenbuddies.store.exceptions.BadRequestException;
import com.greenbuddies.store.model.Article;
import com.greenbuddies.store.service.ArticleService;
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
@RequestMapping("/articles")
public class ArticleController {

    private final Logger LOGGER = LoggerFactory.getLogger(String.valueOf(ArticleController.class));
    /* Attributes */
    @Autowired
    private final ArticleService articleService;

    public ArticleController(ArticleService articleService) {
        this.articleService = articleService;
    }

    /* Methods */
    /* GET */

    @ApiOperation(value = "Search by Id in Articles entity"
            , notes = "")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK. The resource is obtained correctly", response = Article.class),
            @ApiResponse(code = 400, message = "Bad Request", response = String.class),
            @ApiResponse(code = 500, message = "Unexpected error")})
    @GetMapping("id/{id}")
    public Article findById(@PathVariable Long id) {
        if (LOGGER.isInfoEnabled()) {
            LOGGER.info("Search by Id in Articles entity");
        }
        return articleService.findById(id).orElse(null);
    }

    @ApiOperation(value = "Search by title in Articles entity"
            , notes = "")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK. The resource is obtained correctly", response = Article.class),
            @ApiResponse(code = 400, message = "Bad Request", response = String.class),
            @ApiResponse(code = 500, message = "Unexpected error")})
    @GetMapping("/{title}")
    public Optional<Article> findArticlesByTitle(@PathVariable String title) {
        if (LOGGER.isInfoEnabled()) {
            LOGGER.info("Search by title in Articles entity");
        }
        return articleService.findArticleByTitle(title);
    }

    @ApiOperation(value = "List of all Articles"
            , notes = "")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK. The resource is obtained correctly", response = Article.class),
            @ApiResponse(code = 400, message = "Bad Request", response = String.class),
            @ApiResponse(code = 500, message = "Unexpected error")})
    @GetMapping()
    public List<Article> findAll() {
        if (LOGGER.isInfoEnabled()) {
            LOGGER.info("List of all Articles");
        }
        return articleService.findAll();
    }


    /* POST */

    @ApiOperation(value = "Insertion of a new registry in Articles entity"
            , notes = "")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK. The resource is obtained correctly", response = Article.class),
            @ApiResponse(code = 400, message = "Bad Request", response = String.class),
            @ApiResponse(code = 500, message = "Unexpected error")})
    //@PreAuthorize("hasAuthority('ROLE_ADMIN')")
    @PostMapping("/save")
    public ResponseEntity<Article> save(@RequestBody Article a) {
        ResponseEntity<Article> resp;
        if (articleService.findArticleByTitle(a.getTitle()).isPresent()) {
            resp = new ResponseEntity("The article is already published!", HttpStatus.CONFLICT);
        } else {
            resp = new ResponseEntity<>(articleService.save(a), HttpStatus.CREATED);
        }
        return resp;
    }


    /* PUT */
    @ApiOperation(value = "Update by id of a record in Articles entity"
            , notes = "")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK. The resource is obtained correctly", response = Article.class),
            @ApiResponse(code = 400, message = "Bad Request", response = String.class),
            @ApiResponse(code = 500, message = "Unexpected error")})
    //@PreAuthorize("hasAuthority('ROLE_ADMIN')")
    @PutMapping("/update")
    public ResponseEntity<Article> updateArticle(@RequestBody Article newA) throws BadRequestException {
        ResponseEntity<Article> resp;
        if (articleService.findById(newA.getId()).isPresent()) {
            resp = new ResponseEntity<>(articleService.update(newA), HttpStatus.OK);
        } else {
            resp = new ResponseEntity("Article not found!", HttpStatus.NOT_FOUND);

        }
        return resp;
    }


    /* DELETE */
    @ApiOperation(value = "Deletion of a record in Articles entity by id"
            , notes = "")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK. The resource is obtained correctly", response = Article.class),
            @ApiResponse(code = 400, message = "Bad Request", response = String.class),
            @ApiResponse(code = 500, message = "Unexpected error")})
    //@PreAuthorize("hasAuthority('ROLE_ADMIN')")

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable Long id) {
        ResponseEntity<String> resp;
        if (articleService.findById(id).isPresent()) {
            articleService.delete(id);
            resp = new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            resp = new ResponseEntity<>("Article not found!", HttpStatus.NOT_FOUND);
        }
        return resp;
    }
}
