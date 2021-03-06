module.exports = createTest

var assert = require('assert')

function createTest (linter, fixturesPath) {

  describe('disallowHtmlText', function () {

    describe('true', function () {

      before(function () {
        linter.configure({ disallowHtmlText: true })
      })

      it('should report HTML text at the start', function () {
        assert.equal(linter.checkString('<strong>html</strong> text').length, 1)
      })

      it('should report HTML text anywhere', function () {
        assert.equal(linter.checkString('p this is <strong>html</strong> text').length, 1)
      })

      it('should not report missing HTML text', function () {
        assert.equal(linter.checkString('p this is text').length, 0)
      })

      it('should report multiple errors found in file', function () {
        var result = linter.checkFile(fixturesPath + 'disallow-html-text.jade')

        assert.equal(result.length, 2)
        assert.equal(result[0].code, 'JADE:LINT_DISALLOWHTMLTEXT')
        assert.equal(result[0].line, 3)
        assert.equal(result[1].line, 6)
      })

    })

  })

}
