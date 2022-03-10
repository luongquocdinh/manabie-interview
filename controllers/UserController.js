const BaseController = require('./BaseController.js');
const {users} = require('../models').mysql;
const { Authentication } = require('../libs');
const { DataConstant } = require('../constants');

module.exports = class UserController extends BaseController {
    /**
     * constructor
     */
    constructor(req, res, next) {
      super(req, res, next);
      this._user = users;
      this._auth = new Authentication;
    }

    /**
     * GET /users
     */
    async index() {
      const page = this._req.query.page || 1;
      const limit = 20;

      try {
        const users = await this._user.findAll({
          limit,
          offset: (page - 1) * limit
        });

        return this.renderJson(users);
      } catch (e) {
        return this.errorWithMessage(500, e);
      }
    }
}