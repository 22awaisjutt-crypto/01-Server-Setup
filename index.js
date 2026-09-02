import express from "express";

const app = express();

app.get("/percentage",(req, res) => {
  const { total, obtained } = req.query;
  if (!total || !obtained) {
    return res.status(400).send("Please provide both total and obtained values.");
  }
  const percentage = (parseFloat(obtained) / parseFloat(total)) * 100;
  res.send(`Percentage: ${percentage.toFixed(2)}%`);
});

app.get("/", (req, res) => {
  res.send(`Hello Server`);
});

app.listen(5050, () => {
  console.log("Server is running on port 5050");
});