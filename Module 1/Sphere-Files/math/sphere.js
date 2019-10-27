/*
 * An object type representing an implicit sphere.
 *
 * @param center A Vector3 object representing the position of the center of the sphere
 * @param radius A Number representing the radius of the sphere.
 */

var Sphere = function(center, radius) {
  if (!(this instanceof Sphere)) {
    console.error("Sphere constructor must be called with the new operator");
  }

  // todo - make sure center and radius are replaced with default values if and only if they
  // are invalid or undefined (i.e. center should be of type Vector3 & radius should be a Number)
  // - the default center should be the zero vector
  // - the default radius should be 1

  if (center === undefined)
  {
    center = new Vector3(0,0,0);
  }

  if (radius === undefined)
  {
    radius = 1;
  }

  if (!(center instanceof Vector3)) {
    console.error("The sphere center must be a Vector3");
  }

  if ((typeof(radius) != 'number')) {
    console.error("The radius must be a Number");
  }

  

  this.center = center;
  this.radius = radius;

 

  this.raycast = function(ray) {
    // todo determine whether the ray intersects this sphere and where

     // An object created from a literal that we will return as our result
     var result = {
      hit: false,     // should be of type Boolean
      point: null,    // should be of type Vector3
      normal: null,   // should be of type Vector3
      distance: null, // should be of type Number (scalar)
    };
   
    //    create the vector(s) needed to solve for the coefficients in the
    //    quadratic equation
    var rd = ray.direction;                             // normalized (unit vector) of ray direction
    var vs = ray.origin.clone().subtract(this.center);  // vector from ray origin to sphere center
   
    // Set up pieces of quadratic equation
    var a = rd.dot(rd);
    var b = rd.dot(vs) * 2;
    var c = vs.dot(vs) - (this.radius*this.radius); 

    //  calculate the discriminant
    var discriminant =  (b*b) - (4*a*c);
    //  use the discriminant to determine if further computation is necessary
    if ( discriminant < 0){return result}; // no points of intersection

    var t = (-1*b - Math.sqrt(discriminant)) / 2*a; // distance from ray origin to intersection with sphere
    if (t < this.radius) { return result; } // ray origin inside sphere
    
    else { // valid intersection
      var intersection = ray.origin.clone().add(rd.clone().multiplyScalar(t))
      var normal = intersection.clone().subtract(this.center);
      var normalized = normal.normalized();
      result['hit']       = true;
      result['point']     = intersection; //'a Vector3 containing the closest VALID intersection'
      result['normal']    = normalized, // 'a vector3 containing a unit length normal at the intersection point',
      result['distance']  = t; // 'a scalar containing the intersection distance from the ray origin' 
      return result;
    }
  
  }
};