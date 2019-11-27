# CST 325: Graphics Programming
## Course description
This course teaches the students the fundamentals of game programming and skills needed for game development, including GPU programming, matrix and quaternion algebra for physics calculation, animation, lighting and basics of implementing 3D models into a framework. (Prereq: CST 238 and MATH 130 with a C- or better)

**Units:4**

[CSUMB Catalog](https://csumb.edu/course/cst/325)

- [x] Module 1: [Vector Operations](https://github.com/kazemicode/CST-325/tree/master/Module%201)
- [x] Module 2: [Ray Tracing](https://github.com/kazemicode/CST-325/tree/master/Module%202)
- [x] Module 3: [Matrix Operations](https://github.com/kazemicode/CST-325/tree/master/Module%203/Matrix-Files)
- [x] Module 4: [The Rasterization Pipeline](https://github.com/kazemicode/CST-325/tree/master/Module%204/Intro-to-WebGL)
- [x] Module 5: [Texturing and Transparency](https://github.com/kazemicode/CST-325/tree/master/Module%205)

Using WebGL, the primary goal here was to render textures and transparency. Initially, we used the GLSL shader function texture2D to set the color of our plane based on sampling a texture. We then added three sphere objects and utiize the painter's algorithm to render them with a realistic semitransparency effect.
![First attempt](https://www.kazemicode.org/blog/wp-content/uploads/2019/11/ezgif.com-video-to-gif.gif)

As an added bonus, we were challenged to animate our texture as well as to sample and blend multiple textures. Below you can see the result of adding a second texture (bunny) to color our plane:
![Bonus](https://www.kazemicode.org/blog/wp-content/uploads/2019/11/ezgif.com-video-to-gif-1.gif)

- [ ] Module 6: Illumination
- [ ] Module 7: Shadows
