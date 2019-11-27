# CST 325: Graphics Programming
## Course description
This course teaches the students the fundamentals of game programming and skills needed for game development, including GPU programming, matrix and quaternion algebra for physics calculation, animation, lighting and basics of implementing 3D models into a framework. (Prereq: CST 238 and MATH 130 with a C- or better)

**Units:4**

## Projects
Note: All projects completed in collaboration with [@nwarcord](https://github.com/nwarcord/)

### Module 1: [Vector Operations](https://github.com/kazemicode/CST-325/tree/master/Module%201)

This week we covered vectors, operations on vectors, and how to convert from a vector to a scalar. We also learned how to find the closest point of intersection of a (unit) ray and a sphere, given the distance vector of the ray, the ray’s origin, the sphere’s radius, and the sphere’s center vector. This can be done by using the quadratic formula (after some rearranging of terms to get the equation into a standard form, we can identify each component–a, b, and c).

However, there are cases that we need to catch: when the ray’s point of intersection is opposite the ray’s direction (the result of the quadratic is negative), when the c component of the quadratic is negative (this means that the magnitude of the vector from the ray origin to the sphere center is LESS THAN the radius. In other words, the ray is INSIDE the sphere), and when the discriminant is negative (there are no points of intersection). These three cases should be caught to yield no result.

In our first programming assignment, we implemented a Vector3 class and a Sphere class in order to calculate the nearest points of intersection between a given ray and a sphere (and to catch instances that were invalid). These classes will be used next week when we implement ray tracing on objects in a 3D scene.

**Sources consulted:**
* Line-sphere Intersection ([wikipedia.org](https://en.wikipedia.org/wiki/Line–sphere_intersection))
* *3D Math Primer for Graphics and Game Development*: Chs.  1-2 ([learning.oreilly.com](https://learning.oreilly.com/library/view/3d-math-primer/9781439869819/K13210_C004.xhtml)) 
* 3BLUE1BROWN Essence of Linear Algebra ([YouTube](https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab))

### Module 2: [Ray Tracing](https://github.com/kazemicode/CST-325/tree/master/Module%202)

Using HTML5's Canvas element and vanilla JavaScript, we implemented ray tracing to create a 3D scene with depth, lighting, and shading. Since we are building visual abstractions, it is always helpful to draw out what the scene should look like in order to determine the correct values to use. For example, when setting up the Cornell Box with five planes representing three walls, a floor, and a ceiling, it was helpful to diagram this with respect to an x, y, z axis to determine the normal vector (the direction each plane would be facing) and a valid point that falls within each plane:
![Cornell box](https://www.kazemicode.org/blog/wp-content/uploads/2019/11/ezgif-6-c23d17f93584.gif)

### Module 3: [Matrix Operations](https://github.com/kazemicode/CST-325/tree/master/Module%203/Matrix-Files)

This module focused on matrix operations, especially with respect to 3×3 and 4×4 square matrices. We implemented functions that would compute matrix by matrix multiplication (only valid if the first matrix is r x n and the second matrix is n x c), vector by matrix multiplication (focusing on row vectors, which must be on the righthand side), as well as calculating the determinant, the inverse and transposition of a given 3×3 or 4×4 matrix. These functions will be necessary for when we use matrices to represent world, model, and view spaces in our subsequent assignments using WebGL.

**Sources consulted:**
* Matrix Multiplication ([wikipedia.org](https://en.wikipedia.org/wiki/Matrix_multiplication#Notation))
* Matrix Algebra: Inverse 3x3 ([euclideanspace.com](http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/threeD/))
* *3D Math Primer for Graphics and Game Development*: Chs. 4-6 ([learning.oreilly.com](https://learning.oreilly.com/library/view/3d-math-primer/9781439869819/K13210_C004.xhtml)) 
* 3BLUE1BROWN Essence of Linear Algebra ([YouTube](https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab))

### Module 4: [The Rasterization Pipeline](https://github.com/kazemicode/CST-325/tree/master/Module%204/Intro-to-WebGL)

**Sources consulted:**
* WebGL Shaders and GLSL ([webglfundamentals.org](https://webglfundamentals.org/webgl/lessons/webgl-shaders-and-glsl.html))
* MDN web docs ([developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/texParameter))
* *WebGL Programming Guide*: Chs. 1-5 ([learning.oreilly.com](https://learning.oreilly.com/library/view/webgl-programming-guide/9780133364903/ch05.html)) 

In this module, we were introduced to the WebGL API and the rasterization pipeline. The main objective of this program was to render a triangle, using the position of each of it's three vertices to calculate the interpolated color values of its fragments. We also animated the triangle about the Y axis by varying the Y axis as a function of time.
![Rotating triangle](https://www.kazemicode.org/blog/wp-content/uploads/2019/11/ezgif-6-6608a3edf6a5.gif)

The extension activity this week was to animate the colors based on time. To do this, we needed to add another uniform float (for time) to our fragment shader, which could then receive an incremented time variable from our program. Here's a cool scrolling effect achieved with the [`fract`](https://www.khronos.org/registry/OpenGL-Refpages/gl4/html/fract.xhtml) GLSL shader function.
![Scrolling colors](https://www.kazemicode.org/blog/wp-content/uploads/2019/11/ezgif.com-video-to-gif-2.gif)

**Sources consulted:**
* WebGL Shaders and GLSL ([webglfundamentals.org](https://webglfundamentals.org/webgl/lessons/webgl-shaders-and-glsl.html))
* MDN web docs ([developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/texParameter))
* *WebGL Programming Guide*: Chs. 1-5 ([learning.oreilly.com](https://learning.oreilly.com/library/view/webgl-programming-guide/9780133364903/ch05.html)) 

### Module 5: [Texturing and Transparency](https://github.com/kazemicode/CST-325/tree/master/Module%205)

Using WebGL, the primary goal here was to render textures and transparency. Initially, we used the GLSL shader function [`texture2D`](https://thebookofshaders.com/glossary/?search=texture2D) to set the color of our plane based on sampling a texture. We then added three sphere objects and implemented the painter's algorithm to render them with a realistic semitransparency effect.
![First attempt](https://www.kazemicode.org/blog/wp-content/uploads/2019/11/ezgif.com-video-to-gif.gif)

As an added bonus, we were challenged to animate our texture as well as to sample and blend multiple textures. Below you can see the result of adding a second texture (bunny) to color our plane:
![Bonus](https://www.kazemicode.org/blog/wp-content/uploads/2019/11/ezgif.com-video-to-gif-1.gif)

**Sources consulted:**
* WebGL Shaders and GLSL ([webglfundamentals.org](https://webglfundamentals.org/webgl/lessons/webgl-shaders-and-glsl.html))
* MDN web docs ([developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/texParameter))
* *WebGL Programming Guide*: Ch. 5 Using Colors and Texture Images ([learning.oreilly.com](https://learning.oreilly.com/library/view/webgl-programming-guide/9780133364903/ch05.html)) 

### Module 6: Illumination
### Module 7: Shadows
### Module 8: Final Project





