describe('instances', function () {

  var instances = require('../instances.of')
    , expect    = require('chai').expect

  describe('object', function () {

    it('should contain an `of` function', function () {
      expect(instances)
        .to.have.property('of')
          .to.be.a('function')
    })

  })

})
