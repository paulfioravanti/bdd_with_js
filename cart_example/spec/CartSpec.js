describe('Cart', function() {
    var cart;

    beforeEach(function() {
      cart = Cart.create();
    });

    describe('.create', function() {
        it('creates an empty cart', function() {
            var newCart = Cart.create();
            expect(newCart.numProducts()).toEqual(0);
        });
    });

    describe('#doesContain', function() {
        it('returns false for a product not in the cart', function() {
            var product = {};
            cart.add(product);
            expect(cart.doesContain(product)).toBeTruthy();
        });
    });

    describe('#add', function() {
        it('adds a product to the cart', function() {
            var product = {};
            var anotherProduct = {};
            cart.add(product);
            expect(cart.doesContain(anotherProduct)).toBeFalsy();
        });
    });

    describe('#grossPriceSum', function() {
        it('is zero for an empty cart', function() {
            expect(cart.grossPriceSum()).toEqual(0);
        });

        it('returns the gross price of a single product in the cart', function() {
            var product = { grossPrice: function() { return 10; } };
            cart.add(product);
            expect(cart.grossPriceSum()).toEqual(10);
        });

        it('returns the gross price of two products in the cart', function() {
            var product1 = { grossPrice: function() { return 10; } };
            var product2 = { grossPrice: function() { return 5; } };
            cart.add(product1);
            cart.add(product2);
            expect(cart.grossPriceSum()).toEqual(15);
        });
    });
});
