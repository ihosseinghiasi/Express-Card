import express, { Application } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import ErrorHandler from "./helpers/error-handler";
import Database from "./config/db";
import dotenv from "dotenv";
import userRoute from "./routes/root/adminPanel/user/user.route";
import adminRoute from "./routes/root/adminPanel/admin/admin.route";
import categoryRoute from "./routes/root/adminPanel/category/category.route";
import productRoute from "./routes/root/adminPanel/product/product";
import cardRoute from "./routes/root/adminPanel/card/card";
import adminTicketRoute from "./routes/root/adminPanel/ticket/ticket.route";
import userTicketRoute from "./routes/root/userPanel/ticket/ticket.route"
import authenticationRoute from "./routes/root/authentication/authentication.route";
import { urlencoded } from "body-parser";
export default class App {
  private readonly app: Application;
  private readonly port: number;

  constructor() {
    this.app = express();
    this.port = parseInt(process.env.PORT || "4000");
    this.init();
  }

  private init() {
    this.initConfig();
    this.initMiddlewares();
    this.initRoutes();
    this.initErrorHandling();
  }

  private initConfig() {
    new Database();
  }

  private initMiddlewares() {
    this.app.use(
      cors({
        origin: ["http://localhost:3000", "http://localhost:4000"],
        credentials: true,
      })
    );
    this.app.use(express.json());
    this.app.use(bodyParser.json());
    bodyParser.urlencoded({ extended: true });
    this.app.use(cookieParser());
    this.app.use(urlencoded({ extended: true }));
    dotenv.config();
  }

  private initRoutes() {
    this.app.use("/authentication", authenticationRoute);
    this.app.use("/users", userRoute);
    this.app.use("/admins", adminRoute);
    this.app.use("/categories", categoryRoute);
    this.app.use("/products", productRoute);
    this.app.use("/cards", cardRoute);
    this.app.use("/adminTickets", adminTicketRoute);
    this.app.use("/userTickets", userTicketRoute)
  }

  initErrorHandling() {
    this.app.use(ErrorHandler.notFound);
    this.app.use(ErrorHandler.serverError);
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Server Is Runnin On http://localhost:${this.port}`);
    });
  }
}

const app = new App();
app.listen();
