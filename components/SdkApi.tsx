"use client";
import { useState, useEffect } from "react";

const SDK_LINES: [string,string][][] = [
  [[" // Stablecoin transfer, one call.", "#555"]],
  [],
  [["import"," #c084fc"],[" { flowr } ","#F4EFE9"],["from","#c084fc"],[" 'stableflowr'","#fb923c"]],
  [],
  [["const","#c084fc"],[" client = flowr({","#F4EFE9"]],
  [["  apiKey: ","#94a3b8"],["process.env.FLOWR_KEY","#fb923c"]],
  [["})","#F4EFE9"]],
  [],
  [["const","#c084fc"],[" tx = ","#F4EFE9"],["await","#c084fc"],[" client.","#F4EFE9"],["transfer","#FF5500"],["({","#F4EFE9"]],
  [["  from: ","#94a3b8"],["{ chain: ","#F4EFE9"],["'stacks'","#fb923c"],[" },","#F4EFE9"]],
  [["  to:   ","#94a3b8"],["{ chain: ","#F4EFE9"],["'base'","#fb923c"],[" },","#F4EFE9"]],
  [["  token: ","#94a3b8"],["'USDC'","#fb923c"],[",  amount: ","#F4EFE9"],["'1000'","#fb923c"]],
  [["})", "#F4EFE9"]],
  [],
  [["// ✓ Settled 1.8s · $./cycle-stableflowr.sh fee","#FF5500"]],
];

const API_CODE = `curl -X POST https://api.stableflowr.xyz/v1/transfer \\
  -H "Authorization: Bearer YOUR_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "from":      { "chain": "solana", "token": "USDC" },
    "to":        { "chain": "arbitrum", "token": "USDC" },
    "amount":    "800",
    "recipient": "0xabcd...def"
  }'

# Response
{
  "txHash":  "0x3f9a...",
  "status":  "settled",
  "feePaid": "0.00",
  "timeMs":  1640
}`;

function CodeHeader({ label, sub }: { label: string; sub: string }) {
  return (
    <div style={{ display:"flex",alignItems:"center",justifyContent:"space-between",padding:"13px 18px",borderBottom:"1px solid rgba(255,255,255,.06)" }}>
      <div style={{ display:"flex",alignItems:"center",gap:10 }}>
        <span style={{ background:"rgba(255,85,0,.08)",border:"1px solid rgba(255,85,0,.18)",borderRadius:5,padding:"3px 9px",fontFamily:"JetBrains Mono,monospace",fontSize:10,color:"#FF5500",letterSpacing:"0.06em" }}>{label}</span>
        <span style={{ fontSize:12,color:"#5A5A55",fontFamily:"Instrument Sans,sans-serif" }}>{sub}</span>
      </div>
      <div style={{ display:"flex",gap:5 }}>
        {["#ff5f57","#febc2e","#28c840"].map(c=>(
          <span key={c} style={{ width:10,height:10,borderRadius:"50%",background:c,display:"inline-block" }}/>
        ))}
      </div>
    </div>
  );
}

