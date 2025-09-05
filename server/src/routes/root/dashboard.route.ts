import { Router } from "express";
import Dashboard from "../../controllers/dashboard/dashboard.controller";
class DashboardRoute {
  private readonly dashboard: Dashboard;
  public readonly router: Router;

  constructor() {
    this.dashboard = new Dashboard();
    this.router = Router();
    this.initRoutes();
  }

  private initRoutes() {
    this.router.get("/me", this.dashboard.me.bind(this.dashboard));
  }
}

export default new DashboardRoute().router;
