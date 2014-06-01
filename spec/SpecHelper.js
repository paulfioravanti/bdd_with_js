beforeEach(function() {
  jasmine.addMatchers({
    toBeTaxFree: function() {
      return {
        compare: function(actual, expected) {
          return {
            pass: actual.isTaxFree()
          }
        }
      };
    },
    toHave3LetterDiscountGranted: function() {
      return {
        compare: function(actual, expected) {
          return {
            pass: actual.has3LetterDiscountGranted(),
            message: "Expected the seminar '" + actual + "' to " +
              "return 'true' on #has3LetterDiscountGranted but got '" +
              (actual.has3LetterDiscountGranted &&
                actual.has3LetterDiscountGranted()) + "'"
          }
        },
        negativeCompare: function(actual, expected) {
          return {
            pass: !actual.has3LetterDiscountGranted(),
            message: "Expected the seminar '" + actual + "' to " +
              "return 'false' on #has3LetterDiscountGranted but got '" +
              (actual.has3LetterDiscountGranted &&
                !actual.has3LetterDiscountGranted()) + "'"
          }
        }
      };
    }
  });
});