package org.svcet.fittr.service;

import com.cloudinary.Cloudinary;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;

@Service
public class VideoUploadService {

    private final Cloudinary cloudinary;

    public VideoUploadService(Cloudinary cloudinary) {
        this.cloudinary = cloudinary;
    }

    public String uploadVideo(MultipartFile file) {
        try {
            Map uploadResult = cloudinary.uploader().upload(
                    file.getBytes(),
                    Map.of(
                        "resource_type", "video",   // 🔥 REQUIRED
                        "folder", "fittr/videos"
                    )
            );

            return uploadResult.get("secure_url").toString();

        } catch (IOException e) {
            throw new RuntimeException("Video upload failed", e);
        }
    }
}
