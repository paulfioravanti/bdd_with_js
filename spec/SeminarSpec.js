describe('Seminar', function() {
  it('has a name', function() {
    var seminar = SeminarFactory.create();
    expect(seminar.name()).toEqual('Javascript-Basics');
  });

  it('has a net price', function() {
    var seminar = SeminarFactory.create();
    expect(seminar.netPrice()).toEqual(500);
  });

  it('has a gross price that adds 20% VAT to the net price', function() {
    var seminar = SeminarFactory.create({ price: 100 });
    expect(seminar.grossPrice()).toEqual(120);
  });

  describe('when it is tax free', function() {
    var seminar;

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
    var seminar;

    beforeEach(function() {
      seminar = SeminarFactory.create({ name: 'BDD' });
    });

    it('is granted a 3-letter discount', function() {
      expect(seminar).toHave3LetterDiscountGranted();
    });
  });

  describe('with more than three letters', function() {
    var seminar;

    beforeEach(function() {
      seminar = SeminarFactory.create();
    });

    it('is not granted a 3-letter discount', function() {
      expect(seminar).not.toHave3LetterDiscountGranted();
    });
  });
});