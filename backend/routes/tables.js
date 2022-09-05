import express from "express";
import {
  getTables,
  createTable,
  deleteTable,
  updateTable,
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
} from "../controllers/tables.js";

const router = express.Router();

// Table Routes
router.get("/", getTables);
router.post("/", createTable);
router.delete("/:tableId", deleteTable);
router.patch("/:tableId", updateTable);

// Item Routes
router.get("/:tableId", getItems);
router.post("/:tableId", createItem);
router.get("/:tableId/:itemId", getItem);
router.patch("/:tableId/:itemId", updateItem);
router.delete("/:tableId/:itemId", deleteItem);

export default router;
