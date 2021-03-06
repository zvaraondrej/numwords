'use strict';

import _ from 'lodash';
import request from 'supertest';
import app from '../..';
import enums from './../../enums/Error.enum';

describe('Words API:', function() {
  
  describe('GET /api/words', function() {
    var words;

    beforeEach(function(done) {
      request(app)
        .get('/api/words')
        .expect(500)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          words = res.body;
          done();
        });
    });

    it('should respond with JSON Object', function() {
      words.should.be.instanceOf(Object);
    });

    it('should contain proper error message ', function() {
      expect(words.msg).to.equal(`Error: ${enums.MSG.INVALID_ARGUMENT}`);
    });
  });


  describe('GET /api/words?value=1', function() {
    var words;

    beforeEach(function(done) {
      request(app)
        .get('/api/words?value=1')
        .expect(500)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          words = res.body;
          done();
        });
    });

    it('should respond with JSON Object', function() {
      words.should.be.instanceOf(Object);
    });

    it('should contain proper error message ', function() {
      expect(words.msg).to.equal(`Error: ${enums.MSG.VALUE_RANGE}`);
    });
  });

  describe('GET /api/words?value=23', function() {
    var words;

    beforeEach(function(done) {
      request(app)
        .get('/api/words?value=23')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          words = res.body;
          done();
        });
    });

    it('should respond with Array', function() {
      words.should.be.instanceOf(Array);
    });

    it('should contain 9 members', function() {
      expect(words.length).to.equal(9);
    });

    it('should contain 9 members', function() {
      var testArr = [ 'ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'];
      expect(_.isEqual( words.sort(), testArr.sort())).to.equal(true);
    });

  });

});
