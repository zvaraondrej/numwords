import _ from 'lodash';
import T9Service from './../../services/T9Service.service';
import ErrorHandlerService from './../../services/ErrorHandler.service';
import EntityHandlerService from './../../services/EntityHandler.service';
import ERROR from './../../enums/Error.enum';

export default class WordsController {
  constructor() {
    this.t9Service = new T9Service();
    this.errorHandler = new ErrorHandlerService();
    this.entityHandler = new EntityHandlerService();
    this.ERROR = ERROR;
  }

  /**
  * GET /api/words -> words list
  */
  getWords(req, res) {
    const value = req.query && req.query.value ? _.toNumber(req.query.value) : null;

    // we are accepting only finite numbers
    if (!value && !_.isFinite(value)) {
      return Promise.reject(new Error(this.ERROR.MSG.INVALID_ARGUMENT)).catch(
        this.errorHandler.handleError(res),
      );
    }

    try {
      return this.t9Service
        .getWordsFromNumber(value)
        .then(this.errorHandler.respondEntityNotFound(res))
        .then(this.entityHandler.respondWithEntity(res))
        .catch(this.errorHandler.handleError(res));
    } catch (e) {
      return Promise.reject(new Error(this.ERROR.MSG.INTERNAL_ERROR)).catch(
        this.errorHandler.handleError(res),
      );
    }
  }
}
