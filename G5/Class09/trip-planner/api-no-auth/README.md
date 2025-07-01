# Trip Planner API

A Node.js REST API built with TypeScript, Express, and MongoDB for managing trips.

## Features

- **CRUD Operations**: Create, Read, Update, Delete trips
- **TypeScript**: Full type safety
- **MongoDB**: Database with Mongoose ODM
- **CORS**: Configured for frontend integration
- **Validation**: Input validation and error handling

## API Endpoints

### Trips

- `GET /api/trips` - Get all trips
- `GET /api/trips/:id` - Get trip by ID
- `POST /api/trips` - Create new trip
- `PUT /api/trips/:id` - Update trip
- `DELETE /api/trips/:id` - Delete trip

### Health Check

- `GET /api/health` - API health status

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Environment Configuration:**
   - Copy `.env` file and update `MONGODB_URI` with your MongoDB connection string
   - Set `PORT` if needed (default: 3001)

3. **Development:**
   ```bash
   npm run dev
   ```

4. **Production:**
   ```bash
   npm run build
   npm start
   ```

## Environment Variables

```env
PORT=3001
MONGODB_URI=mongodb://localhost:27017/trip-planner
# or
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/trip-planner
```

## Trip Data Structure

```typescript
interface Trip {
  id: string;
  title: string;
  destination: string;
  status: "planned" | "in_progress" | "completed" | "cancelled";
  budget: number;
  image: string;
}
```

## Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run watch` - Watch TypeScript files for changes
