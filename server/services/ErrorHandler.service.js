import ERROR from './../enums/Error.enum';

export default class ErrorHandlerService {
  constructor() {
    this.ERROR = ERROR;
  }

  /**
  * Return code 404 and proper error msg
  */
  respondEntityNotFound(res) {
    return (entity) => {
      if (!entity) {
        res.status(404).json({ msg: this.ERROR.MSG.NOT_FOUND });
        return null;
      }
      return entity;
    };
  }

  /**
  * Return code 500 and proper error msg
  */
  handleError(res, statusCode = 500, msg) {
    return (err) => {
      const error = msg || err;
      return res.status(statusCode).json({ msg: error.toString() });
    };
  }
}
