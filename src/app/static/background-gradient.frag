#pragma glslify: noise = require('glsl-noise/simplex/3d')

uniform float time;

varying vec2 vUv;

vec3 cosineGradientColour(in float t, in vec3 a, in vec3 b) {
//   return clamp(a + b * cos(6.28318 * (c * t + d)), 0.0, 1.0);
    return mix(a, b, t);
}

void main()	{
    vec2 uv = vUv;

    vec3 colour1 = vec3(0.0, 0.027450980392156862, 0.30196078431372547);
    // vec3 colour2 = vec3(0.1411764705882353, 0.5294117647058824, 0.6392156862745098);
    vec3 colour2 = vec3(0.07058823529411765, 0.2784313725490196, 0.47058823529411764);
    // vec3 colour1 = vec3(1.0, 0.0, 0.0);
    // vec3 colour2 = vec3(0.0, 0.0, 1.0);

    for (float i = 0.0; i < 4.0; i++) {
        uv += noise(vec3(uv - i * 0.2, time + i * 32.)) * 0.2;
    }

    float colourInput = noise(vec3(uv, sin(time))) * 0.5 + 0.5;
    vec3 colour = cosineGradientColour(colourInput, colour1, colour2);

    gl_FragColor = vec4(colour, 1.0);
}