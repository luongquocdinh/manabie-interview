const BaseController = require('./BaseController.js');
const Users = require('../models/mysql/Users');
const { Authentication } = require('../libs');
const { DataConstant } = require('../constants');

module.exports = class UserController extends BaseController {
    /**
     * constructor
     */
    constructor(req, res, next) {
      super(req, res, next);
      this._user = new Users;
      this._auth = new Authentication;
    }

    /**
     * GET /users
     */
    index() {
      const page = this._req.query.page || 1;
      const limit = 20;

      try {
        const users = this._user.findAll({
          limit: 2,
          offset: 3,
          where: {}
        });
      } catch (e) {
        this.errorWithMessage(500, e)
      }
    }
}