// product model has a name, description, price, stock, & category
import mongoose from "mongoose";

const exampleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  year: { 
    type: Number, 
    default: new Date().getFullYear(),
    min: 1900, 
    max: new Date().getFullYear(), // Ensures it's not in the future
    required: true 
  },
  deleted: { type: Boolean, default: false, },
});

const Example = mongoose.model("Example", exampleSchema);

export default Example;
