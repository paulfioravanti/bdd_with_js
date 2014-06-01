beforeEach(function() {
  jasmine.addMatchers({
    toBeTaxFree: function() {
      return {
        compare: function(actual, expected) {
          var seminar = actual;
          return {
            pass: seminar.isTaxFree()
          }
        }
      };
    }
  });
});