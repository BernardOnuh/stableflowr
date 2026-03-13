"use client";

const chains = ["Stacks","Ethereum","Base","Arbitrum","Optimism","Polygon","Solana","Avalanche","BSC","zkSync","Linea","Scroll"];

export default function CTA() {
  const doubled = [...chains,...chains];
  return (
    <>
      {/* Marquee */}
      <div id="chains" style={{ borderTop:"1px solid rgba(255,255,255,.08)",borderBottom:"1px solid rgba(255,255,255,.08)",padding:"18px 0",overflow:"hidden",position:"relative" }}>
        <div style={{ position:"absolute",left:0,top:0,bottom:0,width:"clamp(40px,8vw,100px)",background:"linear-gradient(90deg,#080808,transparent)",zIndex:2,pointerEvents:"none" }}/>
        <div style={{ position:"absolute",right:0,top:0,bottom:0,width:"clamp(40px,8vw,100px)",background:"linear-gradient(-90deg,#080808,transparent)",zIndex:2,pointerEvents:"none" }}/>
        <div className="marquee-run" style={{ display:"flex",gap:"clamp(28px,4vw,48px)",width:"max-content" }}>
          {doubled.map((c,i)=>(
            <span key={i} style={{
              display:"flex",alignItems:"center",gap:7,
              fontFamily:"JetBrains Mono,monospace",fontSize:"clamp(11px,1.2vw,13px)",
              color: i%chains.length===0 ? "#FF5500" : "#5A5A55", whiteSpace:"nowrap",
            }}>
              <span style={{ width:5,height:5,borderRadius:"50%",background:i%chains.length===0?"#FF5500":"#252523",display:"inline-block" }}/>
              {c}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section style={{
        position:"relative",overflow:"hidden",textAlign:"center",
        padding:"clamp(72px,10vw,140px) clamp(16px,4vw,48px)",
      }}>
        <div style={{ position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",pointerEvents:"none",
          width:"min(560px,90vw)",height:"min(560px,90vw)",borderRadius:"50%",
          background:"radial-gradient(circle,rgba(255,85,0,.07) 0%,transparent 70%)",
        }}/>

        <div style={{ position:"relative",zIndex:1,maxWidth:600,margin:"0 auto" }}>
          <div style={{
            display:"inline-flex",alignItems:"center",gap:8,
            background:"rgba(255,85,0,.07)",border:"1px solid rgba(255,85,0,.2)",
            borderRadius:100,padding:"6px 14px",
            fontFamily:"JetBrains Mono,monospace",fontSize:11,color:"#FF5500",letterSpacing:"0.1em",
            marginBottom:"clamp(24px,3vw,40px)",
          }}>
            <span className="blink-dot" style={{ width:6,height:6,borderRadius:"50%",background:"#FF5500",display:"inline-block" }}/>
            START IN MINUTES
          </div>

          <h2 style={{
            fontFamily:"Epilogue,sans-serif",fontWeight:900,
            fontSize:"clamp(48px,7.5vw,88px)",letterSpacing:"-0.04em",lineHeight:0.91,
            marginBottom:"clamp(16px,2vw,24px)",
          }}>
            READY TO<br/><span style={{color:"#FF5500"}}>FLOWR?</span>
          </h2>

          <p style={{ color:"#5A5A55",fontSize:"clamp(14px,1.5vw,16px)",lineHeight:1.7,maxWidth:400,margin:"0 auto",marginBottom:"clamp(28px,4vw,44px)",fontWeight:300 }}>
            Start moving stablecoins across chains in minutes.
            Free tier included — no credit card required.
          </p>

          <div style={{ display:"flex",flexDirection:"column",gap:12,alignItems:"center" }}>
            <div style={{ display:"flex",flexWrap:"wrap",gap:12,justifyContent:"center",width:"100%" }}>
              <button style={{
                background:"#FF5500",border:"none",color:"#080808",
                padding:"clamp(13px,1.5vw,16px) clamp(24px,3vw,36px)",
                borderRadius:8,fontSize:"clamp(14px,1.3vw,16px)",fontWeight:700,
                fontFamily:"Epilogue,sans-serif",cursor:"pointer",
                transition:"background .2s,transform .15s,box-shadow .2s",
                minWidth:"clamp(160px,40vw,220px)",
              }}
              onMouseEnter={e=>{ e.currentTarget.style.background="#D94A00"; e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.boxShadow="0 8px 32px rgba(255,85,0,.28)"; }}
              onMouseLeave={e=>{ e.currentTarget.style.background="#FF5500"; e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="none"; }}>
                Get started free →
              </button>
              <button style={{
                background:"none",border:"1px solid rgba(255,255,255,.1)",color:"#F4EFE9",
                padding:"clamp(13px,1.5vw,16px) clamp(20px,2.5vw,28px)",
                borderRadius:8,fontSize:"clamp(14px,1.3vw,16px)",
                fontFamily:"Instrument Sans,sans-serif",cursor:"pointer",
                transition:"border-color .2s",
                minWidth:"clamp(120px,30vw,180px)",
              }}
              onMouseEnter={e=>{ e.currentTarget.style.borderColor="rgba(255,85,0,.38)"; }}
              onMouseLeave={e=>{ e.currentTarget.style.borderColor="rgba(255,255,255,.1)"; }}>
                Book a demo
              </button>
            </div>

            <div style={{ display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"clamp(12px,2vw,24px)",marginTop:"clamp(24px,3vw,36px)",paddingTop:"clamp(20px,2.5vw,32px)",borderTop:"1px solid rgba(255,255,255,.08)",width:"100%" }}>
              {["✓ Free tier","✓ No credit card","✓ Open source SDK","✓ 24/7 support"].map(t=>(
                <span key={t} style={{ fontSize:"clamp(10px,1vw,12px)",color:"#5A5A55",fontFamily:"JetBrains Mono,monospace" }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
