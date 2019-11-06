/*
 * An object type representing an implicit sphere.
 *
 * @param center A Vector3 object representing the position of the center of the sphere
 * @param radius A Number representing the radius of the sphere.
 */

var Sphere = function(center, radius, color) {
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

  if (color === undefined)
  {
    color = new Vector3(1,1,1);
  }
  if (!(center instanceof Vector3)) {
    console.error("The sphere center must be a Vector3");
  }

  if ((typeof(radius) != 'number')) {
    console.error("The radius must be a Number");
  }

  this.center = center;
  this.radius = radius;
  this.color = color;

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
    var rd = ray.direction;                             // normalized (unit vector) of ray direction -- d hat
    var vs = ray.origin.clone().subtract(this.center);  // vector from ray origin to sphere center -- (o - c)
   
    // Set up pieces of quadratic equation
    // Using simplified form of quadratic equation since distance vector is a unit vectir
    // Per https://en.wikipedia.org/wiki/Line–sphere_intersection
    var b = rd.dot(vs);
    var c = vs.dot(vs) - (this.radius*this.radius); 

    //  calculate the discriminant and use to determine if further computation is necessary
    var discriminant =  (b*b) - c;
    //  distance from ray origin to intersection with sphere
    var alpha = (-1*b - Math.sqrt(discriminant)); 

   
    // If discriminant < 0, there are no points of intersection
    // If alpha < 0, the point of intersection behind the direction of the array
    // If c < 0, the ray is inside the sphere
    if ( discriminant < 0 || alpha < 0 || c < 0 ){return result;}
    else { // valid intersection
      var intersection = ray.origin.clone().add(rd.clone().multiplyScalar(alpha))
      var normal = intersection.clone().subtract(this.center);
      var normalized = normal.normalized();
      result['hit']       = true;
      result['point']     = intersection; //'a Vector3 containing the closest VALID intersection'
      result['normal']    = normalized, // 'a vector3 containing a unit length normal at the intersection point',
      result['distance']  = alpha; // 'a scalar containing the intersection distance from the ray origin' 
      return result;
    }
  
  }
};