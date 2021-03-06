// # disallowClassLiteralsBeforeAttributes: `true`
//
// All attribute blocks must be written before any class literals.
//
// ```jade
// //- Invalid
// input.class(type='text')
//
// //- Valid
// input(type='text').class
// ```

var utils = require('../utils')

module.exports = function () {}

module.exports.prototype =
  { name: 'disallowClassLiteralsBeforeAttributes'

  , contradictions: [ 'requireClassLiteralsBeforeAttributes' ]

  , configure: function (options) {

      utils.validateTrueOptions(this.name, options)

    }

  , lint: function (file, errors) {

      file.addErrorForIncorrectTokenTypeOrder('start-attributes', 'class', errors
        , 'All class literals must be written after any attribute blocks')

    }
  }
