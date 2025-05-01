import Example from "../models/Example.js";

import { images } from '../server.js';

export const indexController = (req, res) => {
  res.render('index', { images });
};

// home page
export const home = (req, res) => {
  res.render("index", {images});
};

// admin page
export const loadAdmin = async (req, res) => {
  try {
      res.render("portal");
  } catch (err) {
      res.status(500).send('Server Error');
  }
}

// puts it into data
export const uploadFile = async (req, res) => {
  try {
    const { name, description, year } = req.body;
    const image = req.file ? req.file.filename : null;

    const newExample = new Example({ 
      name, 
      description, 
      year, 
      image 
    });

    await newExample.save();

    req.flash('success', 'Example created successfully!');
    res.redirect('/');
  } catch (err) {
    req.flash('error', 'Error creating example.');
    res.redirect('/');
  }
};

// data to table
const files = [
  {}
]