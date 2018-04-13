function Circle(radious) {
  this.radius = radious;
  let defaultLocation = { x: 0, y: 0 };
  let computeOptimumLocation = function(fator) {
    //...
  };
  this.draw = function() {
    console.log('drow');
    computeOptimumLocation(1.1);
  };
}
const circle = new Circle(10);
circle.draw();

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
