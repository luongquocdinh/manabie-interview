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


}