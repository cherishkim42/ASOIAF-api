process.env.NODE_ENV = 'test'

const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();
chai.use(chaiHttp);

const agent = chai.request.agent(server);

const User = require('../models/user');
const Profile = require('../models/profile');

describe("User", function() {

    it('should not be able to login if they have not registered', function(done) {
        agent.post('/login', {
            email: "dontexist@boo.com",
            password: "nullification"
        }).end(function (err, res) {
            res.status.should.be.equal(401);
            done();
        });
    });

    // it('should be able to signup', function(done) {
    //     User.findOneAndRemove({

    it('should be able to sign up', function(done) {
        agent.get('sign-up').end(function (err, res) {
            agent
                .post('/sign-up')
                .send({
                    username: "test1",
                    password: "pw"
                })
                .end(function (err, res) {
                    res.should.have.status(200);
                    done();
                });
        done();
        });
    });

    it('should be able to log out', function(done) {
        agent.get('/logout').end(function (err, res) {
            res.should.have.status(200);
            agent.should.not.have.cookie('nToken');
            done();
        });
        done();
    });

    after(function() {
        agent.close()
    });
});