package com.greenbuddies.store.repository;

import com.greenbuddies.store.model.Article;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface IArticleRepository extends JpaRepository<Article, Long> {

    @Query("SELECT a FROM Article a WHERE a.title = ?1")
    Optional<Article> findArticleByTitle(String title);
}
