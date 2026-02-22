# Fittr - Fitness Tracking Application

## ✅ Recent Fixes

- **PasswordEncoder Bean**: Added BCryptPasswordEncoder bean to SecurityConfig to fix authentication service initialization errors
- **Database Configuration**: Configured MySQL connection with environment variables
- **CORS Configuration**: Fixed cross-origin requests for Vercel frontend
- **API Endpoint Configuration**: Centralized backend URL configuration for environment-specific deployments

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

### Production Deployment (Vercel/Railway/Render)

#### Environment Variables Required:
```
SPRING_DATASOURCE_URL=jdbc:mysql://[host]:3306/fittr?useSSL=true&serverTimezone=UTC
SPRING_DATASOURCE_USERNAME=your-db-user
SPRING_DATASOURCE_PASSWORD=your-db-password
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
PORT=8080
```

#### Building JAR (Local):
```bash
cd fittr-backend
./mvnw clean package
```

The compiled JAR will be at: `target/fittr-0.0.1-SNAPSHOT.jar`

#### Deployment Options:

##### Option 1: Railway.app (Recommended for Java apps)
1. Push code to GitHub
2. Connect Railway to your GitHub repository
3. Set environment variables in Railway dashboard
4. Deploy

##### Option 2: Render.com
1. Create new Web Service on render.com
2. Connect GitHub repository
3. **Important**: Before deploying, add these environment variables in Render dashboard:
   ```
   SPRING_DATASOURCE_URL=jdbc:mysql://[host]:3306/fittr?useSSL=true&serverTimezone=UTC
   SPRING_DATASOURCE_USERNAME=[your-db-user]
   SPRING_DATASOURCE_PASSWORD=[your-db-password]
   CLOUDINARY_CLOUD_NAME=[your-cloud-name]
   CLOUDINARY_API_KEY=[your-api-key]
   CLOUDINARY_API_SECRET=[your-api-secret]
   ```
4. Set Build Command: `./mvnw clean package -DskipTests`
5. Set Start Command: `java -jar target/fittr-0.0.1-SNAPSHOT.jar`
6. Deploy
7. Get your backend URL from Render dashboard (e.g., `https://fittr-backend.onrender.com`)
8. Update Vercel frontend with this URL as `REACT_APP_API_URL`

##### Option 3: Heroku
1. Install Heroku CLI
2. `heroku login`
3. `heroku create your-app-name`
4. Configure variables:
   ```bash
   heroku config:set SPRING_DATASOURCE_URL=jdbc:mysql://...
   ```
5. Deploy: `git push heroku main`

#### Running JAR:
```bash
java -jar target/fittr-0.0.1-SNAPSHOT.jar
```

#### Database Setup for Production:
1. Get MySQL database from:
   - AWS RDS
   - Railway
   - Render
   - Planetscale (MySQL-compatible)
   - ClearDB (Heroku addon)

2. Create database:
   ```sql
   CREATE DATABASE IF NOT EXISTS fittr;
   ```

3. Connection string format:
   ```
   jdbc:mysql://[hostname]:[port]/fittr?useSSL=true&serverTimezone=UTC
   ```

### Frontend Deployment (React + Vercel)

#### Prerequisites
- Node.js 16+
- npm or yarn
- Vercel account (free tier available)

#### Build:
```bash
cd fittr-frontend
npm install
npm run build
```

#### Environment Variables (.env.local or Vercel Settings)
```
REACT_APP_API_URL=https://your-backend-url.vercel.app
# or your own custom backend domain
```

#### Deploy to Vercel:
```bash
npm install -g vercel
vercel deploy
```

Or connect your GitHub repository directly to Vercel for automatic deployments.

#### Vercel Configuration (vercel.json)
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "build",
  "env": {
    "REACT_APP_API_URL": "@api-url"
  }
}
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

### PasswordEncoder Bean Error
**Error**: `No qualifying bean of type 'org.springframework.security.crypto.password.PasswordEncoder'`

**Solution**: ✅ Already fixed in SecurityConfig.java - BCryptPasswordEncoder bean is now provided.

### Database Connection Error
- Ensure MySQL is running
- Check database URL format and credentials
- Verify firewall allows database access
- Test connection: `mysql -h [host] -u [user] -p`

### CORS Errors
- Check browser console for specific origin
- Update SecurityConfig with your frontend URL
- Ensure `OPTIONS` requests are allowed
- Verify frontend and backend are on same protocol (both HTTPS or both HTTP for local)

### Port Already in Use
```bash
# Windows
netstat -ano | findstr :8080
taskkill /PID [PID] /F

# Linux/Mac
lsof -i :8080
kill -9 [PID]
```

### Render.com Deployment Issues
**Issue**: Container keeps restarting
- Check logs: `tail -f render.log`
- Verify all environment variables are set
- Check database is accessible from container
- Ensure build command completes successfully

**Issue**: 502 Bad Gateway
- Wait 2-3 minutes for container to finish initializing
- Check if backend is listening on correct PORT (should be `$PORT` environment variable)
- Verify no startup errors in logs

### Vercel Frontend Issues
**Issue**: "Cannot find module" errors
- Run `npm install` to install all dependencies
- Check Node.js version compatibility (should be 16+)
- Clear `.next` or `build` directory

**Issue**: API requests failing
- Check `REACT_APP_API_URL` environment variable is set in Vercel
- Ensure backend URL is accessible and has CORS configured
- Test with curl: `curl -v https://your-backend-url/api/categories`

## Security Notes

- Never commit `.env` files with real credentials
- Use strong database passwords
- Enable HTTPS in production
- Regular security updates for dependencies
- Rotate API keys regularly
- Use environment variables for all secrets

## Deployment Checklist

- [ ] Database created and accessible
- [ ] Environment variables configured
- [ ] Backend JAR built successfully
- [ ] Backend tests passing
- [ ] Frontend built successfully
- [ ] CORS origins configured correctly
- [ ] API endpoints working (test with Postman/curl)
- [ ] Frontend can connect to backend
- [ ] Login/registration working
- [ ] All features tested
- [ ] Error handling working
- [ ] Logging configured
- [ ] Backups configured for database
- [ ] Monitor app for errors post-deployment

## Quick Start Scripts

Use provided scripts for quick building:

**Windows:**
```
build.bat
```

**Linux/Mac:**
```
chmod +x build.sh
./build.sh
```

## Support

For issues or questions about deployment:
1. Check error logs in deployment platform dashboard
2. Review backend logs: `logs` section in your hosting platform
3. Test connectivity: `telnet [db-host] [db-port]`
4. Verify environment variables are set correctly
5. Check firewall/security group rules
