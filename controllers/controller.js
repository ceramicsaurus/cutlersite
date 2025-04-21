import Example from "../models/Example.js";

// home page
export const home = (req, res) => {
  res.render("index");
};

// admin page
export const loadAdmin = async (req, res) => {
  try {
      res.render("portal");
  } catch (err) {
      res.status(500).send('Server Error');
  }
}