package com.greenbuddies.store.service;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.greenbuddies.store.model.Article;
import com.greenbuddies.store.repository.IArticleRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class ArticleService {

    private final Logger LOGGER = LoggerFactory.getLogger((String.valueOf(ArticleService.class)));
    private final ObjectMapper MAPPER = new ObjectMapper();

    @Autowired
    private final IArticleRepository articleRepository;


    public ArticleService(IArticleRepository articleRepository) {
        this.articleRepository = articleRepository;
    }


    public Article save(Article article) {
        articleRepository.save(MAPPER.convertValue(article, Article.class));
        if (LOGGER.isInfoEnabled()) {
            LOGGER.info("Article saved successfully: {}", article);
        }
        return article;
    }

    public Optional<Article> findById(Long id) {
        Optional<Article> article = articleRepository.findById(id);
        if (article.isPresent() && LOGGER.isInfoEnabled()) {
            LOGGER.info("Article founded: {}", article);
        } else {
            LOGGER.info("The id does not match with any existing article");
        }
        return article;
    }


    public List<Article> findAll() {
        List<Article> articles = articleRepository.findAll();
        if (LOGGER.isInfoEnabled()) {
            LOGGER.info("List of all available articles: {}", articles);
        }
        return articles;
    }

    public Article update(Article newArticle) {
        Article art = articleRepository.findById(newArticle.getId()).get();
        art.setTitle(newArticle.getTitle());
        art.setContent(newArticle.getContent());
        art.setImages(newArticle.getImages());
        if (LOGGER.isInfoEnabled()) {
            LOGGER.info("Article with ID: {} has been updated", art.getId());

        }
        articleRepository.save(art);
        return art;
    }


    public void delete(Long id) {
        if (articleRepository.findById(id).isPresent() && LOGGER.isInfoEnabled()) {
            articleRepository.deleteById(id);
            LOGGER.info("Article deleted correctly!");
        } else {
            LOGGER.info("Article was not found!");
        }
    }


    public Optional<Article> findArticleByTitle(String title) {
        Optional<Article> article = articleRepository.findArticleByTitle(title);
        if (article.isEmpty() && LOGGER.isInfoEnabled()) {
            LOGGER.info("Article not found");
        } else {
            LOGGER.info("Article founded: {}", article);
        }
        return article;
    }

}
