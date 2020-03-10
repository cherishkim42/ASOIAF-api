process.env.NODE_ENV = 'test'

const chai = require('chai');
const chaiHttp = require('chai-http');
const mocha = require('mocha');
const should = chai.should();
const expect = chai.expect;

const Profile = require('../models/profile');
const server = require('../server');

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

describe('Profiles', () => {
    const newProfile = {
        name: 'FakeName',
        AKA: 'FakeAKA',
        house: 'FakeHouse',
        allies: 'FakeAllies',
        against: 'FakeEnemies',
        status: 'Who Knows'
    }
    it('should create new Profile with valid attributes at POST /profiles/new', (done) => {
        chai.request(server)
        .post('profiles/new')
        .send(newProfile)
        .then(function (res) {
            res.should.have.status(200)
            console.log(body)
        })
        done()
    })
})
