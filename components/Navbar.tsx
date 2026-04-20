"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const links = [
  { label: "Features",   href: "#features"   },
  { label: "SDK",        href: "#sdk"         },
  { label: "API",        href: "#api"         },
  { label: "Chains",     href: "#chains"      },
  { label: "Developers", href: "#developers"  },
  { label: "Docs",       href: "#docs"        },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [open,      setOpen]      = useState(false);
  const [active,    setActive]    = useState("");
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });
  const navLinksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const ids = links.map(l => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  const handleLinkHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const container = navLinksRef.current;
    if (!container) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    setIndicator({ left: rect.left - containerRect.left, width: rect.width, opacity: 1 });
  };

  const handleNavLeave = () => {
    if (!navLinksRef.current) { setIndicator(i => ({ ...i, opacity: 0 })); return; }
    const activeEl = navLinksRef.current.querySelector(`[data-id="${active}"]`) as HTMLElement | null;
    if (activeEl) {
      const rect = activeEl.getBoundingClientRect();
      const containerRect = navLinksRef.current.getBoundingClientRect();
      setIndicator({ left: rect.left - containerRect.left, width: rect.width, opacity: 0.6 });
    } else {
      setIndicator(i => ({ ...i, opacity: 0 }));
    }
  };

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .nav-center-pill { display: none !important; }
        @media (min-width: 1024px) {
          .nav-center-pill { display: flex !important; }
        }
        .nav-right-desktop { display: none !important; }
        .nav-right-mobile  { display: flex !important; }
        @media (min-width: 640px) {
          .nav-right-desktop { display: flex !important; }
          .nav-right-mobile  { display: none !important; }
        }
        .btn-docs:hover  { color: #F4EFE9 !important; }
        .btn-demo:hover  { border-color: rgba(255,85,0,.45) !important; background: rgba(255,85,0,.06) !important; }
        .btn-start:hover { background: #D94A00 !important; transform: translateY(-1px); box-shadow: 0 6px 20px rgba(255,85,0,.3) !important; }
      `}</style>

      {/* ── MAIN NAV ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        height: "clamp(56px,7vw,66px)",
        display: "flex", alignItems: "center",
        padding: "0 clamp(16px,4vw,48px)",
        background: scrolled ? "rgba(8,8,8,0.94)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(22px)" : "none",
        transition: "background .35s, border-color .35s, backdrop-filter .35s",
      }}>
        {/* Three-column grid — columns never overlap */}
        <div style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "auto 1fr auto",
          alignItems: "center",
          gap: 8,
        }}>

          {/* Col 1: Logo */}
          <Link href="/" style={{ display:"flex", alignItems:"center", gap:10, textDecoration:"none", flexShrink:0 }}>
            <div style={{
              width:34, height:34, borderRadius:9, background:"#FF5500",
              display:"flex", alignItems:"center", justifyContent:"center",
              fontFamily:"Epilogue,sans-serif", fontWeight:900, fontSize:14, color:"#080808",
              boxShadow:"0 0 18px rgba(255,85,0,.35)", flexShrink:0,
            }}>SF</div>
            <span style={{
              fontFamily:"Epilogue,sans-serif", fontWeight:800, fontSize:17,
              color:"#F4EFE9", letterSpacing:"-0.5px", whiteSpace:"nowrap",
            }}>
              stable<span style={{ color:"#FF5500" }}>flowr</span>
            </span>
          </Link>

          {/* Col 2: Center links pill (lg+ only) */}
          <div style={{ display:"flex", justifyContent:"center", overflow:"hidden" }}>
            <div
              ref={navLinksRef}
              onMouseLeave={handleNavLeave}
              className="nav-center-pill"
              style={{
                alignItems:"center", gap:4, position:"relative",
                background: scrolled ? "rgba(255,255,255,0.04)" : "transparent",
                border: scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
                borderRadius:40, padding:"0 6px",
                transition:"background .3s, border-color .3s",
              }}
            >
              <div style={{
                position:"absolute", top:"50%", transform:"translateY(-50%)",
                left: indicator.left, width: indicator.width,
                height:30, borderRadius:20,
                background:"rgba(255,85,0,0.12)",
                border:"1px solid rgba(255,85,0,0.2)",
                transition:"left .25s cubic-bezier(.4,0,.2,1), width .2s ease, opacity .2s",
                opacity: indicator.opacity,
                pointerEvents:"none",
              }}/>
              {links.map(l => {
                const id = l.href.replace("#","");
                const isActive = active === id;
                return (
                  <a
                    key={l.label}
                    href={l.href}
                    data-id={id}
                    onMouseEnter={handleLinkHover}
                    style={{
                      textDecoration:"none",
                      color: isActive ? "#F4EFE9" : "#666660",
                      fontSize:13.5,
                      fontFamily:"Instrument Sans,sans-serif",
                      fontWeight: isActive ? 500 : 400,
                      padding:"7px 14px",
                      borderRadius:20,
                      position:"relative", zIndex:1,
                      transition:"color .2s",
                      whiteSpace:"nowrap",
                    }}
                  >{l.label}</a>
                );
              })}
            </div>
          </div>

          {/* Col 3: Right actions */}
          <div style={{ display:"flex", justifyContent:"flex-end" }}>

            {/* Desktop ≥640px */}
            <div className="nav-right-desktop" style={{ alignItems:"center", gap:8 }}>
              <a href="#docs" className="btn-docs" style={{
                textDecoration:"none", color:"#666660", fontSize:13.5,
                fontFamily:"Instrument Sans,sans-serif", padding:"7px 14px",
                borderRadius:7, transition:"color .2s", whiteSpace:"nowrap",
              }}>Docs</a>
              <div style={{ width:1, height:18, background:"rgba(255,255,255,.1)", flexShrink:0 }}/>
              <button className="btn-demo" style={{
                background:"none", border:"1px solid rgba(255,255,255,.1)", color:"#F4EFE9",
                padding:"8px 18px", borderRadius:7, fontSize:13.5,
                fontFamily:"Instrument Sans,sans-serif", cursor:"pointer",
                transition:"border-color .2s, background .2s", whiteSpace:"nowrap",
              }}>Book demo</button>
              <button className="btn-start" style={{
                background:"#FF5500", border:"none", color:"#080808",
                padding:"9px 20px", borderRadius:7, fontSize:13.5, fontWeight:700,
                fontFamily:"Epilogue,sans-serif", cursor:"pointer",
                display:"flex", alignItems:"center", gap:6,
                transition:"background .2s, transform .15s, box-shadow .2s",
                whiteSpace:"nowrap",
              }}>
                Get started <span style={{ fontSize:14 }}>→</span>
              </button>
            </div>

            {/* Mobile <640px */}
            <div className="nav-right-mobile" style={{ alignItems:"center", gap:8 }}>
              <button style={{
                background:"#FF5500", border:"none", color:"#080808",
                padding:"8px 14px", borderRadius:7, fontSize:13, fontWeight:700,
                fontFamily:"Epilogue,sans-serif", cursor:"pointer", whiteSpace:"nowrap",
              }}>Get started</button>
              <button
                onClick={() => setOpen(o => !o)}
                aria-label={open ? "Close menu" : "Open menu"}
                style={{
                  width:38, height:38, borderRadius:8, flexShrink:0,
                  background: open ? "rgba(255,85,0,.1)" : "#101010",
                  border: open ? "1px solid rgba(255,85,0,.35)" : "1px solid rgba(255,255,255,.08)",
                  display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center",
                  cursor:"pointer", padding:0,
                  transition:"background .2s, border-color .2s",
                }}>
                <span style={{ display:"block", width:16, height:1.5, background: open ? "#FF5500" : "rgba(255,255,255,.75)", transform: open ? "translateY(4px) rotate(45deg)" : "none", transition:"all .25s", marginBottom: open ? 0 : 4 }}/>
                <span style={{ display:"block", width: open ? 0 : 12, height:1.5, background:"rgba(255,255,255,.75)", transition:"width .2s", marginBottom: open ? 0 : 4 }}/>
                <span style={{ display:"block", width:16, height:1.5, background: open ? "#FF5500" : "rgba(255,255,255,.75)", transform: open ? "translateY(-4px) rotate(-45deg)" : "none", transition:"all .25s" }}/>
              </button>
            </div>
          </div>

        </div>
      </nav>

      {/* ── MOBILE MENU OVERLAY ──
          100% inline-style driven — no CSS class dependency.
          visibility keeps it out of tab order & inert when closed.
      ── */}
      <div
        aria-hidden={!open}
        style={{
          position: "fixed",
          top: "clamp(56px,7vw,66px)", left: 0, right: 0, bottom: 0,
          zIndex: 99,
          background: "#080808",
          padding: "clamp(20px,5vw,32px)",
          display: open ? "flex" : "none",
          flexDirection: "column",
          overflowY: "auto",
        }}
      >
        {/* Nav links */}
        <nav style={{ flex:1 }}>
          {links.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              onClick={()=>setOpen(false)}
              style={{
                textDecoration:"none", color:"#F4EFE9",
                fontSize:"clamp(22px,6vw,28px)", fontWeight:900,
                fontFamily:"Epilogue,sans-serif",
                padding:"clamp(14px,3vw,18px) 0",
                borderBottom:"1px solid rgba(255,255,255,.05)",
                display:"flex", alignItems:"center", justifyContent:"space-between",
                animation: open ? `fadeUp .4s ${i*0.05}s ease both` : "none",
              }}
            >
              <span>{l.label}</span>
              <span style={{
                width:32, height:32, borderRadius:"50%", flexShrink:0,
                background:"rgba(255,85,0,.1)", border:"1px solid rgba(255,85,0,.2)",
                display:"flex", alignItems:"center", justifyContent:"center",
                color:"#FF5500", fontSize:14,
              }}>→</span>
            </a>
          ))}
        </nav>

        <div style={{ display:"flex", flexDirection:"column", gap:10, paddingTop:24, borderTop:"1px solid rgba(255,255,255,.06)" }}>
          <div style={{
            background:"rgba(255,255,255,.03)", border:"1px solid rgba(255,255,255,.07)",
            borderRadius:8, padding:"10px 14px",
            display:"flex", alignItems:"center", gap:8,
            fontFamily:"JetBrains Mono,monospace", fontSize:12, color:"#444",
          }}>
            <span style={{ color:"#FF5500", opacity:.6 }}>$</span>
            <span>npm i stableflowr</span>
          </div>
          <button style={{
            background:"#FF5500",border:"none",color:"#080808",
            padding:"15px",borderRadius:8,fontSize:15,fontWeight:700,
            fontFamily:"Epilogue",cursor:"pointer",width:"100%",
            display:"flex",alignItems:"center",justifyContent:"center",gap:8,
          }}>Get started free <span>→</span></button>
          <button style={{
            background:"none",border:"1px solid rgba(255,255,255,.1)",color:"#F4EFE9",
            padding:"14px",borderRadius:8,fontSize:15,
            fontFamily:"Instrument Sans",cursor:"pointer",width:"100%",
          }}>Book a demo</button>
        </div>
      </div>
    </>
  );
}