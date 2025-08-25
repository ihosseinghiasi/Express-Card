export default interface IUser {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  isAdmin: Boolean;
  department: Boolean;
  permissionAdmin: Boolean;
  permissionProduct: Boolean;
  permissionCard: Boolean;
  permissionEmail: Boolean;
  permissionReport: Boolean;
  permissionTicket: Boolean;
  permissionCategory: Boolean;
  permissionUser: Boolean;
  permissionPayment: Boolean;
}
