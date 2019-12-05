// Your code here
class Polygon {

  constructor(sides) {
    this.sides = sides;
  };

  get countSides() {
    return this.sides.length;
  };

  get perimeter() {
    return this.sides.reduce((acc, val) => acc + val);
  };

}

class Triangle {


};
