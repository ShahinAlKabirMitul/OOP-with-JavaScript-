class Shape {
  constructor(color) {
    this.color = color;
  }
  move() {
    console.log('move');
  }
}
class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }
  draw() {
    console.log('draw');
  }
}
const c = new Circle('red', 1);

// Class Decrarationa
// const _radius = new WeakMap();
// class Circle {
//   constructor(radius) {
//     _radius.set(this, radius);
//   }
//   get radius() {
//     return _radius.get(this);
//   }
//   set radius(value) {
//     if (value <= 0) throw new Error('Invalid radious');
//     _radius.set(this, value);
//   }
// }

// const circle = new Circle(1);
// circle.radius;
// console.log(circle);

// class Circle {
//   constructor(radius) {
//     this.radius = radius;
//     this.move = function() {};
//   }
//   draw() {
//     console.log('Circle');
//   }
// }
// const c = new Circle(1);

//

//

// function mixin(target, ...sources) {
//   Object.assign(target, ...sources);
// }
// const canEat = {
//   eat: function() {
//     this.hunger--;
//     console.log('eating');
//   },
// };

// const canWalk = {
//   walk: function() {
//     console.log('Walking');
//   },
// };

// const canSwim = {
//   swim: function() {
//     console.log('Swim');
//   },
// };

// function Person() {}
// function GoldFish() {}

// mixin(Person.prototype, canEat, canWalk);
// person = new Person();
// console.log(person);

// mixin(GoldFish.prototype, canEat, canSwim);
// const gf = new GoldFish();
// console.log(gf);

// function extend(Child, Parent) {
//   Child.prototype = Object.create(Parent.prototype);
//   Child.prototype.constractor = Child;
// }

// function Shape() {}
// Shape.prototype.dublicate = function() {
//   console.log('Dublicate');
// };

// function Circle() {}

// extend(Circle, Shape);

// Circle.prototype.dublicate = function() {
//   console.log('Dublicate Circle');
// };

// function Square() {}
// extend(Square, Shape);
// Square.prototype.dublicate = function() {
//   console.log('Dublicate Square');
// };

// const shapes = [new Circle(), new Square()];
// for (let s of shapes) s.dublicate();

// const c = new Circle();

// function Circle(radius) {
//   this.radius = radius;
//   this.move = function() {
//     console.log('Move');
//   };
// }

// const c1 = new Circle(5);
// const c2 = new Circle(6);
// Circle.prototype.draw = function() {
//   console.log('Draw');
// };
// c1.draw();
// return instance member
//console.log(Object.keys(c1));

// return all members (instance + prototype)
//for (let key in c1) console.log(key);

// Circle.prototype.toString = function() {
//   return 'Circle with radius' + this.radius;
// };

// let person = { name: 'Mitul' };
// Object.defineProperty(person, 'name', {
//   writable: false,
//   enumerable: true,
//   configurable: false,
// });
// person.name = 'asha';
// delete person.name;
// console.log(person);
// console.log(Object.keys(person));

// function Circle(radious) {
//   this.radius = radious;

//   let defaultLocation = { x: 0, y: 0 };

//   this.draw = function() {
//     console.log('drow');
//   };
//   Object.defineProperty(this, 'defaultLocation', {
//     get: function() {
//       return defaultLocation;
//     },
//     set: function(value) {
//       if (!value.x || !value.y) {
//         throw new Error('Invalid location');
//       }
//       defaultLocation = value;
//     },
//   });
// }
// const circle = new Circle(10);
// circle.draw();
// circle.defaultLocation = 1;

// function Circle(radious) {
//   this.radius = radious;
//   this.draw = function() {
//     console.log('drow');
//   };
// }
// const circle = new Circle(10);

// for (let key in circle) {
//   if (typeof circle[key] !== 'function') console.log(key, circle[key]);
// }
// const keys = Object.keys(circle);
// console.log(keys);
// if ('radius' in circle) console.log('Circle has a radius');

// let obj = { value: 10 };
// function increaseObj(obj) {
//   obj.value++;
// }
// increaseObj(obj);
// console.log(obj);

// let number = 10;
// function increase(number) {
//   number++;
// }
// increase(10);

// let x = { value: 10 };
// let y = x;
// x.value = 20;

// // Factory Function
// function createCircle(radius) {
//   return {
//     radius,
//     draw: function() {
//       console.log('draw');
//     },
//   };
// }
// const circle = createCircle(1);

// // Constractor Functions
// function Circle(radius) {
//   console.log('this', this);
//   (this.radius = radius),
//     (this.draw = function() {
//       console.log('Drow');
//     });
// }
// const another = new Circle(1);
// another.draw();
