# Fittr - Fitness Tracking Application

## Deployment Guide

### Backend Deployment (Spring Boot Java)

#### Prerequisites
- JDK 17 or higher
- Maven 3.6+
- MySQL database

#### Local Development Setup
1. Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

2. Update `.env.local` with your local database credentials:
```
SPRING_DATASOURCE_URL=jdbc:mysql://localhost:3306/fittr?useSSL=false&serverTimezone=UTC
SPRING_DATASOURCE_USERNAME=root
SPRING_DATASOURCE_PASSWORD=your_password
```

3. Run the application:
```bash
./mvnw spring-boot:run
```

#### Production Deployment (Vercel/Railway/Render)

##### Environment Variables Required:
```
SPRING_DATASOURCE_URL=jdbc:mysql://[host]:3306/fittr?useSSL=true&serverTimezone=UTC
SPRING_DATASOURCE_USERNAME=your-db-user
SPRING_DATASOURCE_PASSWORD=your-db-password
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
PORT=8080
```

##### Building JAR:
```bash
./mvnw clean package
```

The compiled JAR will be in `target/fittr-0.0.1-SNAPSHOT.jar`

##### Running JAR:
```bash
java -jar target/fittr-0.0.1-SNAPSHOT.jar
```

### Frontend Deployment (React + Vercel)

#### Prerequisites
- Node.js 16+
- npm or yarn

#### Build:
```bash
cd fittr-frontend
npm install
npm run build
```

#### Environment Variables (.env.local):
```
REACT_APP_API_URL=https://your-backend-url.com
```

#### Deploy to Vercel:
```bash
npm install -g vercel
vercel deploy
```

## CORS Configuration

The backend is configured to accept requests from:
- `http://localhost:3000` (development)
- `https://fitness-app-two-virid.vercel.app` (production)

Update [SecurityConfig.java](src/main/java/org/svcet/fittr/config/SecurityConfig.java) to add more allowed origins.

## Database Setup

Create MySQL database:
```sql
CREATE DATABASE IF NOT EXISTS fittr;
```

The JPA entities will auto-create tables with `spring.jpa.hibernate.ddl-auto=update`

## API Endpoints

Base URL: `/api/v1/`

- Users: POST `/auth/register`, POST `/auth/login`
- Activities: GET `/activities`, POST `/activities`
- Goals: GET `/goals`, POST `/goals`
- Workouts: GET `/workouts`, POST `/workouts`
- Progress: GET `/progress`
- Categories: GET `/categories`

## Troubleshooting

### Database Connection Error
- Ensure MySQL is running
- Check database URL format and credentials
- Verify firewall allows database access

### CORS Errors
- Check browser console for specific origin
- Update SecurityConfig with your frontend URL
- Ensure `OPTIONS` requests are allowed

### Port Already in Use
```bash
# Windows
netstat -ano | findstr :8080
taskkill /PID [PID] /F

# Linux/Mac
lsof -i :8080
kill -9 [PID]
```

## Security Notes

- Never commit `.env` files with real credentials
- Use strong database passwords
- Enable HTTPS in production
- Regular security updates for dependencies
