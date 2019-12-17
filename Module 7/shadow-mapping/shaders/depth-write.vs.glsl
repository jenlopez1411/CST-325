
    attribute vec3 aVertexPosition;

    uniform mat4 uWorldMatrix;
    uniform mat4 uViewMatrix;
    uniform mat4 uProjectionMatrix;

    varying float vDepth;

    void main(void) {
        gl_Position = uProjectionMatrix * uViewMatrix * uWorldMatrix * vec4(aVertexPosition, 1.0);
        // convert clip space depth into NDC and rescale from [-1, 1] to [0, 1]
        float near = 0.0;
        float far = 1.0;
        vDepth = 0.5 * ( (far - near) * (gl_Position.z / gl_Position.w) + (far + near) );
    }