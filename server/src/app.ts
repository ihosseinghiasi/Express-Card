import express, { Application } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import ErrorHandler from "./helpers/error-handler";
import Database from "./config/db";
import dotenv from "dotenv";
import root from "./routes/root/root.route";
import { urlencoded } from "body-parser";
class App {
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
    this.app.use("/", root);
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
