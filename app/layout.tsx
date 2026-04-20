import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StableFlowr — Move Stables Across Chains",
  description: "The SDK & API for seamless cross-chain stablecoin transfers. USDC, USDT, DAI, EUSD, CNGN — any chain, one click.",
  metadataBase: new URL("https://stableflowr.xyz"),
  other: {
    "talentapp:project_verification": "b96dafecf556808d87386e1cd03f45fff24e367b998fbe52896ffde7038a30260aaf818e7ee7ee28a4d912d2b3d4160284d35f1e52c401076b2bda7d002ca00c",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}