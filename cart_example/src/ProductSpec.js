describe('Product', function(){
    it('calculates its gross price by adding a VAT of 20%', function(){
        var product = Product.create('Some Product', 100);
        expect(product.grossPrice()).toEqual(120);
    });
});
