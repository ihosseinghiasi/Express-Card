import ApiResponse from "../interface/response.interface";
export default class ResponseBulider {
  success<T>(data: T, message: string = "success"): ApiResponse<T> {
    return {
      statusCode: 200,
      message,
      data,
    };
  }

  error(message: string, statusCode: number = 500): ApiResponse<never> {
    return {
      statusCode,
      message,
    };
  }

  notFound(message: string): ApiResponse<never> {
    return {
      statusCode: 404,
      message,
    };
  }

  badRequest(message: string): ApiResponse<never> {
    return {
      statusCode: 400,
      message,
    };
  }
}
