describe("A Cart with several different products", function() {
    var cart;

    beforeEach(function() {
        cart = Cart.create();
    });

    it("should have a #grossPriceSum of the contained products", function() {
        var license = Product.create('UltraIDE license', 100);
        var studyBook = StudyBook.create('Secrets of HTML', 10);
        cart.add(license);
        cart.add(studyBook);
        expect(cart.grossPriceSum()).toEqual(100 * 1.20 + 10 * 1.07);
    });
});
