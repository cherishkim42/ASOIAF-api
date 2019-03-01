const mocha = require('mocha');
const chai = require('chai');
const expect = chai.expect;
// const profile = require('../profile/profile.model.js');

const jon = {
    'name': ['Jon Snow', 'King in the North', 'Aegon Targaryen'],
    'house': ['Targaryen', 'Stark'],
    'allied': ['Daenerys Targaryen', 'House Stark', 'House Arryn'],
    'against': ['Night King', 'Cersei Lannister'],
    'status': 'alive'
};

it('should create new object with name, house, allied, against, and dead/alive status', function () {
    const name = jon.name;
    const house = jon.house;
    const allied = jon.allied;
    const against = jon.against;
    const status = jon.status;
    expect(jon).to.be.a('object')
    expect(name).to.be.a('array');
    expect(house).to.be.a('array');
    expect(allied).to.be.a('array');
    expect(status).to.be.a('string');
    expect(status).to.equal('alive');
});