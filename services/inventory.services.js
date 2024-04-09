const Inventory = require("../models/inventory");

const createInventory = async (inventoryDetails) => {
  try {
    const inventory = new Inventory(inventoryDetails);
    const savedInventory = await inventory.save();
    console.log("New inventory created", savedInventory);
    return savedInventory;
  } catch (error) {
    console.error("Error while creating inventory", error);
  }
};

const getInventory = async () => {
  try {
    const getInventories = await Inventory.find();
    console.log("All Entries", getInventories);
    return getInventories;
  } catch (error) {
    console.error("Error getting all entries", error);
  }
};

const deleteInventory = async (id) => {
  try {
    const deletedInventory = await Inventory.findByIdAndDelete(id);
    console.log("Deleted Inventory", deletedInventory);
    return deletedInventory;
  } catch (error) {
    console.error("Error deleting inventory", error);
  }
};

const updateInventory = async (id, updatedData) => {
  try {
    const updatedInventory = await Inventory.findByIdAndUpdate(
      id,
      updatedData,
      {
        new: true,
      },
    );
    console.log("Updated Inventory", updatedInventory);
    return updatedInventory;
  } catch (error) {
    console.error("Error updating inventory", error);
  }
};

module.exports = {
  createInventory,
  getInventory,
  deleteInventory,
  updateInventory,
};
