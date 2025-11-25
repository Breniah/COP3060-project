package edu.cop3060.project.service;

import edu.cop3060.project.model.ContentItem;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ContentService {

    private final Map<Long, ContentItem> contentStore = new HashMap<>();
    private long nextId = 1;


    public List<ContentItem> getAll() {
        return new ArrayList<>(contentStore.values());
    }


    public ContentItem create(ContentItem item) {
        item.setId(nextId++);
        contentStore.put(item.getId(), item);
        return item;
    }


    public Optional<ContentItem> update(Long id, ContentItem item) {
        if (contentStore.containsKey(id)) {
            item.setId(id);
            contentStore.put(id, item);
            return Optional.of(item);
        }
        return Optional.empty();
    }


    public boolean delete(Long id) {
        return contentStore.remove(id) != null;
    }


    public Optional<ContentItem> getById(Long id) {
        return Optional.ofNullable(contentStore.get(id));
    }
}
