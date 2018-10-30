describe('Index', function () {
  describe('Method A', function () {
    context('Case 1', function () {
      it.skip('should happen blabla', function () {
        throw new Error("broken test");
      });
    });
    context.only('Case 2', function () {
      it('should happen blabla', function () {
        throw new Error("broken test");
      });
    })
  });

  describe('Method B', function () {

  });
});
