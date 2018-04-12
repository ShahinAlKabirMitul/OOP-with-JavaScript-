// Factory Function
function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log('draw');
    },
  };
}
const circle = createCircle(1);

// Constractor Functions
function Circle(radius) {
  console.log('this', this);
  (this.radius = radius),
    (this.draw = function() {
      console.log('Drow');
    });
}
const another = new Circle(1);
another.draw();
