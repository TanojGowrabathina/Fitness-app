package org.svcet.fittr.controller;

import org.svcet.fittr.service.ImageUploadService;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/images")
@CrossOrigin
public class ImageController {

    private final ImageUploadService imageUploadService;

    public ImageController(ImageUploadService imageUploadService) {
        this.imageUploadService = imageUploadService;
    }

    @PostMapping(
        value = "/upload",
        consumes = MediaType.MULTIPART_FORM_DATA_VALUE
    )
    public ResponseEntity<?> uploadImage(
            @RequestParam("file") MultipartFile file
    ) {
        if (file == null || file.isEmpty()) {
            return ResponseEntity.badRequest().body("File is empty");
        }

        try {
            String imageUrl = imageUploadService.uploadImage(file);
            return ResponseEntity.ok(imageUrl);
        } catch (Exception e) {
            e.printStackTrace(); // 🔥 SHOW REAL ERROR
            return ResponseEntity.status(500).body(e.getMessage());
        }
    }
}
