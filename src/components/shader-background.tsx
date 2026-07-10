"use client";

import { useEffect, useRef } from "react";

const VERTEX_SRC = "attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}";

const FRAGMENT_SRC = `
precision mediump float;
uniform vec2 u_res;
uniform float u_time;
float band(float x,float c,float w){float d=(x-c)/w;return exp(-d*d);}
void main(){
  vec2 uv = gl_FragCoord.xy / u_res;
  float t = u_time*0.12;
  vec3 base = mix(vec3(0.976,0.988,0.984), vec3(0.925,0.965,0.955), uv.y);
  float x = uv.x + (1.0-uv.y)*(-0.35);
  float topFade = pow(uv.y,1.8);
  vec3 tealGlow = vec3(0.60,0.86,0.80);
  vec3 tealDeep = vec3(0.35,0.72,0.66);
  float r = 0.0;
  r += 0.85*band(x, 0.30 + 0.06*sin(t*1.3), 0.055 + 0.015*sin(t*0.7));
  r += 0.55*band(x, 0.44 + 0.05*sin(t*0.9+2.0), 0.10);
  r += 0.40*band(x, 0.62 + 0.07*sin(t*1.1+4.0), 0.16);
  r += 0.30*band(x, 0.16 + 0.04*sin(t*0.8+1.0), 0.09);
  r += 0.25*band(x, 0.85 + 0.05*sin(t*1.4+3.0), 0.14);
  float shimmer = 0.5+0.5*sin(u_time*0.4 + uv.x*6.0);
  vec3 col = base + tealGlow*r*topFade*0.32 + tealDeep*r*r*topFade*0.16*(0.7+0.3*shimmer);
  float vg = smoothstep(1.35,0.35,distance(uv,vec2(0.5,0.55)));
  col *= mix(0.94,1.0,vg);
  col = mix(col, vec3(1.0), 0.22);
  gl_FragColor = vec4(col,1.0);
}`;

export function ShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl");
    if (!gl) {
      canvas.style.display = "none";
      return;
    }

    function compile(type: number, src: string) {
      const shader = gl!.createShader(type)!;
      gl!.shaderSource(shader, src);
      gl!.compileShader(shader);
      return shader;
    }

    const program = gl.createProgram()!;
    gl.attachShader(program, compile(gl.VERTEX_SHADER, VERTEX_SRC));
    gl.attachShader(program, compile(gl.FRAGMENT_SHADER, FRAGMENT_SRC));
    gl.linkProgram(program);
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const posLoc = gl.getAttribLocation(program, "p");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(program, "u_res");
    const uTime = gl.getUniformLocation(program, "u_time");

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = canvas!.clientWidth * dpr;
      canvas!.height = canvas!.clientHeight * dpr;
      gl!.viewport(0, 0, canvas!.width, canvas!.height);
    }
    window.addEventListener("resize", resize);
    resize();

    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    let rafId = 0;
    function frame(t: number) {
      gl!.uniform2f(uRes, canvas!.width, canvas!.height);
      gl!.uniform1f(uTime, reduceMotion ? 0 : t * 0.001);
      gl!.drawArrays(gl!.TRIANGLES, 0, 3);
      if (!reduceMotion) rafId = requestAnimationFrame(frame);
    }
    rafId = requestAnimationFrame(frame);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div className="aurora-fallback fixed inset-0 -z-20" />
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="fixed inset-0 -z-10 h-screen w-screen"
      />
      <div className="hatch-overlay pointer-events-none fixed inset-0 -z-10" aria-hidden="true" />
      <div className="grain-overlay pointer-events-none fixed inset-0 z-40" aria-hidden="true" />
    </>
  );
}
