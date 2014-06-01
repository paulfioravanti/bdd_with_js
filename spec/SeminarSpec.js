describe('Seminar', function() {
  var seminar;

  describe('messages', function() {
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

  describe('#name', function() {
    var name = 'Foo', fetchedName;

    beforeEach(function() {
      seminar = SeminarFactory.create({ name: name });
      fetchedName = seminar.name();
    });

    it('returns the name of the seminar', function() {
      expect(fetchedName).toEqual(name);
    });
  });

  describe('#netPrice', function() {
    var netPrice = 500, fetchedNetPrice;

    beforeEach(function() {
      seminar = SeminarFactory.create({ price: netPrice });
      fetchedNetPrice = seminar.netPrice();
    });

    it('returns the net price of the seminar', function() {
      expect(fetchedNetPrice).toEqual(netPrice);
    });
  })

  describe('#isTaxFree', function() {
    var taxFree = true, fetchedTaxFree;

    beforeEach(function() {
      seminar = SeminarFactory.create({ taxFree: taxFree });
      fetchedTaxFree = seminar.isTaxFree();
    });

    it('indicates the tax free status of the seminar', function() {
      expect(fetchedTaxFree).toEqual(taxFree);
    });
  })

  describe('#grossPrice', function() {
    var netPrice = 100, grossPrice;

    beforeEach(function() {
      seminar = SeminarFactory.create({ price: netPrice });
    });

    describe('when seminar is tax free', function() {
      beforeEach(function() {
        spyOn(seminar, 'isTaxFree').and.returnValue(true)
        grossPrice = seminar.grossPrice();
      });

      it('has no tax applied', function() {
        expect(grossPrice).toEqual(netPrice);
      });
    });

    describe('when seminar is not tax free', function() {
      var VATIncludedPrice = netPrice * 1.2;

      beforeEach(function() {
        spyOn(seminar, 'isTaxFree').and.returnValue(false)
        grossPrice = seminar.grossPrice();
      });

      it('calculates VAT at a rate of 20% of the net price', function() {
        expect(grossPrice).toEqual(VATIncludedPrice);
      });
    });
  });

  describe('#has3LetterDiscountGranted', function() {
    describe('when seminar name is three letters or less', function() {
      beforeEach(function() {
        seminar = SeminarFactory.create({ name: 'BDD' });
        discountPercentage = seminar.has3LetterDiscountGranted();
      });

      it('is granted a 3-letter discount', function() {
        expect(seminar).toHave3LetterDiscountGranted();
      });
    });

    describe('when seminar name is more than three letters', function() {
      beforeEach(function() {
        seminar = SeminarFactory.create({ name: 'FRAG' });
        discountPercentage = seminar.has3LetterDiscountGranted();
      });

      it('does not have a discount', function() {
        expect(seminar).not.toHave3LetterDiscountGranted();
      });
    });
  });

  describe('#discountPercentage', function() {
    var discountPercentage, discount;

    beforeEach(function() {
      seminar = SeminarFactory.create();
    });

    describe('when discount granted', function() {
      beforeEach(function() {
        discount = 5;
        spyOn(seminar, 'has3LetterDiscountGranted').and.returnValue(true)
        discountPercentage = seminar.discountPercentage();
      });

      it('is 5%', function() {
        expect(discountPercentage).toEqual(discount);
      });
    });

    describe('when discount not granted', function() {
      beforeEach(function() {
        discount = 0;
        spyOn(seminar, 'has3LetterDiscountGranted').and.returnValue(false)
        discountPercentage = seminar.discountPercentage();
      });

      it('does not have a discount', function() {
        expect(discountPercentage).toEqual(discount);
      });
    });
  });

  describe('#toString', function() {
    var stringifiedSeminar = '[Seminar "Foo"]', string;

    beforeEach(function() {
      seminar = SeminarFactory.create({ name: 'Foo' });
      string = seminar.toString();
    });

    it('returns a string representation of a seminar', function() {
      expect(string).toEqual(stringifiedSeminar);
    });
  });
});