import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit-tracker';
// Middleware
app.use(cors());
app.use(express.json());
// MongoDB Connection
mongoose.connect(MONGODB_URI)
    .then(() => {
    console.log('MongoDB connected successfully');
})
    .catch((err) => {
    console.error('MongoDB connection error:', err.message);
});
// Routes
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'OctoFit Tracker API is running' });
});
// Server startup
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`MongoDB URI: ${MONGODB_URI}`);
});
//# sourceMappingURL=server.js.map