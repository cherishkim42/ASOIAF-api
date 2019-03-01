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

})



// lol no
// const jon = {
//     'name': ['Jon Snow', 'King in the North', 'Aegon Targaryen'],
//     'house': ['Targaryen', 'Stark'],
//     'allied': ['Daenerys Targaryen', 'House Stark', 'House Arryn'],
//     'against': ['Night King', 'Cersei Lannister'],
//     'status': 'alive'
// };

// it('should create new object with name, house, allied, against, and dead/alive status', function () {
//     const name = jon.name;
//     const house = jon.house;
//     const allied = jon.allied;
//     const against = jon.against;
//     const status = jon.status;
//     expect(jon).to.be.a('object')
//     expect(name).to.be.a('array');
//     expect(house).to.be.a('array');
//     expect(allied).to.be.a('array');
//     expect(status).to.be.a('string');
//     expect(status).to.equal('alive');
// });