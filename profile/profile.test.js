const app = require('./../server');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const expect = chai.expect;
const server = require('../server');
const agent = chai.request.agent(app);
const Profile = require('../profile/profile.model.js');
const User = require('../user/user.model.js');

chai.should();
chai.use(chaiHttp);

describe('Profiles', function () {
    const agent = chai.request.agent(server);
    const newProfile = {
        name: 'Nameof Fakery',
        aka: ['Fake Spy', 'Faux Faux', 'Moar Fake'],
        house: ['Fake'],
        allied: ['None'],
        against: ['None'],
        status: ['Alive']
    };
    const user = {
        username: 'testing',
        password: 'testing'
    };

    before(function (done) {
        agent
            .post('/sign-up')
            .set('content-type', 'application/x-www-form-urlencoded')
            .send(user)
            .then(function (res) {
                done();
            })
            .catch(function (err) {
                done(err);
            });
    });

    it('Should create a new profile using POST with /profiles/new', function (done) {
        Profile.estimatedDocumentCount()
            .then(function (initialDocCount) {
                agent
                    .post('/profiles/new')
                    .set('content-type', 'application/x-www-form-urlencoded')
                    .send(newProfile)
                    .then(function (res) {
                        Profile.estimatedDocumentCount()
                            .then(function (newDocCount) {
                                expect(res).to.have.status(200);
                                expect(newDocCount).to.be.equal(initialDocCount + 1)
                                return done();
                            })
                            .catch(function (err) {
                                console.log(err.message)
                                done(err);
                            });
                    }).catch(function (err) {
                        console.log(err.message)
                        done(err);
                    });
            }).catch(function (err) {
                console.log(err.message)
                done(err);
            })
    }).catch(function (err) {
        console.log(err.message)
        done(err);
    });

    after(function (done) {
        Profile.findOneAndDelete(newPost)
            .then(function (res) {
                agent.close()
                User.findOneAndDelete({
                    username: user.username
                }).then(function (res) {
                    done()
                }).catch(function (err) {
                    done(err);
                });
            }).catch(function (err) {
                done(err);
            });
    });

});