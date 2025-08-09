export default interface ApiResponse<T> {
  statusCode: Number;
  message: String;
  data?: T;
}
