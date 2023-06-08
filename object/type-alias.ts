// Type Alias

type Point = {
  x: number;
  y: number;
};

// function makeCoordinate(point: { x: number; y: number }): {
//   x: number;
//   y: number;
// } {
//   return { x: Math.random(), y: Math.random() };
// }

function makeCoordinate(point: Point): Point {
  return { x: Math.random(), y: Math.random() };
}
