process.env.NODE_ENV = 'test'

let Profile = require('../models/profile')

let server = require('../server')
let chai = require('chai')
let chaiHttp = require('chai-http')
let mocha = require('mocha')
let should = chai.should()

chai.use(chaiHttp)

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