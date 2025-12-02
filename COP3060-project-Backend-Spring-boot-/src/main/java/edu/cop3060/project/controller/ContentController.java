package edu.cop3060.project.controller;

import edu.cop3060.project.model.ContentItem;
import edu.cop3060.project.service.ContentService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/content")
public class ContentController {

    private final ContentService contentService;

    public ContentController(ContentService contentService) {
        this.contentService = contentService;
    }


    @GetMapping
    public ResponseEntity<List<ContentItem>> getAll() {
        List<ContentItem> items = contentService.getAll();
        return ResponseEntity.ok(items);
    }


    @GetMapping("/{id}")
    public ResponseEntity<ContentItem> getById(@PathVariable Long id) {
        return contentService.getById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }


    @PostMapping
    public ResponseEntity<ContentItem> create(@RequestBody ContentItem item) {
        ContentItem created = contentService.create(item);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }


    @PutMapping("/{id}")
    public ResponseEntity<ContentItem> update(@PathVariable Long id, @RequestBody ContentItem item) {
        return contentService.update(id, item)
                .map(updated -> ResponseEntity.ok(updated))
                .orElse(ResponseEntity.notFound().build());
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        boolean removed = contentService.delete(id);
        if (removed) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
