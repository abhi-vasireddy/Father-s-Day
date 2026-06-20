import { useState, useEffect } from "react";
import { Heart, Sunset, Compass, Award, Terminal, Image, Scroll, Star, ChevronDown, Check, UserCheck, Sparkles } from "lucide-react";

// Import modular components
import AmbientPlayer from "./components/AmbientPlayer";
import FathersJourney from "./components/FathersJourney";
import AchievementCards from "./components/AchievementCards";
import SoftwareTribute from "./components/SoftwareTribute";
import MemoryGallery from "./components/MemoryGallery";
import ThankYouLetter from "./components/ThankYouLetter";

export default function App() {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Generate random absolute particles for the golden sunlight aura
  const [sunParticles, setSunParticles] = useState<Array<{ id: number; left: string; top: string; delay: string; size: string }>>([]);
  // Generate random absolute stars for the night sky final tribute
  const [starPositions, setStarPositions] = useState<Array<{ id: number; left: string; top: string; delay: string; size: string }>>([]);

  useEffect(() => {
    setMounted(true);

    // Generate solar sunset/sunrise floating particles
    const generatedParticles = Array.from({ length: 28 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 80 + 10}%`,
      delay: `${Math.random() * 6}s`,
      size: `${Math.random() * 4 + 2}px`
    }));
    setSunParticles(generatedParticles);

    // Generate starry sky coordinates
    const generatedStars = Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      size: `${Math.random() * 2 + 1}px`
    }));
    setStarPositions(generatedStars);

    // Track scroll events to toggle navbar shadow/blur & verify active section highlight
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Simple active section highlights
      const sections = ["hero", "journey", "achievements", "software-tribute", "gallery", "letter", "final-tribute"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen font-sans-outfit bg-emerald-deep overflow-hidden select-none">
      
      {/* 1. Header & Sticky Glass Navigation Bar */}
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 py-4 px-6 ${
          scrolled 
            ? "bg-slate-950/75 border-b border-gold-400/20 backdrop-blur-md shadow-lg" 
            : "bg-transparent border-b border-transparent"
        }`}
        id="app-header"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => scrollToSection("hero")}>
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-gold-500 to-gold-700 p-0.5 flex items-center justify-center shadow-lg">
              <span className="text-emerald-deep font-serif-cinzel font-black text-lg select-none">VK</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-serif-cinzel text-slate-100 font-extrabold tracking-widest leading-none">
                Vijay Kumar
              </span>
              <span className="text-[9px] uppercase font-mono text-gold-400 tracking-wider">
                Father's Day Tribute
              </span>
            </div>
          </div>

          {/* Desktop Nav Actions */}
          <nav className="hidden md:flex items-center gap-1 bg-emerald-dark/40 py-1.5 px-2 rounded-full border border-gold-400/15">
            {[
              { id: "journey", label: "His Journey", icon: Compass },
              { id: "achievements", label: "Achievements", icon: Award },
              { id: "software-tribute", label: "Developer Tribute", icon: Terminal },
              { id: "gallery", label: "Memory Archives", icon: Image },
              { id: "letter", label: "Our Epistle", icon: Scroll },
            ].map((navItem) => (
              <button
                key={navItem.id}
                onClick={() => scrollToSection(navItem.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 flex items-center gap-1.5 ${
                  activeSection === navItem.id
                    ? "bg-gold-500 text-emerald-deep font-bold shadow"
                    : "text-gold-300 hover:bg-emerald-medium/30 hover:text-gold-200"
                }`}
                id={`nav-link-${navItem.id}`}
              >
                <navItem.icon className="w-3.5 h-3.5" />
                <span>{navItem.label}</span>
              </button>
            ))}
          </nav>

          {/* Father Celebration Banner badge */}
          <div className="flex items-center gap-1.5 bg-gold-400/15 py-1 px-3.5 rounded-full border border-gold-400/30">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] font-mono tracking-widest text-gold-400 font-bold uppercase">
              VK • 46 Years of Honor
            </span>
          </div>
        </div>
      </header>

      {/* 2. Hero Section (Animated Sunrise Background with Bento Grid Composition) */}
      <section 
        id="hero"
        className="relative min-h-screen py-24 md:py-32 px-6 font-sans overflow-hidden bg-gradient-to-b from-slate-950 via-emerald-deep to-emerald-dark flex items-center justify-center"
      >
        {/* Glow Layer 1: Radiant Golden Sun Globe rising from center bottom of Section */}
        <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[85vw] max-w-[1200px] aspect-square rounded-full bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.25)_0%,rgba(9,63,48,0.12)_45%,transparent_75%)] pointer-events-none filter blur-xl animate-pulse" />
        
        {/* Glow Layer 2: Radiant Sunlight Golden Horizon Beam */}
        <div className="absolute bottom-0 inset-x-0 h-[220px] bg-gradient-to-t from-gold-500/10 via-gold-400/5 to-transparent pointer-events-none" />

        {/* Ambient floating gold sunlight particles */}
        {mounted && sunParticles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-gold-400 animate-ping opacity-25"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              animationDuration: `${parseFloat(particle.delay) + 4}s`,
              animationDelay: particle.delay,
            }}
          />
        ))}

        <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-12">
          
          {/* Main Hero Bento Card (col-span-8) */}
          <div className="lg:col-span-8 rounded-3xl bento-card p-8 md:p-12 border border-white/10 Backdrop-blur-md flex flex-col justify-between relative overflow-hidden group min-h-[460px]">
            {/* Soft solar ambient glow inside card */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gold-400/5 rounded-full blur-3xl pointer-events-none group-hover:bg-gold-400/10 transition-all duration-700" />
            
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-gold-400 text-xs md:text-sm font-semibold tracking-wider font-mono uppercase bg-gold-400/10 py-2.5 px-4 rounded-full border border-white/10 w-fit">
                <Sunset className="w-4 h-4 text-gold-400 animate-spin-slow" />
                <span>A Daughter's Digital Dedication for Father's Day</span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif-cinzel font-black tracking-tight uppercase leading-none text-left">
                <span className="text-slate-100 block opacity-90">Happy</span>
                <span className="text-slate-100 block opacity-90">Father's Day</span>
                <span className="golden-text-shimmer block text-4xl md:text-6xl lg:text-7xl mt-4 font-bold border-t border-white/10 pt-4">
                  K. Vijay Kumar
                </span>
              </h1>
            </div>

            {/* Micro bento row within main card */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-6 border-t border-white/10 text-slate-300" id="hero-mini-badges">
              {[
                { label: "Dedicated Father", value: "Honor" },
                { label: "Two Bikes Owned", value: "Struggle" },
                { label: "One Premium Car", value: "Achievement" },
                { label: "Software Engineer daughter", value: "Success" }
              ].map((badge, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-gold-400/30 transition-all duration-300">
                  <span className="text-[9px] uppercase font-mono text-gold-400 font-bold tracking-widest">{badge.label}</span>
                  <span className="text-xs font-semibold text-slate-100 block mt-1">{badge.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Side Stack of Bento Cards (col-span-4) */}
          <div className="lg:col-span-4 flex flex-col gap-8 justify-between">
            {/* Insight Quote Bento Box */}
            <div className="rounded-3xl bento-card p-8 border border-white/10 background-blur-md flex flex-col justify-center relative overflow-hidden group flex-1">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-light/5 rounded-full blur-2xl pointer-events-none" />
              <p className="text-lg md:text-xl font-serif-cinzel font-light text-slate-100 leading-relaxed italic tracking-wide text-left relative z-10">
                "Before I learned how to build software, my father built my future."
              </p>
              <div className="mt-6 flex items-center gap-3 relative z-10 border-t border-white/10 pt-4">
                <span className="w-8 h-px bg-gold-400" />
                <span className="text-xs font-mono uppercase tracking-widest text-gold-400">Vijay's daughter</span>
              </div>
            </div>

            {/* Quick Metrics Metric Bento Box */}
            <div className="rounded-3xl bento-card p-8 border border-white/10 background-blur-md flex items-center justify-between relative overflow-hidden group">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-mono tracking-widest text-gold-400 font-bold">Anchored Age</span>
                <span className="text-3xl font-serif-cinzel text-slate-100 font-black mt-1">46 Years</span>
                <span className="text-[9px] font-mono text-slate-400 mt-1 uppercase">Of Silent Leadership</span>
              </div>
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gold-400 group-hover:scale-105 transition-transform duration-500 shadow-xl">
                <Heart className="w-6 h-6 fill-red-500 text-red-500 animate-pulse" />
              </div>
            </div>
          </div>

        </div>

        {/* Scroll down trigger absolute center bottom */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 select-none">
          <button
            onClick={() => scrollToSection("journey")}
            className="p-3 rounded-full border border-white/10 bg-black/40 text-gold-300 hover:text-gold-200 hover:border-gold-400/40 transition-all duration-300 shadow-2xl group hover:translate-y-1"
            title="Step into his journey"
            id="hero-scroll-trigger"
          >
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </section>

      {/* 3. Interactive Chronological Biography Timeline Panel */}
      <FathersJourney />

      {/* 4. Achievement Showcase Grid System */}
      <AchievementCards />

      {/* 5. Interactive Codified Software Engineer Terminal Tribute */}
      <SoftwareTribute />

      {/* 6. Polaroid Rotating Memory Archives */}
      <MemoryGallery />

      {/* 7. Handwritten-Style Letter Piece */}
      <ThankYouLetter />

      {/* 8. Final Starry Sky Night Grand Tribute Section */}
      <section 
        id="final-tribute"
        className="relative py-36 px-6 bg-gradient-to-b from-slate-950 to-black text-center overflow-hidden"
      >
        {/* Render shimmering starry positions */}
        {mounted && starPositions.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              animationDelay: star.delay,
              animationDuration: `${parseFloat(star.delay) + 2}s`
            }}
          />
        ))}

        {/* Cinematic deep night vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 space-y-12">
          
          <div className="space-y-6">
            <div className="w-16 h-16 rounded-full bg-gold-500/10 border border-gold-400/30 flex items-center justify-center mx-auto text-gold-400 shadow-2xl">
              <Heart className="w-8 h-8 fill-red-500 text-red-500 animate-pulse" />
            </div>

            <p className="text-xs uppercase font-mono tracking-widest text-[#93620e] font-bold">
              The Lifelong Anchoring Truth
            </p>

            <h2 className="text-4xl md:text-7xl font-serif-cinzel text-slate-100 tracking-tight leading-snug">
              "The greatest gift my father gave me was <span className="golden-text-shimmer font-black">believing</span> in me."
            </h2>
          </div>

          <div className="space-y-3.5">
            <p className="text-xl md:text-2xl font-serif-cinzel uppercase font-bold text-slate-300 tracking-wider">
              Happy Father's Day Dad ❤️
            </p>
            <p className="text-slate-500 text-xs font-mono tracking-wide max-w-sm mx-auto">
              You are the developer of my life, security, and future goals. This code is your software milestone.
            </p>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="py-3 px-8 text-xs font-semibold tracking-widest text-emerald-deep font-bold leading-normal uppercase rounded-full bg-gradient-to-r from-gold-500 to-gold-400 border border-gold-300 shadow-2xl hover:scale-105 active:scale-95 transition-all text-center"
              id="back-to-top-btn"
            >
              Replay Journey from Dawn
            </button>
          </div>

          {/* Humble cinematic bottom credit line matching strict non-over-engineered human labeling rules */}
          <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
            <span>© 2026 Father's Day — All gratitude instantiated.</span>
            <span>Made with love for K. Vijay Kumar</span>
          </div>

        </div>
      </section>

      {/* Real fully-functional Ambient Composer Audio Synth Toggle Widget */}
      <AmbientPlayer />

    </div>
  );
}
