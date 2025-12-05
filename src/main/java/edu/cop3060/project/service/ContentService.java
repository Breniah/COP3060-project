package edu.cop3060.project.service;

import edu.cop3060.project.model.ContentItem;
import edu.cop3060.project.repository.ContentItemRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ContentService {

    private final ContentItemRepository contentItemRepository;

    public ContentService(ContentItemRepository contentItemRepository) {
        this.contentItemRepository = contentItemRepository;
    }

    public List<ContentItem> getAll() {
        return contentItemRepository.findAll();
    }

    public Optional<ContentItem> getById(Long id) {
        return contentItemRepository.findById(id);
    }

    public ContentItem create(ContentItem item) {
        return contentItemRepository.save(item);
    }

    public Optional<ContentItem> update(Long id, ContentItem updatedItem) {
        return contentItemRepository.findById(id).map(existing -> {

            // Copy fields
            existing.setTitle(updatedItem.getTitle());
            existing.setDescription(updatedItem.getDescription());
            existing.setCategory(updatedItem.getCategory());
            existing.setUrl(updatedItem.getUrl());

            // If you eventually handle tags or authors, add that here
            // existing.setAuthor(updatedItem.getAuthor());
            // existing.setTags(updatedItem.getTags());

            return contentItemRepository.save(existing);
        });
    }

    public boolean delete(Long id) {
        if (!contentItemRepository.existsById(id)) {
            return false;
        }
        contentItemRepository.deleteById(id);
        return true;
    }
}
