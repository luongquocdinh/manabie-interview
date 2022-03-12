process.env.NODE_ENV = 'test';
process.env.MYSQL_DATABASE = 'manabie-test';

const {tasks} = require('../models').mysql;
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();

chai.use(chaiHttp);

//Our parent block
describe('Tasks', () => {
  before((done) => {
      //Before test we empty the database in your case
      tasks.destroy({
        where: {},
        truncate: true
      }).then(() => {
        done();
      });
  });
  /*
  * Test the /GET route
  */
  describe('/POST /task', () => {
    it('it should create new task', (done) => {
      const model = {
        name: "Task 1",
        description: "Write API",
        status: "todo",
        estimated_time: 1647047902,
        due_date: 1647047902,
        user_id: 2
      }
      chai.request(server)
          .post('/task')
          .set('content-type', 'application/json')
          .send(model)
          .end((err, res) => {
              res.should.have.status(200);
              res.body.data.should.be.a('object');
              res.body.data.should.have.property('id');
              res.body.data.should.have.property('name');
              res.body.data.should.have.property('status');
              res.body.data.should.have.property('due_date');

              done();
          });
    });
  });

  describe('/GET /tasks', () => {
      it('it should GET all the tasks', (done) => {
        chai.request(server)
            .get('/tasks')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.error.should.be.eql(false);
                res.body.data.should.be.a('array');
                done();
            });
      });
  });

  describe('/GET task/:id', () => {
      it('it should GET detail task', (done) => {
        chai.request(server)
            .get('/task/1')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.error.should.be.eql(false);
                res.body.data.should.be.a('object');
                res.body.data.id.should.be.eql(1);
                done();
            });
      });
  });

  describe('/PUT /task/:id', () => {
      it('it should update task', (done) => {
        const model = {
          "status": "in-process"
        }
        chai.request(server)
            .put('/task/1')
            .set('content-type', 'application/json')
            .send(model)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.data.should.be.a('object');
                res.body.data.should.have.property('id');
                res.body.data.should.have.property('name');
                res.body.data.should.have.property('status');
                res.body.data.should.have.property('due_date');

                done();
            });
      });
  });

});