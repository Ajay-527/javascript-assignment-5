class Cylinder {
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;
  }
  getVolume() {
    return Math.PI * (this.radius * this.radius) * this.height;
  }
}
let cylinderObject = new Cylinder(15, 20);
console.log(cylinderObject.getVolume().toFixed(4));

class Sphere {
  constructor(radius) {
    this.radius = radius;
  }
  getVolume() {
    return (4 / 3) * Math.PI * (this.radius * this.radius * this.radius);
  }
}
let sphereObject = new Sphere(10);
console.log(sphereObject.getVolume().toFixed(4));

class Cone {
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;
  }
  getVolume() {
    return Math.PI * (this.radius * this.radius) * (this.height / 3);
  }
}
let coneObject = new Cone(5, 6);
console.log(coneObject.getVolume().toFixed(4));
