package com.greenbuddies.store.service;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.greenbuddies.store.model.Article;
import com.greenbuddies.store.repository.IArticleRepository;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;

@Data
@Service
public class ArticleService {

    private final Logger LOGGER = Logger.getLogger((String.valueOf(ArticleService.class)));
    /* Attributes*/
    @Autowired
    private IArticleRepository articleRepository;
    private ObjectMapper mapper;

    public ArticleService(IArticleRepository articleRepository) {
        this.articleRepository = articleRepository;
    }


    public Article save(Article article) {
        articleRepository.save(mapper.convertValue(article, Article.class));
        LOGGER.info("Article saved successfully");
        return article;
    }

    public Optional<Article> findById(Long id) {
        LOGGER.info("Search by id in Articles entity");
        Optional<Article> a = articleRepository.findById(id);
        if (a.isPresent()) {
            LOGGER.info("Article founded");
        } else {
            LOGGER.info("The id does not match with any existing article");
        }
        return a;
    }


    public List<Article> findAll() {
        List<Article> articles = articleRepository.findAll();
        LOGGER.info("List of all available articles");
        return articles;
    }

    public Article update(Article newArticle) {
        Article art = articleRepository.findById(newArticle.getId()).get();
        art.setTitle(newArticle.getTitle());
        art.setContent(newArticle.getContent());
        art.setImages(newArticle.getImages());

        LOGGER.info("Article with ID: " + art.getId() + " has been updated");
        articleRepository.save(art);
        return art;
    }


    public void delete(Long id) {
        if (articleRepository.findById(id).isPresent()) {
            articleRepository.deleteById(id);
            LOGGER.info("Article deleted correctly!");
        } else {
            LOGGER.info("Article was not found!");
        }
    }


    public Optional<Article> findArticleByTitle(String title) {
        LOGGER.info("Search by title in Article entity");
        Optional<Article> article = articleRepository.findArticleByTitle(title);
        if (article.isEmpty()) {
            LOGGER.info("Article not found");
        }
        return article;
    }

}
