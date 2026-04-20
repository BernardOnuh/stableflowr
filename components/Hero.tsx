"use client";
import { useEffect, useState } from "react";

const chains = [
  { symbol:"STX", name:"Stacks",   color:"#f35201", bg:"rgba(255,85,0,.15)",    native:true  },
  { symbol:"Ξ",   name:"Ethereum", color:"#627EEA", bg:"rgba(98,126,234,.12)",  native:false },
  { symbol:"B",   name:"Base",     color:"#0052FF", bg:"rgba(0,82,255,.12)",    native:false },
  { symbol:"A",   name:"Arbitrum", color:"#28A0F0", bg:"rgba(40,160,240,.12)",  native:false },
  { symbol:"S",   name:"Solana",   color:"#9945FF", bg:"rgba(153,69,255,.12)",  native:false },
  { symbol:"P",   name:"Polygon",  color:"#8247E5", bg:"rgba(130,71,229,.12)",  native:false },
];

const codeLines = [
  [[" // Move stables, one call.", "#555"]],
  [],
  [["import", "#c084fc"],[" { flowr } ", "#F4EFE9"],["from", "#c084fc"],[" 'stableflowr'", "#fb923c"]],
  [],
  [["const", "#c084fc"],[" tx = ", "#F4EFE9"],["await", "#c084fc"],[" flowr.", "#F4EFE9"],["transfer","#FF5500"],["({","#F4EFE9"]],
  [["  from:", "#94a3b8"],[" 'stacks'","#fb923c"],[",","#F4EFE9"]],
  [["  to:  ","#94a3b8"],[" 'base'","#fb8220"],[",","#F4EFE9"]],
  [["  token:","#94a3b8"],[" 'USDC'","#fd892b"],[",","#F4EFE9"]],
  [["  amount:","#94a3b8"],[" '1000'","#fb923c"]],
  [["})", "#F4EFE9"]],
  [],
  [["// ✓ Settled 1.8s · $0 fee", "#FF5500"]],
];

