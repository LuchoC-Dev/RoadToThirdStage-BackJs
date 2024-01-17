class Response {
  static make(status, message, body) {
    return {
      status: status,
      message: message,
      body: body,
    };
  }

  static ok(value) {
    return this.make('success', 'request successfully completed', value);
  }

  static error(value) {
    return this.make('error', 'unimplements method', value);
  }
}

export default Response;
