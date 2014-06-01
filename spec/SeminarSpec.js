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
    var seminar = SeminarFactory.create();
    expect(seminar.grossPrice()).toEqual(600);
  });
});