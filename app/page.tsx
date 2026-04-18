import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SdkApi from "@/components/SdkApi";
import CTA from "@/components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <SdkApi />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
