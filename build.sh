#!/bin/bash
# Build script for Fittr Backend

echo "🔨 Building Fittr Backend..."

# Navigate to backend directory
cd fittr-backend

# Clean previous builds
echo "🧹 Cleaning previous builds..."
./mvnw clean

# Build the application
echo "📦 Building Spring Boot application..."
./mvnw clean package -DskipTests

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📍 JAR file location: target/fittr-0.0.1-SNAPSHOT.jar"
    echo ""
    echo "To run locally:"
    echo "  java -jar target/fittr-0.0.1-SNAPSHOT.jar"
    echo ""
    echo "To deploy to production, upload the JAR to your hosting platform"
    echo "and set the required environment variables."
else
    echo "❌ Build failed!"
    exit 1
fi
