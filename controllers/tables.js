import Item from "../models/schemas.js";
import { MongoClient, ObjectId } from "mongodb";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });
const databasename = "Inventory";
const connection = MongoClient.connect(process.env.CONNECTION_URL);

export const getTables = (req, res) => {
  connection
    .then((client) => {
      client
        .db(databasename)
        .collection("Table Names")
        .find()
        .toArray()
        .then((result) => {
          res.status(200).json(result);
        });
    })
    .catch((error) => {
      res.status(404).json({ message: error.message });
    });
};

export const createTable = (req, res) => {
  const { tableName } = req.body;
  connection
    .then(async (client) => {
      const connect = client.db(databasename);
      connect
        .collection("Table Names")
        .insertOne({ tableName: tableName })
        .then((result) => {
          const tableId = String(result.insertedId);
          connect.createCollection(tableId);
        });
      res.status(200).json({ tableName: tableName });
    })
    .catch((error) => {
      res.status(404).json({ message: error.message });
    });
};

export const updateTable = (req, res) => {
  const tableId = req.params["tableId"];
  const { tableName } = req.body;
  const updatedTable = { tableName };
  connection
    .then(async (client) => {
      const connect = client.db(databasename);
      connect
        .collection("Table Names")
        .updateOne({ _id: ObjectId(tableId) }, { $set: updatedTable });
      res.status(200).json(updatedTable);
    })
    .catch((error) => {
      res.status(404).json({ message: error.message });
    });
};

export const deleteTable = (req, res) => {
  const tableId = req.params["tableId"];
  connection
    .then(async (client) => {
      const connect = client.db(databasename);
      connect.dropCollection(tableId);
      connect.collection("Table Names").deleteOne({ _id: ObjectId(tableId) });
      res.status(200).json({ message: "Table deleted" });
    })
    .catch((error) => {
      res.status(404).json({ message: error.message });
    });
};

export const getItems = (req, res) => {
  const tableId = req.params["tableId"];
  connection
    .then(async (client) => {
      const connect = client.db(databasename);
      const collection = connect.collection(tableId).find().toArray();
      res.status(200).json(await collection);
    })
    .catch((error) => {
      res.status(404).json({ message: error.message });
    });
};

export const getItem = (req, res) => {
  const tableId = req.params["tableId"];
  const itemId = req.params["itemId"];
  connection
    .then(async (client) => {
      const connect = client.db(databasename);
      const collection = connect
        .collection(tableId)
        .find({ _id: ObjectId(itemId) })
        .toArray();
      res.status(200).json(await collection);
    })
    .catch((error) => {
      res.status(404).json({ message: error.message });
    });
};

export const createItem = (req, res) => {
  const tableId = req.params["tableId"];
  const { name, uom, inventory, order } = req.body;
  const newItem = new Item({ name, uom, inventory, order });

  connection
    .then(async (client) => {
      const connect = client.db(databasename);
      const collection = connect.collection(tableId).insertOne(newItem);
      res.status(200).json(newItem);
    })
    .catch((error) => {
      res.status(404).json({ message: error.message });
    });
};

export const updateItem = async (req, res) => {
  const tableId = req.params["tableId"];
  const itemId = req.params["itemId"];
  const { name, uom, inventory, order } = req.body;
  const updatedItem = { name, uom, inventory, order, _id: ObjectId(itemId) };
  if (!mongoose.Types.ObjectId.isValid(ObjectId(itemId)))
    return res.status(404).send(`No item with id: ${ObjectId(itemId)}`);
  connection
    .then(async (client) => {
      const connect = client.db(databasename);
      connect
        .collection(tableId)
        .updateOne({ _id: ObjectId(itemId) }, { $set: updatedItem });
      res.status(200).json({ message: "1 document updated" });
    })
    .catch((error) => {
      res.status(404).json({ message: error.message });
    });
};

export const deleteItem = async (req, res) => {
  const tableId = req.params["tableId"];
  const itemId = req.params["itemId"];
  if (!mongoose.Types.ObjectId.isValid(ObjectId(itemId)))
    return res.status(404).send(`No item with id: ${ObjectId(itemId)}`);

  connection
    .then(async (client) => {
      const connect = client.db(databasename);
      connect.collection(tableId).deleteOne({ _id: ObjectId(itemId) });
      res.status(200).json({ message: "1 document deleted" });
    })
    .catch((error) => {
      res.status(404).json({ message: error.message });
    });
};
