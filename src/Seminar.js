var VAT_RATE = 1.2;

var SeminarFactory = {
  create: function(options) {
    options = typeof options !== 'undefined' ? options : {};
    var defaults = { name: 'Javascript-Basics', price: 500 };
    var values = Object.merge(defaults, options);
    return Seminar.create(values.name, values.price);
  }
};

Object.merge = function(object, options) {
  for (var property in options) {
    object[property] = options[property];
  }
  return object;
};

var Seminar = {
  create: function(name, price) {
    return Object.create(Seminar).init(name, price);
  },
  init: function(name, price) {
    this._name = name;
    this._price = price;
    return this;
  },
  name: function() {
    return this._name;
  },
  netPrice: function() {
    return this._price;
  },
  grossPrice: function() {
    return this.netPrice() * VAT_RATE;
  }
};
