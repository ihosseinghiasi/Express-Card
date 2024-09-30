import express, { request, response, NextFunction } from "express";
import bodyParser from "body-parser"
import cors from "cors";
import mongoose from "mongoose"
import cookieParser from "cookie-parser"
import rootRoutes from "./routes/root/root"

require("dotenv").config()
console.log(process.env.MONGO_URL)

// import swaggerJSDoc from "swagger-jsdoc"
// import swaggerUi from 'swagger-ui-express'

const app = express();

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

// const swaggerSpc = swaggerJSDoc(swaggerOptions)

// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpc));
// app.use("/api-docsss", swaggerUi.serve, swaggerUi.setup(swaggerSpc));


mongoose.Promise = Promise
mongoose.connect(`${process.env.MONGO_URL}`)
mongoose.connection.on('error', (error: Error) => (console.log(error)))

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
  
app.use(cookieParser());
app.use(bodyParser.json())
app.use(express.json());
app.use("/", rootRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server Is Running On  http://localhost:${process.env.PORT}` );
});
  