export default function SdkApi() {
  const [tab, setTab] = useState<"sdk"|"api">("sdk");
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const panelStyle: React.CSSProperties = {
    background:"#0a0a0a", border:"1px solid rgba(255,255,255,.07)",
    borderRadius:14, overflow:"hidden", fontFamily:"JetBrains Mono,monospace",
    display:"flex", flexDirection:"column",
  };

  return (
    <section id="sdk" style={{
      padding:"clamp(64px,8vw,112px) clamp(16px,4vw,48px)",
      borderTop:"1px solid rgba(255,255,255,.08)",
    }}>
      {/* Label */}
      <div style={{ display:"flex",alignItems:"center",gap:16,marginBottom:"clamp(40px,5vw,64px)" }}>
        <span style={{ fontFamily:"JetBrains Mono,monospace",fontSize:11,color:"#FF5500",letterSpacing:"0.14em",whiteSpace:"nowrap" }}>02 / SDK & API</span>
        <div style={{ flex:1,height:1,background:"rgba(255,255,255,.08)" }}/>
      </div>

      <div style={{
        display:"flex", flexDirection: isDesktop ? "row" : "column",
        justifyContent:"space-between", alignItems: isDesktop ? "flex-end" : "flex-start",
        gap:"clamp(16px,3vw,40px)", marginBottom:"clamp(36px,5vw,56px)",
      }}>
        <h2 style={{ fontFamily:"Epilogue,sans-serif",fontWeight:900,fontSize:"clamp(28px,4.5vw,56px)",letterSpacing:"-0.03em",lineHeight:0.94 }}>
          TWO WAYS TO<br/><span style={{color:"#FF5500"}}>INTEGRATE.</span>
        </h2>
        <p style={{ color:"#5A5A55",fontSize:"clamp(13px,1.3vw,15px)",lineHeight:1.7,maxWidth:320,fontWeight:300 }}>
          TypeScript SDK for seamless integration, or hit our REST API from any language or platform.
        </p>
      </div>

      {/* Mobile tab switcher */}
      {!isDesktop && (
        <div style={{ display:"flex",borderRadius:10,overflow:"hidden",border:"1px solid rgba(255,255,255,.08)",marginBottom:16,background:"#101010" }}>
          {(["sdk","api"] as const).map(t=>(
            <button key={t} onClick={()=>setTab(t)} style={{
              flex:1, padding:"12px", fontSize:14, fontWeight:700,
              fontFamily:"Epilogue,sans-serif", cursor:"pointer", border:"none",
              background: tab===t ? "#FF5500" : "transparent",
              color: tab===t ? "#080808" : "#5A5A55",
              transition:"background .2s, color .2s",
            }}>{t==="sdk" ? "TypeScript SDK" : "REST API"}</button>
          ))}
        </div>
      )}

      {/* Panels */}
      <div style={{ display:"grid", gridTemplateColumns: isDesktop ? "1fr 1fr" : "1fr", gap:16 }}>

        {/* SDK */}
        {(isDesktop || tab==="sdk") && (
          <div style={panelStyle}>
            <CodeHeader label="SDK" sub="TypeScript / JavaScript"/>
            <div style={{ padding:"clamp(14px,2vw,22px)",fontSize:"clamp(11px,1.1vw,12.5px)",lineHeight:1.85,flex:1,overflowX:"auto" }}>
              {SDK_LINES.map((line,i)=>(
                <div key={i}>
                  <span style={{ color:"#222",marginRight:12,userSelect:"none",fontSize:10 }}>{String(i+1).padStart(2)}</span>
                  {line.map(([t,c],j)=>(<span key={j} style={{color:c}}>{t}</span>))}
                </div>
              ))}
            </div>
            <div style={{ padding:"12px 16px",borderTop:"1px solid rgba(255,255,255,.06)",display:"flex",flexWrap:"wrap",gap:10 }}>
              <button style={{ background:"#FF5500",border:"none",color:"#080808",padding:"9px 18px",borderRadius:7,fontSize:13,fontWeight:700,fontFamily:"Epilogue",cursor:"pointer" }}>SDK Docs →</button>
              <button style={{ background:"none",border:"1px solid rgba(255,255,255,.08)",color:"#5A5A55",padding:"9px 14px",borderRadius:7,fontSize:12,fontFamily:"JetBrains Mono,monospace",cursor:"pointer" }}>npm i stableflowr</button>
            </div>
          </div>
        )}

        {/* API */}
        {(isDesktop || tab==="api") && (
          <div style={panelStyle}>
            <CodeHeader label="REST API" sub="Any language"/>
            <div style={{ padding:"clamp(14px,2vw,22px)",fontSize:"clamp(11px,1.1vw,12.5px)",lineHeight:1.85,color:"#888",whiteSpace:"pre",overflowX:"auto",flex:1 }}>
              {API_CODE}
            </div>
            <div style={{ padding:"12px 16px",borderTop:"1px solid rgba(255,255,255,.06)",display:"flex",flexWrap:"wrap",gap:10 }}>
              <button style={{ background:"#FF5500",border:"none",color:"#080808",padding:"9px 18px",borderRadius:7,fontSize:13,fontWeight:700,fontFamily:"Epilogue",cursor:"pointer" }}>API Reference →</button>
              <button style={{ background:"none",border:"1px solid rgba(255,255,255,.1)",color:"#F4EFE9",padding:"9px 14px",borderRadius:7,fontSize:13,fontFamily:"Instrument Sans,sans-serif",cursor:"pointer" }}>Get API key</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