export default function Hero() {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section style={{
      position:"relative", minHeight:"100vh", overflow:"hidden",
      display:"flex", flexDirection:"column", justifyContent:"center",
      padding:"clamp(80px,10vw,120px) clamp(16px,4vw,48px) clamp(48px,6vw,80px)",
    }}>
      {/* Grid */}
      <div style={{
        position:"absolute", inset:0, pointerEvents:"none",
        backgroundImage:"linear-gradient(rgba(255,85,0,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,85,0,.035) 1px,transparent 1px)",
        backgroundSize:"52px 52px",
        maskImage:"radial-gradient(ellipse 80% 70% at 40% 50%,black 5%,transparent 100%)",
        WebkitMaskImage:"radial-gradient(ellipse 80% 70% at 40% 50%,black 5%,transparent 100%)",
      }}/>
      {/* Glow */}
      <div className="float-blob" style={{
        position:"absolute", borderRadius:"50%", pointerEvents:"none",
        width:"min(580px,80vw)", height:"min(580px,80vw)",
        background:"radial-gradient(circle,rgba(255,85,0,.09) 0%,transparent 70%)",
        top:"-80px", left:"-80px",
      }}/>

      {/* Two-col on desktop */}
      <div style={{
        position:"relative", zIndex:10,
        display:"flex",
        flexDirection: isDesktop ? "row" : "column",
        alignItems: isDesktop ? "center" : "flex-start",
        gap: isDesktop ? "clamp(40px,5vw,80px)" : 0,
      }}>

        {/* LEFT */}
        <div style={{ flex:1, minWidth:0 }}>

          {/* Badge */}
          <div className="afu" style={{
            display:"inline-flex", alignItems:"center", gap:8,
            background:"rgba(255,85,0,.07)", border:"1px solid rgba(255,85,0,.2)",
            borderRadius:100, padding:"6px 14px",
            fontFamily:"JetBrains Mono,monospace", fontSize:11, color:"#FF5500", letterSpacing:"0.1em",
            marginBottom:"clamp(24px,3vw,36px)",
          }}>
            <span className="blink-dot" style={{ width:6,height:6,borderRadius:"50%",background:"#FF5500",display:"inline-block" }}/>
            STACKS ECOSYSTEM · PUBLIC BETA
          </div>

          {/* H1 */}
          <h1 className="afu1" style={{
            fontFamily:"Epilogue,sans-serif", fontWeight:900,
            fontSize:"clamp(44px,8.5vw,108px)",
            lineHeight:0.9, letterSpacing:"-0.04em",
            marginBottom:"clamp(20px,2.5vw,32px)",
          }}>
            MOVE<br/>
            <span style={{color:"#FF5500"}}>STABLES</span><br/>
            <span style={{WebkitTextStroke:"2px rgba(255,255,255,.2)",color:"transparent"}}>ANY CHAIN</span><br/>
            ONE CLICK.
          </h1>

          {/* Sub */}
          <p className="afu2" style={{
            fontSize:"clamp(14px,1.6vw,17px)", color:"#5A5A55",
            lineHeight:1.7, fontWeight:300, maxWidth:480,
            marginBottom:"clamp(24px,3vw,40px)",
          }}>
            StableFlowr is the SDK & API for cross-chain stablecoin movement.
            Built for the <span style={{color:"#F4EFE9",fontWeight:500}}>Stacks ecosystem</span> — one
            interface for USDC, USDT & DAI across every major chain.
          </p>

          {/* CTAs */}
          <div className="afu3" style={{ display:"flex", flexWrap:"wrap", gap:10, marginBottom:"clamp(32px,4vw,56px)" }}>
            <button style={{
              background:"#FF5500", border:"none", color:"#080808",
              padding:"clamp(12px,1.5vw,15px) clamp(20px,2.5vw,30px)",
              borderRadius:8, fontSize:"clamp(13px,1.2vw,15px)", fontWeight:700,
              fontFamily:"Epilogue,sans-serif", cursor:"pointer", display:"flex", alignItems:"center", gap:8,
              transition:"background .2s,transform .15s,box-shadow .2s",
            }}
            onMouseEnter={e=>{ e.currentTarget.style.background="#D94A00"; e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.boxShadow="0 8px 28px rgba(255,85,0,.28)"; }}
            onMouseLeave={e=>{ e.currentTarget.style.background="#FF5500"; e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="none"; }}>
              Get started free →
            </button>
            <button style={{
              background:"none", border:"1px solid rgba(255,255,255,.1)", color:"#F4EFE9",
              padding:"clamp(12px,1.5vw,15px) clamp(16px,2vw,24px)",
              borderRadius:8, fontSize:"clamp(13px,1.2vw,15px)",
              fontFamily:"Instrument Sans,sans-serif", cursor:"pointer", transition:"border-color .2s",
            }}
            onMouseEnter={e=>{ e.currentTarget.style.borderColor="rgba(255,85,0,.38)"; }}
            onMouseLeave={e=>{ e.currentTarget.style.borderColor="rgba(255,255,255,.1)"; }}>
              Book a demo
            </button>
            {isDesktop && (
              <button style={{
                background:"none", border:"1px solid rgba(255,255,255,.07)", color:"#5A5A55",
                padding:"clamp(12px,1.5vw,15px) clamp(14px,1.8vw,20px)",
                borderRadius:8, fontSize:13, fontFamily:"JetBrains Mono,monospace",
                cursor:"pointer", transition:"border-color .2s,color .2s",
              }}
              onMouseEnter={e=>{ e.currentTarget.style.borderColor="rgba(255,85,0,.3)"; e.currentTarget.style.color="#FF5500"; }}
              onMouseLeave={e=>{ e.currentTarget.style.borderColor="rgba(255,255,255,.07)"; e.currentTarget.style.color="#5A5A55"; }}>
                $ npm i stableflowr
              </button>
            )}
          </div>

          {/* Stats */}
          <div className="afu4" style={{
            display:"grid", gridTemplateColumns:"repeat(4,1fr)",
            borderTop:"1px solid rgba(255,255,255,.08)",
            paddingTop:"clamp(20px,2.5vw,36px)",
            gap:0,
          }}>
            {[
              {val:"12+",label:"Chains"},
              {val:"$0", label:"CCTP fees"},
              {val:"<2s",label:"Settlement"},
              {val:"1",  label:"SDK + API"},
            ].map((s,i)=>(
              <div key={i} style={{
                paddingLeft:  i>0  ? "clamp(12px,2vw,28px)" : 0,
                paddingRight: i<3  ? "clamp(12px,2vw,28px)" : 0,
                borderRight:  i<3  ? "1px solid rgba(255,255,255,.08)" : "none",
              }}>
                <div style={{
                  fontFamily:"Epilogue,sans-serif", fontWeight:900,
                  fontSize:"clamp(24px,3.5vw,42px)",
                  letterSpacing:"-0.04em", lineHeight:1, marginBottom:4,
                  color: i===0 ? "#FF5500" : "#F4EFE9",
                }}>{s.val}</div>
                <div style={{ fontSize:"clamp(10px,1vw,12px)", color:"#5A5A55", letterSpacing:"0.03em" }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Mobile chain chips */}
          {!isDesktop && (
            <div className="afu5" style={{ marginTop:"clamp(28px,4vw,40px)" }}>
              <p style={{ fontSize:10, letterSpacing:"0.12em", color:"#5A5A55", fontFamily:"JetBrains Mono,monospace", marginBottom:10 }}>SUPPORTED CHAINS</p>
              <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
                {chains.map((c,i)=>(
                  <div key={i} style={{
                    display:"flex", alignItems:"center", gap:6,
                    borderRadius:100, padding:"6px 12px",
                    background:"#101010",
                    border: c.native ? "1px solid rgba(255,85,0,.3)" : "1px solid rgba(255,255,255,.08)",
                    fontFamily:"JetBrains Mono,monospace", fontSize:12,
                    color: c.native ? "#FF5500" : "#F4EFE9",
                  }}>
                    <span style={{color:c.color, fontSize:10}}>{c.symbol}</span>
                    {c.name}
                    {c.native && <span style={{fontSize:8,background:"#FF5500",color:"#080808",padding:"1px 5px",borderRadius:3,fontWeight:700,letterSpacing:"0.06em"}}>NATIVE</span>}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* RIGHT — desktop only */}
        {isDesktop && (
          <div style={{ display:"flex", flexDirection:"column", gap:16, flexShrink:0, width:"clamp(260px,22vw,320px)" }}>
            {/* Chain pills */}
            <div className="afu5" style={{ display:"flex", flexDirection:"column", gap:8 }}>
              {chains.map((c,i)=>(
                <div key={i} style={{
                  display:"flex", alignItems:"center", gap:10,
                  background:"#101010",
                  border: c.native ? "1px solid rgba(255,85,0,.3)" : "1px solid rgba(255,255,255,.08)",
                  borderRadius:100, padding:"9px 14px",
                  fontFamily:"JetBrains Mono,monospace", fontSize:13, color:"#F4EFE9",
                  cursor:"default", transition:"border-color .2s, transform .2s",
                  boxShadow: c.native ? "0 0 14px rgba(255,85,0,.07)" : "none",
                }}
                onMouseEnter={e=>{ e.currentTarget.style.borderColor="rgba(255,85,0,.4)"; e.currentTarget.style.transform="translateX(-5px)"; }}
                onMouseLeave={e=>{ e.currentTarget.style.borderColor= c.native ? "rgba(255,85,0,.3)" : "rgba(255,255,255,.08)"; e.currentTarget.style.transform="translateX(0)"; }}>
                  <div style={{ width:24,height:24,borderRadius:"50%",background:c.bg,color:c.color,display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:700,flexShrink:0 }}>{c.symbol}</div>
                  <span style={{flex:1}}>{c.name}</span>
                  {c.native && <span style={{fontSize:8,background:"#FF5500",color:"#080808",padding:"2px 6px",borderRadius:3,fontWeight:700,letterSpacing:"0.08em"}}>NATIVE</span>}
                  <span style={{color:"#FF5500"}}>↗</span>
                </div>
              ))}
            </div>

            {/* Code block */}
            <div className="afu6" style={{
              background:"#0a0a0a", border:"1px solid rgba(255,255,255,.07)", borderRadius:12, overflow:"hidden",
              fontFamily:"JetBrains Mono,monospace",
            }}>
              <div style={{ display:"flex",alignItems:"center",justifyContent:"space-between", padding:"12px 16px", borderBottom:"1px solid rgba(255,255,255,.06)" }}>
                <div style={{display:"flex",gap:6}}>
                  {["#ff5f57","#febc2e","#28c840"].map(c=>(
                    <span key={c} style={{width:10,height:10,borderRadius:"50%",background:c,display:"inline-block"}}/>
                  ))}
                </div>
                <span style={{fontSize:10,color:"#3a3a3a"}}>stableflowr.ts</span>
              </div>
              <div style={{ padding:"16px", fontSize:11.5, lineHeight:1.85, overflowX:"auto" }}>
                {codeLines.map((line,i)=>(
                  <div key={i}>
                    <span style={{color:"#252523",marginRight:12,userSelect:"none",fontSize:10}}>{String(i+1).padStart(2)}</span>
                    {(line as [string,string][]).map(([t,c],j)=>(
                      <span key={j} style={{color:c}}>{t}</span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
