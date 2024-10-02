import mongoose from "mongoose";

export default class Database {
  private readonly URI: string

  constructor() {
    this.URI = process.env.MONGO_URI || "mongodb://localhost:27017/comercial"
    this.connect()
  }

  private async connect() {
    try {
      await mongoose.connect(this.URI)
      console.log("Database Connection Successfully")
    } catch (error) {
      console.error("Datebase Connection Failed")
    }
  }
}
