import Hero from "./components/Hero";
import HighLights from "./components/HighLights";
import NavBar from "./components/NavBar";
import Model from "./components/Model";
import Features from "./components/Features";
import HowItWorks from "./components/HowItworks";
import Footer from "./components/Footer";

export default function App() {
  return (
   <main className="bg-black">
    <NavBar />
    <Hero />
    <HighLights />
    <Model />
    <Features />
    <HowItWorks />
    <Footer />
   </main>
  )
}