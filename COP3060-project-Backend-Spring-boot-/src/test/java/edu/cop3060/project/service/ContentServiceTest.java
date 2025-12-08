package edu.cop3060.project.service;

import edu.cop3060.project.model.ContentItem;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

class ContentServiceTest {

    private ContentService contentService;

    @BeforeEach
    void setup() {
        contentService = new ContentService();
    }

    @Test
    void create_shouldAssignIdAndStoreItem() {
        ContentItem item = new ContentItem();
        item.setTitle("Test Title");
        item.setBody("Test body");

        ContentItem saved = contentService.create(item);

        assertNotNull(saved.getId());
        assertEquals("Test Title", saved.getTitle());
        assertEquals(1, contentService.getAll().size());
    }

    @Test
    void getById_shouldReturnExistingItem() {
        ContentItem item = new ContentItem();
        item.setTitle("Hello");
        item.setBody("World");
        ContentItem saved = contentService.create(item);

        Optional<ContentItem> found = contentService.getById(saved.getId());

        assertTrue(found.isPresent());
        assertEquals("Hello", found.get().getTitle());
    }

    @Test
    void update_shouldReplaceExistingItem() {
        ContentItem original = new ContentItem();
        original.setTitle("Old");
        original.setBody("Body");
        ContentItem saved = contentService.create(original);

        ContentItem updated = new ContentItem();
        updated.setTitle("New");
        updated.setBody("Content");

        Optional<ContentItem> result = contentService.update(saved.getId(), updated);

        assertTrue(result.isPresent());
        assertEquals("New", result.get().getTitle());
        // id should stay the same
        assertEquals(saved.getId(), result.get().getId());
    }

    @Test
    void delete_shouldRemoveExistingItem() {
        ContentItem item = new ContentItem();
        item.setTitle("To delete");
        item.setBody("Body");
        ContentItem saved = contentService.create(item);

        boolean removed = contentService.delete(saved.getId());
        List<ContentItem> all = contentService.getAll();

        assertTrue(removed);
        assertEquals(0, all.size());
    }
}
