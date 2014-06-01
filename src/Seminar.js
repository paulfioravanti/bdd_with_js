var VAT_RATE = 1.2;

var SeminarFactory = {
  create: function(options) {
    options = options || {};
    var defaults = { name: 'Javascript-Basics', price: 500, taxFree: false };
    var values = Object.merge(defaults, options);
    return Seminar.create(values.name, values.price, values.taxFree);
  }
};

Object.merge = function(object, options) {
  for (var property in options) {
    object[property] = options[property];
  }
  return object;
};

var Seminar = {
  create: function(name, price, taxFree) {
    return Object.create(Seminar).init(name, price, taxFree);
  },
  init: function(name, price, taxFree) {
    this._name = name;
    this._price = price;
    this._taxFree = taxFree;
    return this;
  },
  name: function() {
    return this._name;
  },
  netPrice: function() {
    return this._price;
  },
  grossPrice: function() {
    return this.netPrice() * (this.isTaxFree() ? 1: VAT_RATE);
  },
  isTaxFree: function() {
    return this._taxFree;
  },
  has3LetterDiscountGranted: function() {
    return this.name().length <= 3;
  },
  toString: function() {
    return '[Seminar "' + this.name() + '"]';
  }
};
