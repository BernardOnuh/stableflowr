import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StableFlowr — Move Stables Across Chains",
  description: "The SDK & API for seamless cross-chain stablecoin transfers. USDC, USDT, DAI — any chain, one click.",
  metadataBase: new URL("https://stableflowr.xyz"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
