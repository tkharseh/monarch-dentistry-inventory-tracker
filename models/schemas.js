import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const itemSchema = mongoose.Schema({
  _id: ObjectId,
  name: String,
  uom: String,
  inventory: Number,
  order: Number,
});

const Item = mongoose.model("Item", itemSchema);

export default Item;
