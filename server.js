const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(__dirname));

app.get("/health", (req, res) => {
  res.json({ status: "ARORA.HOST is running" });
});

app.post("/api/enquiry", (req, res) => {
  const { name, email, plan } = req.body || {};

  if (!name || !email || !plan) {
    return res.status(400).json({
      message: "Please provide name, email, and plan."
    });
  }

  console.log("New hosting enquiry:", { name, email, plan });

  res.json({
    message: "Enquiry received successfully."
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`ARORA.HOST running at http://localhost:${PORT}`);
});