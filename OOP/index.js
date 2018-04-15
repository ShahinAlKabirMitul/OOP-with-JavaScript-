function Shape() {}
Shape.prototype.dublicate = function() {
  console.log('Dublicate');
};

function Circle(radius) {
  this.radius = radius;
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constractor = Circle;
Circle.prototype.draw = function() {
  console.log('Draw');
};
const s = new Shape();
const c = new Circle();

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
