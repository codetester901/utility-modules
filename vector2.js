// 2D vector with x and y components
export default class Vector2 {
  /**
   * Constructor
   * @param {number} x
   * @param {number} y
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  
  /**
   * Sets the vector's x and y
   */
  set(x, y) {
    this.x = x;
    this.y = y;
    return this;
  }
  
  /**
   * Clones the vector
   */
  clone() {
    return new Vector2(this.x, this.y);
  }
  
  /**
   * Adds another vector's x and y to this vector
   */
  add(v) {
    this.x += v.x;
    this.y += v.y;
    return this;
  }
  
  /**
   * Subtracts another vector's x and y from this vector
   */
  sub(v) {
    this.x -= v.x;
    this.y -= v.y;
    return this;
  }
  
  /**
   * Multiplies this vector by another vector
   */
  mult(v) {
    this.x *= v.x;
    this.y *= v.y;
    return this;
  }
  
  /**
   * Returns the magnitude of the vector
   */
  magnitude() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  
  /**
   * Sets the vector's direction and multiplies by a scalar
   */
  setFromScalarAngle(scalar, angle) {
    this.x = Math.cos(angle) * scalar;
    this.y = Math.sin(angle) * scalar;
  }
}
