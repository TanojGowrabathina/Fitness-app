package org.svcet.fittr.service;

import com.cloudinary.Cloudinary;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;

@Service
public class ImageUploadService {

    private final Cloudinary cloudinary;

    public ImageUploadService(Cloudinary cloudinary) {
        this.cloudinary = cloudinary;
    }

    public String uploadImage(MultipartFile file) {
        try {
            Map<?, ?> result = cloudinary.uploader().upload(
                    file.getBytes(),
                    Map.of("folder", "fittr")
            );

            return result.get("secure_url").toString();

        } catch (IOException e) {
            e.printStackTrace();
            throw new RuntimeException("Image upload failed");
        }
    }
}
