const express = require("express");
const cors = require("cors");
const app = express();

const {
  createInventory,
  getInventory,
  deleteInventory,
  updateInventory,
} = require("./services/inventory.services");
const { createSales, getSales } = require("./services/sales.services");

app.use(express.json());
app.use(cors());

require("./db");

app.get("/", (req, res) => {
  res.send("Hello, Welcome to the Backend Code for Inventory Management App");
});

const PORT = process.env.Port || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.post("/items", async (req, res) => {
  const { name, quantity, price, category } = req.body;
  if (!name || !quantity || !price || !category) {
    return res
      .status(400)
      .json({ error: "Name, quantity, price and category are required." });
  }
  try {
    const newInventory = await createInventory(req.body);
    res.status(201).json(newInventory);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error while creating new inventory", error: error });
  }
});

app.get("/items", async (req, res) => {
  try {
    const getInventories = await getInventory();
    res.status(200).json(getInventories);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error while reading all inventory", error: error });
  }
});

app.delete("/items/:id", async (req, res) => {
  try {
    const deletedItem = await deleteInventory(req.params.id);
    res.status(200).json(deletedItem);
  } catch (error) {
    res.status(500).json({ error: "Error deleting inventory", error: error });
  }
});

app.post("/items/:id", async (req, res) => {
  try {
    const updatedData = await updateInventory(req.params.id, req.body);
    res.status(200).json(updatedData);
  } catch (error) {
    res.status(500).json({ error: "Error updating inventory", error: error });
  }
});

app.post("/sales", async (req, res) => {
  console.log(req.body);
  const { description, quantity, price } = req.body;
  if (!description || !quantity || !price) {
    return res
      .status(400)
      .json({ error: "Description, quantity and price are required." });
  }
  try {
    const newSales = await createSales(req.body);
    res.status(201).json(newSales);
  } catch (error) {
    res.status(500).json({ error: "Error creating sales", error: error });
  }
});

app.get("/sales", async (req, res) => {
  try {
    const getAllSales = await getSales();
    res.status(200).json(getAllSales);
  } catch (error) {
    res.status(500).json({ error: "Error getting sales", error: error });
  }
});
