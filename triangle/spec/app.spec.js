describe("Triangle", function() {
  
  describe(".isTriangle", function() {
    
    it("should properly identify valid triangles", function() {
      var value1 = TryAngle.isTriangle(1,1,1);
      var value2 = TryAngle.isTriangle(2,3,4);
      var value3 = TryAngle.isTriangle(2,3,2);

      expect(value1).toBe(true);
      expect(value2).toBe(true);
      expect(value3).toBe(true);
    });
    it("should properly identify non-valid triangles", function() {
      var value = TryAngle.isTriangle(1,100,1);

      expect(value).toBe(false);
    });
  });
  describe(".getTyoeBySidesLength", function() {
    it("should properly identify scalene triangles", function() {
      var value = TryAngle.getTypeBySidesLength(2,3,4);
      
      expect(value).toBe(TryAngle.SIDE_SCALENE);
    });
    it("should properly identify equilateral triangles", function() {
      var value = TryAngle.getTypeBySidesLength(2,2,2);
      
      expect(value).toBe(TryAngle.SIDE_EQUILATERAL);
    });
    it("should properly identify isosceles triangles", function() {
      var value = TryAngle.getTypeBySidesLength(2,4,2);
      
      expect(value).toBe(TryAngle.SIDE_ISOSCELES);
    });
    it("should properly handle non-valid triangles");
  });
});