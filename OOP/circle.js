const _radius = new WeakMap();
export class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }
  draw() {
    console.log('Circle with radious ' + _radius.get(this));
  }
}
//module.exports.Circle = Circle;
