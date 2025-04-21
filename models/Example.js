// product model has a name, description, price, stock, & category
import mongoose from "mongoose";

const exampleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  createdAt: { type: Date, default: Date.now, },
  deleted: { type: Boolean, default: false, },
});

const Example = mongoose.model("Example", exampleSchema);

export default Example;
