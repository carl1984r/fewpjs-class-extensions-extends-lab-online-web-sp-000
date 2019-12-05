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

class Triangle extends Polygon {

  get isValid() {
    const a = this.sides[0];
    const b = this.sides[1];
    const c = this.sides[2];
    return (this.countSides === 3 && (a + b > c) && (a + c > b) && (b + c > a));
  };

}
