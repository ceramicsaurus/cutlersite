import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import exampleRoutes from './routes/routes.js';

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Routes
app.use('/', exampleRoutes);

import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set up EJS as view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from /public
app.use(express.static(path.join(__dirname, 'public')));

// Read images from /public/images folder
const imagesDirectory = path.join(__dirname, 'public', 'images');
const imageFiles = fs.readdirSync(imagesDirectory);

// Map the image files to an array of objects
export const images = imageFiles.map((fileName) => {
  return {
    url: `/images/${fileName}`, // URL path to the image
    alt: fileName, // alt text based on file name
    title: fileName.split('.')[0], // Use file name as title (without extension)
    description: 'Description for ' + fileName.split('.')[0], // Basic description
    link: '#' // Use any URL or link you want
  };
});

console.log(images)
// Route that renders the EJS page
app.get('/', (req, res) => {
  res.render('index', { images });
});``
// ADD NEW VERS JS
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});