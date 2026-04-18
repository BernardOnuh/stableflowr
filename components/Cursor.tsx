"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  let mx = 0, my = 0, rx = 0, ry = 0;

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      if (dot.current) { dot.current.style.left = mx+"px"; dot.current.style.top = my+"px"; }
    };
    document.addEventListener("mousemove", onMove);
    
    const tick = () => {
      rx += (mx-rx)*0.11; ry += (my-ry)*0.11;
      if (ring.current) { ring.current.style.left = rx+"px"; ring.current.style.top = ry+"px"; }
      requestAnimationFrame(tick);
    };
    tick();
    const els = document.querySelectorAll("a,button,[data-h]");
    els.forEach(el => {
      el.addEventListener("mouseenter", () => { dot.current?.classList.add("big"); ring.current?.classList.add("big"); });
      el.addEventListener("mouseleave", () => { dot.current?.classList.remove("big"); ring.current?.classList.remove("big"); });
    });
    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  return (<><div ref={dot} className="sf-cursor"/><div ref={ring} className="sf-ring"/></>);
}
