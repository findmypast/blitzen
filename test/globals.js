const chai = require('chai');
global.should = chai.should();

// const chaiAsPromised = require('chai-as-promised');
// chai.use(chaiAsPromised);

global.sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);

global.expect = chai.expect;
global.mockery = require('mockery');
// global.Promise = require('bluebird');
