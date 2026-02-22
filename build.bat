@echo off
REM Build script for Fittr Backend (Windows)

echo.
echo 🔨 Building Fittr Backend...
echo.

REM Navigate to backend directory
cd fittr-backend

REM Clean previous builds
echo 🧹 Cleaning previous builds...
call mvnw clean

REM Build the application
echo 📦 Building Spring Boot application...
call mvnw clean package -DskipTests

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ✅ Build successful!
    echo 📍 JAR file location: target\fittr-0.0.1-SNAPSHOT.jar
    echo.
    echo To run locally:
    echo   java -jar target\fittr-0.0.1-SNAPSHOT.jar
    echo.
    echo To deploy to production, upload the JAR to your hosting platform
    echo and set the required environment variables.
) else (
    echo.
    echo ❌ Build failed!
    exit /b 1
)
