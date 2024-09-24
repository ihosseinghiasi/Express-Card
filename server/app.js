const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const rootRoutes = require("./routes/root/root");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "NodeJs API For Online Shop Project",
      version: "0.1.0",
      description: "swaager setup for online shop",
      contact: {
        name: "Hossein Ghiasi",
        url: "ihosseinghiasi.ir",
        email: "hosseinghiasi.dev@gmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:4000/",
      },
    ],
  },
  apis: [
    "./routes/root/adminPanel/admin/*.js",
    "./routes/root/adminPanel/user/*.js",
    "./routes/root/adminPanel/category/*.js",
    "./routes/root/adminPanel/product/*.js",
    "./routes/root/adminPanel/card/*.js",
    "./routes/root/userPanel/profile/*.js",
    "./routes/root/userPanel/ticket/*.js",
  ],
};

const swaggerSpc = swaggerJSDoc(swaggerOptions)

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpc));
app.use("/api-docsss", swaggerUi.serve, swaggerUi.setup(swaggerSpc));

app.listen(4000, () => {
  console.log("Server Is Running In Port 4000");
});

mongoose
.connect("mongodb://localhost:27017/comercial", {
  // useNewUrlParser: true,
  // useUnifiedTopology: true
})
  .then(() => {
    console.log("////////////////////////////////////////////////");
    console.log("DB Connection Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });
  
  app.use(
    cors({
      origin: ["http://localhost:3000"],
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
  );
  
  app.use(cookieParser());
  app.use(express.json());
  app.use("/", rootRoutes);
  