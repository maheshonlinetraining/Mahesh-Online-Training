import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import apiRoutes from './routes/apiRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for frontend development and production
app.use(cors({
  origin: '*', // Allows frontend on any local port (5173, 3000, etc.)
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.originalUrl}`);
  next();
});

// API Routes
app.use('/api', apiRoutes);

// Root Welcome Endpoint
app.get('/', (req, res) => {
  res.json({
    name: 'Mahesh Online Training Institute API Server',
    status: 'Running',
    version: '1.0.0',
    documentation: '/api/courses, /api/batches, /api/testimonials, /api/stats, /api/inquiries'
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled Error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal Server Error',
    error: process.env.NODE_ENV === 'production' ? undefined : err.message
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`🚀 Mahesh Online Training API Server is LIVE!`);
  console.log(`📡 URL: http://localhost:${PORT}`);
  console.log(`💡 Health Check: http://localhost:${PORT}/api/health`);
  console.log(`📚 Courses API: http://localhost:${PORT}/api/courses`);
  console.log(`====================================================`);
});
