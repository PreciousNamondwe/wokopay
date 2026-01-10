import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

export default function HomePage() {
  return (
    <>
      <Navbar/>
      <Hero />
      <Features />
      <Contact/>
      <Footer />
    </>
  );
}
