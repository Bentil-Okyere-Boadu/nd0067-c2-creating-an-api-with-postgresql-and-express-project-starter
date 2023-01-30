
class CustomAPIError extends Error {
  statusCode: number = 0
  message: string = ''

  constructor(message: string, statusCode: number ) {
    super();
    this.message = message
    this.statusCode = statusCode
  }
}

export default CustomAPIError;
