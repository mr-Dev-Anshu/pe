class ApiError extends Error {
  constructor(statusCode, message = "Something went wrong ", errors = []) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
    this.errors = errors;
  }
}
export {ApiError} ;