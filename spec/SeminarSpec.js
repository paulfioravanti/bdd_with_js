describe('Seminar', function() {
  var seminar;

  describe('attributes', function() {
    beforeEach(function() {
      seminar = SeminarFactory.create();
    });

    it('has a name', function() {
      expect(seminar).toRespondTo('name');
    });

    it('has a net price', function() {
      expect(seminar).toRespondTo('netPrice');
    });
  });

  it('has a gross price that adds 20% VAT to the net price', function() {
    var seminar = SeminarFactory.create({ price: 100 });
    expect(seminar.grossPrice()).toEqual(120);
  });

  describe('when it is tax free', function() {
    beforeEach(function() {
      seminar = SeminarFactory.create({ taxFree: true });
    });

    it('has no tax applied', function() {
      expect(seminar).toBeTaxFree();
    });

    it('has a gross price that matches the net price', function() {
      expect(seminar.grossPrice()).toEqual(seminar.netPrice());
    });
  });

  describe('with three letters', function() {
    beforeEach(function() {
      seminar = SeminarFactory.create({ name: 'BDD' });
    });

    it('is granted a 3-letter discount', function() {
      expect(seminar).toHave3LetterDiscountGranted();
    });

    it('gives a discount of 5%', function() {
      expect(seminar.discountPercentage()).toEqual(5);
    });
  });

  describe('with more than three letters', function() {
    beforeEach(function() {
      seminar = SeminarFactory.create();
    });

    it('is not granted a 3-letter discount', function() {
      expect(seminar).not.toHave3LetterDiscountGranted();
    });

    it('does not have a discount', function() {
      expect(seminar.discountPercentage()).toEqual(0);
    });
  });
});