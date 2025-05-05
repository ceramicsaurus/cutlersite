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
      const examples = await Example.find().lean();
      res.render("portal", { examples });
  } catch (err) {
      res.status(500).send('Server Error');
  }
};

// puts it into data
export const uploadFile = async (req, res) => {
  try {
    const { name, description, year } = req.body;
    const image = req.file ? req.file.filename : null;

    const newExample = new Example({
      name,
      description,
      year,
      image,
    });

    await newExample.save();

    // 👇 this tells the browser to reload the admin page after the POST
    res.redirect('/upload');
  } catch (err) {
    res.status(500).send('Error creating example.');
  }
};



// data to table
const files = [
  {}
]