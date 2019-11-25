precision mediump float;

uniform sampler2D uTexture;
uniform float uAlpha;

varying vec2 vTexcoords; // shared with vs

void main(void) {
    gl_FragColor = vec4(vTexcoords, 0.0, uAlpha);
}
