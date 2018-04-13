let obj = { value: 10 };
function increaseObj(obj) {
  obj.value++;
}
increaseObj(obj);
console.log(obj);

let number = 10;
function increase(number) {
  number++;
}
increase(10);

let x = { value: 10 };
let y = x;
x.value = 20;

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
