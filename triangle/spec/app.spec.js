describe("Triangle", function() {
  it("should properly identify valid triangles", function() {
    var value = TryAngle.isTriangle(1,1,1);
    expect(value).toBe(true);
  });
  it("should properly identify non-valid triangles", function() {
    var value = TryAngle.isTriangle(1,100,1);
    expect(value).toBe(false);
  });
});