import { use, request, expect } from 'chai';
//import chaiHttp from 'chai-http';
//import app from '../app';
const app =require('../app')
const chai = require('chai');
const chaiHttp = require('chai-http');

describe('Sample Test', () => {
  it('should test that true === true', () => {
    expect(true).to.be.true;
  });
});

// const { expect } = chai;
use(chaiHttp);
describe('Server!', () => {
  it('welcomes user to the api', (done) => {
    request(app)
      .get('/api')
      .end((err, res) => {
        // eslint-disable-next-line no-undef
        expect(res).to.have.status(200);
        // eslint-disable-next-line no-undef
        expect(res.body.status).to.equals('success');
        // eslint-disable-next-line no-undef
        expect(res.body.message).to.equals('Welcome to my server');
        done();
      });
  });
});

describe('post/createRoom', () => {
  it('it should  create a new room', (done) => {
            chai.request(app)
            .post('/api/createRoom')
            .end((err,res) => {
              expect(res).to.have.status(201);
              //res.body.should.have.property('hotelId')
             done();
           })
      });
});

