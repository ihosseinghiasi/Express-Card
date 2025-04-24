import GenericRepository from "./generic.repository";
import IEmail from "../interface/email.interface";
import Email from "../models/email";

export default class EmailRepository extends GenericRepository<IEmail> {
  constructor() {
    super(Email);
  }
}
