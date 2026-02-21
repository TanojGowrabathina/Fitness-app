package org.svcet.fittr.controller;

import org.svcet.fittr.service.VideoUploadService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/videos")
@CrossOrigin
public class VideoController {

    private final VideoUploadService videoUploadService;

    public VideoController(VideoUploadService videoUploadService) {
        this.videoUploadService = videoUploadService;
    }

    @PostMapping(value = "/upload", consumes = "multipart/form-data")
    public ResponseEntity<?> uploadVideo(
            @RequestParam("file") MultipartFile file
    ) {
        if (file.isEmpty()) {
            return ResponseEntity.badRequest().body("File is empty");
        }

        String videoUrl = videoUploadService.uploadVideo(file);
        return ResponseEntity.ok(videoUrl);
    }
}
