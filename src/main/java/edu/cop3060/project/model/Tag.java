package edu.cop3060.project.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "tags")
public class Tag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Tag name is required")
    @Column(unique = true)
    private String name;

    @ManyToMany(mappedBy = "tags")
    private Set<ContentItem> contentItems = new HashSet<>();

    public Tag() {}

    public Tag(String name) {
        this.name = name;
    }

    // getters and setters
}