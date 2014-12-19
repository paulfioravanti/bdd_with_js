var Cart = {
    create: function() { return Object.create(Cart).init(); },
    init: function() {
      this._items = [];
      return this;
    },
    numProducts: function() { return this._items.length; },
    doesContain: function(item) { return this._items.indexOf(item) !== -1; },
    add: function(item) { this._items.push(item); },
    grossPriceSum: function() {
        return this._items
            .map(function(item) { return item.grossPrice(); })
            .reduce(function(sum, price) { return sum + price; }, 0);
    }
};
