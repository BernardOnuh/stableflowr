"use client";
import { useEffect, useState } from "react";

const cols = [
  { heading:"Product",    items:["Features","SDK","API","Chains","Dashboard"] },
  { heading:"Developers", items:["Docs","GitHub","Changelog","Status"] },
  { heading:"Company",    items:["About","Blog","Contact"] },
];

export default function Footer() {
  const [wide, setWide] = useState(false);
  useEffect(() => {
    const check = () => setWide(window.innerWidth >= 768);
    check();
    window.addEventListener("resize",check);
    return () => window.removeEventListener("resize",check);
  }, []);

  return (
    <footer style={{ borderTop:"1px solid rgba(255,255,255,.08)", padding:"clamp(40px,6vw,64px) clamp(16px,4vw,48px) clamp(24px,3vw,36px)" }}>
      <div style={{
        display:"flex",
        flexDirection: wide ? "row" : "column",
        justifyContent:"space-between",
        gap:"clamp(32px,5vw,64px)",
        marginBottom:"clamp(32px,4vw,48px)",
      }}>
        {/* Brand */}
        <div style={{ flexShrink:0 }}>
          <div style={{ display:"flex",alignItems:"center",gap:10,marginBottom:12 }}>
            <div style={{ width:30,height:30,borderRadius:7,background:"#FF5500",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"Epilogue",fontWeight:900,fontSize:12,color:"#080808" }}>SF</div>
            <span style={{ fontFamily:"Epilogue,sans-serif",fontWeight:800,fontSize:16,color:"#F4EFE9",letterSpacing:"-0.4px" }}>
              stable<span style={{color:"#FF5500"}}>flowr</span>
            </span>
          </div>
          <p style={{ color:"#5A5A55",fontSize:13,lineHeight:1.65,maxWidth:210,fontWeight:300,marginBottom:20 }}>
            Cross-chain stablecoin movement.<br/>Built for the Stacks ecosystem.
          </p>
          <div style={{ display:"flex",gap:8 }}>
            {["𝕏","GH","DC"].map(s=>(
              <button key={s} style={{
                width:34,height:34,borderRadius:7,
                background:"#101010",border:"1px solid rgba(255,255,255,.08)",
                color:"#5A5A55",fontSize:11,fontFamily:"JetBrains Mono,monospace",
                cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",
                transition:"border-color .2s,color .2s",
              }}
              onMouseEnter={e=>{ e.currentTarget.style.borderColor="rgba(255,85,0,.3)"; e.currentTarget.style.color="#FF5500"; }}
              onMouseLeave={e=>{ e.currentTarget.style.borderColor="rgba(255,255,255,.08)"; e.currentTarget.style.color="#5A5A55"; }}>
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Links */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"clamp(24px,4vw,48px)" }}>
          {cols.map(col=>(
            <div key={col.heading}>
              <div style={{ fontFamily:"Epilogue,sans-serif",fontWeight:700,fontSize:11,color:"#F4EFE9",letterSpacing:"0.08em",marginBottom:14 }}>
                {col.heading}
              </div>
              <div style={{ display:"flex",flexDirection:"column",gap:10 }}>
                {col.items.map(item=>(
                  <a key={item} href="#" style={{
                    textDecoration:"none",color:"#5A5A55",fontSize:13,
                    fontFamily:"Instrument Sans,sans-serif",transition:"color .2s",
                  }}
                  onMouseEnter={e=>(e.currentTarget.style.color="#F4EFE9")}
                  onMouseLeave={e=>(e.currentTarget.style.color="#5A5A55")}>
                    {item}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div style={{
        display:"flex",
        flexDirection: wide ? "row" : "column",
        alignItems: wide ? "center" : "flex-start",
        justifyContent:"space-between",
        gap:12,
        paddingTop:"clamp(16px,2vw,24px)",
        borderTop:"1px solid rgba(255,255,255,.08)",
      }}>
        <span style={{ fontSize:11,color:"#333330",fontFamily:"JetBrains Mono,monospace" }}>
          © 2025 stableflowr.xyz
        </span>
        <div style={{ display:"flex",flexWrap:"wrap",alignItems:"center",gap:"clamp(12px,2vw,20px)" }}>
          {["Privacy","Terms"].map(l=>(
            <a key={l} href="#" style={{ textDecoration:"none",fontSize:12,color:"#5A5A55",fontFamily:"Instrument Sans,sans-serif",transition:"color .2s" }}
            onMouseEnter={e=>(e.currentTarget.style.color="#F4EFE9")}
            onMouseLeave={e=>(e.currentTarget.style.color="#5A5A55")}>{l}</a>
          ))}
          <span style={{ display:"flex",alignItems:"center",gap:6,fontSize:11,color:"#3a3a3a",fontFamily:"JetBrains Mono,monospace" }}>
            <span className="blink-dot" style={{ width:5,height:5,borderRadius:"50%",background:"#28c840",display:"inline-block" }}/>
            All systems operational
          </span>
        </div>
      </div>
    </footer>
  );
}
