class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  get countSides() {
    return this.sides.length;
  }
  get perimeter() {
    return this.sides.reduce((acc, acum) => {
      return acc + acum;
    });
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (
      this.sides[0] + this.sides[1] >= this.sides[2] &&
      this.sides[0] + this.sides[2] >= this.sides[1] &&
      this.sides[1] + this.sides[2] >= this.sides[0]
    ) {
      //a + b <= c || a + c <= b || b + c <= a
      return true;
    } else {
      return false;
    }
  }
}

class Square extends Polygon {
  get area() {
    return this.sides[0] ** 2;
  }
  get isValid() {
    if (this.sides[0] == this.sides[1]) {
      return true;
    } else if (this.sides[2] == this.sides[3]) {
      return true;
    } else if (this.sides[1] == this.sides[2]) {
      return true;
    } else return false;
  }
}

tr = new Triangle([5, 5, 5]);
