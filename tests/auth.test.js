const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../server');
const agent = chai.request.agent(app);
const Profile = require('../models/profile.model.js/index.js');
const User = require('../models/user.model.js');

chai.should();
chai.use(chaiHttp);

describe('User', function () {

    it('should not log in without signing up first', function (done) {
        agent.post('login', {
            email: 'fake@fake.edu',
            password: 'picklerick'
        }).end(function (err, res) {
            res.status.should.be.equal(401);
            done();
        });
    });

    it('should be able to sign up', function (done) {
        User.findOneAndRemove({
            username: 'hello'
        }, function () {
            agent
                .post('/signup')
                .send({
                    username: 'hello',
                    password: 'goodbye'
                })
                .end(function (err, res) {
                    console.log(res.body);
                    res.should.have.status(200);
                    agent.should.have.cookie('gotToken');
                    done();
                });
        });
    });

    it('should be able to log out', function (done) {
        agent.get('/logout').end(function (err, res) {
            res.should.have.status(200);
            agent.should.not.have.cookie('gotToken');
            done();
        });
    });

    after(function () {
        agent.close()
    });
})