// Don't use agent... it's not working.... or maybe I can't call app?

process.env.NODE_ENV = 'test'

// const app = require("./../server");
const chai = require('chai');
const chaiHttp = require('chai-http');
const mocha = require('mocha');
const should = chai.should();
const expect = chai.expect;

const Profile = require('../models/profile');
const server = require('../server');
// const agent = chai.request.agent(app);

chai.should();
chai.use(chaiHttp);

describe('Profiles', () => {
    it('should GET all the profiles', (done) => {
        chai.request(server)
        .get('/profiles')
        .end((err, res) => {
            res.should.have.status(200)
            res.body.should.be.a('array')
            // console.log(res.body)
            // res.body.length.should.be.eql(0)
            done()
        })
    })
})
