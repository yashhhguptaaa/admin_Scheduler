const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(
  cors({
    origin: [
      "http://localhost:3000",
    ],
    credentials: true,
  })
);
app.use(express.json());

const adminRoute = require("./routes/admin.routes");
app.use("/admin", adminRoute);


const PORT =process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`Yey, your server is running on port ${PORT}`);
  });