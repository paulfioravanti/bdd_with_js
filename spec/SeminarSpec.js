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

    it('has a gross price', function() {
      expect(seminar).toRespondTo('grossPrice');
    });
  });

  describe('#grossPrice', function() {
    var grossPrice;

    beforeEach(function() {
      seminar = SeminarFactory.create({ price: 100 });
      grossPrice = seminar.grossPrice();
    });

    it('calculates VAT at a rate of 20% of the net price', function() {
      expect(grossPrice).toEqual(120);
    });
  })

  describe('when it is tax free', function() {
    var grossPrice, netPrice;

    beforeEach(function() {
      seminar = SeminarFactory.create({ taxFree: true });
      grossPrice = seminar.grossPrice();
      netPrice = seminar.netPrice();
    });

    it('has no tax applied', function() {
      expect(seminar).toBeTaxFree();
    });

    it('has a gross price that matches the net price', function() {
      expect(grossPrice).toEqual(netPrice);
    });
  });

  describe('with three letters', function() {
    var discountPercentage;

    beforeEach(function() {
      seminar = SeminarFactory.create({ name: 'BDD' });
      discountPercentage = seminar.discountPercentage();
    });

    it('is granted a 3-letter discount', function() {
      expect(seminar).toHave3LetterDiscountGranted();
    });

    it('gives a discount of 5%', function() {
      expect(discountPercentage).toEqual(5);
    });
  });

  describe('with more than three letters', function() {
    var discountPercentage;

    beforeEach(function() {
      seminar = SeminarFactory.create();
      discountPercentage = seminar.discountPercentage();
    });

    it('is not granted a 3-letter discount', function() {
      expect(seminar).not.toHave3LetterDiscountGranted();
    });

    it('does not have a discount', function() {
      expect(discountPercentage).toEqual(0);
    });
  });
});