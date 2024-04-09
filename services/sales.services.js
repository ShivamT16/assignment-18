const Sales = require("../models/sales");

const createSales = async (salesData) => {
  try {
    const newSales = new Sales(salesData);
    const savedSales = await newSales.save();
    console.log("New sales added", savedSales);
    return savedSales;
  } catch (error) {
    console.error("Error create sales", error);
  }
};

const getSales = async () => {
  try {
    const getSales = await Sales.find();
    console.log("All sales", getSales);
    return getSales;
  } catch (error) {
    console.error("Error getting all sales", error);
  }
};

module.exports = { createSales, getSales };
