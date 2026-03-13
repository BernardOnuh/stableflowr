"use client";
import { useEffect, useState } from "react";

const features = [
  { icon:"⚡", title:"SDK First",      tag:"npm i stableflowr",   desc:"One npm package. Full TypeScript support. Works with Stacks.js, ethers, viem — any wallet stack." },
  { icon:"🔌", title:"REST API",        tag:"api.stableflowr.xyz", desc:"Language-agnostic HTTP API. Signed requests, webhook callbacks, and full audit logs out of the box." },
  { icon:"🔀", title:"Smart Routing",   tag:"Best rate, always",   desc:"Auto-selects fastest & cheapest route across CCTP, Across, LayerZero. No manual config needed." },
  { icon:"🔐", title:"Non-custodial",   tag:"Your keys, always",   desc:"We never hold your funds. Transfers are signed client-side with your wallet. Pure on-chain execution." },
  { icon:"📡", title:"Stacks Native",   tag:"STX ecosystem first", desc:"Built on and for Stacks. sBTC, USDC bridging into the Bitcoin L2 — first-class support." },
  { icon:"📊", title:"Dashboard",       tag:"Real-time tracking",  desc:"Monitor transfers, volume, fees saved and route analytics from a single clean dashboard." },
];

export default function Features() {
  const [cols, setCols] = useState(1);
  useEffect(() => {
    const check = () => {
      if (window.innerWidth >= 1024) setCols(3);
      else if (window.innerWidth >= 640) setCols(2);
      else setCols(1);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section id="features" style={{
      padding:"clamp(64px,8vw,112px) clamp(16px,4vw,48px)",
      borderTop:"1px solid rgba(255,255,255,.08)",
    }}>
      {/* Label */}
      <div style={{ display:"flex", alignItems:"center", gap:16, marginBottom:"clamp(40px,5vw,64px)" }}>
        <span style={{ fontFamily:"JetBrains Mono,monospace", fontSize:11, color:"#FF5500", letterSpacing:"0.14em", whiteSpace:"nowrap" }}>01 / FEATURES</span>
        <div style={{ flex:1, height:1, background:"rgba(255,255,255,.08)" }}/>
      </div>

      {/* Header */}
      <div style={{
        display:"flex", flexDirection: cols===3 ? "row" : "column",
        justifyContent:"space-between", alignItems: cols===3 ? "flex-end" : "flex-start",
        gap:"clamp(20px,3vw,40px)", marginBottom:"clamp(40px,5vw,64px)",
      }}>
        <h2 style={{
          fontFamily:"Epilogue,sans-serif", fontWeight:900,
          fontSize:"clamp(28px,4.5vw,56px)", letterSpacing:"-0.03em", lineHeight:0.94,
          maxWidth:460,
        }}>
          EVERYTHING<br/>
          <span style={{color:"#FF5500"}}>YOU NEED.</span><br/>
          NOTHING YOU DON'T.
        </h2>
        <p style={{ color:"#5A5A55", fontSize:"clamp(13px,1.3vw,15px)", lineHeight:1.7, maxWidth:320, fontWeight:300 }}>
          StableFlowr gives you both an SDK and API — pick what fits your stack.
          Zero config to get started, full control when you need it.
        </p>
      </div>

      {/* Grid */}
      <div style={{
        display:"grid",
        gridTemplateColumns:`repeat(${cols},1fr)`,
        gap:1, background:"rgba(255,255,255,.08)",
        border:"1px solid rgba(255,255,255,.08)", borderRadius:16, overflow:"hidden",
      }}>
        {features.map((f,i)=>(
          <div key={i} style={{
            background:"#080808", padding:"clamp(24px,3vw,36px)",
            transition:"background .2s", cursor:"default",
          }}
          onMouseEnter={e=>(e.currentTarget.style.background="#0d0d0d")}
          onMouseLeave={e=>(e.currentTarget.style.background="#080808")}>
            <div style={{ fontSize:"clamp(22px,2.5vw,30px)", marginBottom:14 }}>{f.icon}</div>
            <div style={{
              display:"inline-block", background:"rgba(255,85,0,.07)",
              border:"1px solid rgba(255,85,0,.18)", borderRadius:4,
              padding:"3px 8px", fontFamily:"JetBrains Mono,monospace", fontSize:10,
              color:"#FF5500", letterSpacing:"0.07em", marginBottom:10,
            }}>{f.tag}</div>
            <h3 style={{
              fontFamily:"Epilogue,sans-serif", fontWeight:800,
              fontSize:"clamp(16px,1.6vw,20px)", letterSpacing:"-0.02em", marginBottom:10,
            }}>{f.title}</h3>
            <p style={{ color:"#5A5A55", fontSize:"clamp(13px,1.1vw,14px)", lineHeight:1.65, fontWeight:300 }}>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
