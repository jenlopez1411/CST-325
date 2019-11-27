# CST 325: Graphics Programming
## Course description
This course teaches the students the fundamentals of game programming and skills needed for game development, including GPU programming, matrix and quaternion algebra for physics calculation, animation, lighting and basics of implementing 3D models into a framework. (Prereq: CST 238 and MATH 130 with a C- or better)

**Units:4**

## Projects

### Module 1: [Vector Operations](https://github.com/kazemicode/CST-325/tree/master/Module%201)
### Module 2: [Ray Tracing](https://github.com/kazemicode/CST-325/tree/master/Module%202)
### Module 3: [Matrix Operations](https://github.com/kazemicode/CST-325/tree/master/Module%203/Matrix-Files)
### Module 4: [The Rasterization Pipeline](https://github.com/kazemicode/CST-325/tree/master/Module%204/Intro-to-WebGL)

In this module, we were introduced to the WebGL API and the rasterization pipeline. The main objective of this program was to render a triangle, using the position of each of it's three vertices to calculate the interpolated color values of its fragments. We also animated the triangle about the Y axis by varying the Y axis as a function of time.
![Rotating triangle](https://www.kazemicode.org/blog/wp-content/uploads/2019/11/ezgif-6-6608a3edf6a5.gif)

The extension activity this week was to animate the colors based on time. To do this, we needed to add another uniform float (for time) to our fragment shader, which could then receive an incremented time variable from our program. Here's a cool scrolling effect achieved with the [`fract`](https://www.khronos.org/registry/OpenGL-Refpages/gl4/html/fract.xhtml) GLSL shader function.
![Scrolling colors](https://www.kazemicode.org/blog/wp-content/uploads/2019/11/ezgif.com-video-to-gif-2.gif)

### Module 5: [Texturing and Transparency](https://github.com/kazemicode/CST-325/tree/master/Module%205)

Using WebGL, the primary goal here was to render textures and transparency. Initially, we used the GLSL shader function [`texture2D`](https://thebookofshaders.com/glossary/?search=texture2D) to set the color of our plane based on sampling a texture. We then added three sphere objects and implemented the painter's algorithm to render them with a realistic semitransparency effect.
![First attempt](https://www.kazemicode.org/blog/wp-content/uploads/2019/11/ezgif.com-video-to-gif.gif)

As an added bonus, we were challenged to animate our texture as well as to sample and blend multiple textures. Below you can see the result of adding a second texture (bunny) to color our plane:
![Bonus](https://www.kazemicode.org/blog/wp-content/uploads/2019/11/ezgif.com-video-to-gif-1.gif)

### Module 6: Illumination
### Module 7: Shadows
### Module 8: Final Project

**Sources consulted:**
* WebGL Shaders and GLSL ([webglfundamentals.org](https://webglfundamentals.org/webgl/lessons/webgl-shaders-and-glsl.html))
* MDN web docs ([developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/texParameter))
* *WebGL Programming Guide*: Ch. 5 Using Colors and Texture Images ([learning.oreilly.com](https://learning.oreilly.com/library/view/webgl-programming-guide/9780133364903/ch05.html)) 



