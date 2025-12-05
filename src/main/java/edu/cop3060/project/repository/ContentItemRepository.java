package edu.cop3060.project.repository;

import edu.cop3060.project.model.ContentItem;
import edu.cop3060.project.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ContentItemRepository extends JpaRepository<ContentItem, Long> {
    List<ContentItem> findByAuthor(User author);
}
