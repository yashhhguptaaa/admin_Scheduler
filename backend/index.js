const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const adminRoute = require("./routes/admin.routes");
app.use("/admin", adminRoute);

app.listen(process.env.PORT || 8000, () => {
    console.log("Yey, your server is running on port 8000");
  });