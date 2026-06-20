import { useState, useEffect, useRef } from "react";
import { PlayCircle, ShieldCheck, Terminal, Heart, RefreshCw } from "lucide-react";

export default function SoftwareTribute() {
  const [typedLines, setTypedLines] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showReplay, setShowReplay] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const fullScript = [
    { text: "guest@engineering-student:~$ who_is_my_real_hero", speed: 60, pause: 800 },
    { text: "⚡ querying local database of lifelong guides...", speed: 30, pause: 600 },
    { text: "🔍 Match Found: 1 Absolute Champion.", speed: 20, pause: 800 },
    { text: "--------------------------------------------------", speed: 10, pause: 400 },
    { text: "✨ Name:        K. Vijay Kumar", speed: 40, pause: 500 },
    { text: "✨ Age:         46", speed: 40, pause: 500 },
    { text: "✨ Role:        Father, Guardian, & Chief Provider", speed: 40, pause: 600 },
    { text: "✨ Achievements: Owning 2 bikes, 1 car, & building an engineer's future", speed: 35, pause: 800 },
    { text: "✨ Status:      My Greatest Inspiration ❤️", speed: 50, pause: 1200 },
    { text: "--------------------------------------------------", speed: 10, pause: 400 },
    { text: "🎉 Execution successful. Life foundations verified.", speed: 20, pause: 0 }
  ];

  const runAnimation = () => {
    setTypedLines([]);
    setIsTyping(true);
    setShowReplay(false);

    let currentLineIndex = 0;
    let currentCharIndex = 0;
    let currentText = "";

    const typeChar = () => {
      if (currentLineIndex >= fullScript.length) {
        setIsTyping(false);
        setShowReplay(true);
        return;
      }

      const currentLine = fullScript[currentLineIndex];
      
      if (currentCharIndex < currentLine.text.length) {
        currentText += currentLine.text[currentCharIndex];
        
        // Append current partial line to displayed output
        setTypedLines((prev) => {
          const next = [...prev];
          if (next.length <= currentLineIndex) {
            next.push(currentText);
          } else {
            next[currentLineIndex] = currentText;
          }
          return next;
        });

        currentCharIndex++;
        setTimeout(typeChar, currentLine.speed);
      } else {
        // Line finished, wait for pausing duration then proceed
        setTimeout(() => {
          currentLineIndex++;
          currentCharIndex = 0;
          currentText = "";
          typeChar();
        }, currentLine.pause);
      }
    };

    // Begin
    setTimeout(typeChar, 300);
  };

  useEffect(() => {
    // Start animation automatically when scrolled into viewport
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !isTyping && typedLines.length === 0) {
          runAnimation();
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-[#011e17] to-emerald-deep" 
      id="software-tribute"
    >
      {/* Soft warm-green background blur to resemble CRT scanner monitors */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-light/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs uppercase font-mono tracking-widest text-gold-400 font-bold bg-gold-400/10 px-4 py-1.5 rounded-full border border-white/10">
            Developer Tribute
          </span>
          <h2 className="text-3xl md:text-5xl font-serif-cinzel text-slate-100 mt-4 tracking-tight">
            The Code of <span className="golden-text-shimmer">Sacrifice</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-lg mx-auto text-sm md:text-base">
            As a software engineering student, I understand complex architectures. But the grandest architecture is the life my father built for me.
          </p>
        </div>

        {/* Vintage Terminal Shell Wrapper - Styled as premium bento body */}
        <div className="w-full rounded-3xl border border-white/10 overflow-hidden shadow-2xl bg-black/40 font-mono-fira flex flex-col relative group hover:border-gold-400/30 transition-all duration-500 backdrop-blur-md">
          
          {/* Top Shiny Title bar with MacOS window dots */}
          <div className="bg-white/5 px-6 py-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 block border border-red-600/50" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 block border border-amber-600/50" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 block border border-emerald-600/50" />
            </div>
            
            <div className="flex items-center gap-1.5 text-xs text-gold-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
              <Terminal className="w-3.5 h-3.5 text-gold-400" />
              <span>who_is_my_hero.sh</span>
            </div>

            <div className="w-12" /> {/* Symmetrical Spacer */}
          </div>

          {/* Terminal Workspace Buffer */}
          <div className="p-6 md:p-8 space-y-3.5 min-h-[380px] text-xs md:text-sm leading-relaxed text-slate-300 relative overflow-y-auto">
            
            {/* Ambient CRT Scanline overlay effect */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90.00deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,6px_100%] pointer-events-none opacity-20" />

            {typedLines.map((line, idx) => {
              const isCommand = line.includes("who_is_my_real_hero");
              const isSuccess = line.includes("Execution successful");
              const isDetail = line.startsWith("✨");
              
              return (
                <div 
                  key={idx}
                  className={`flex flex-wrap items-center gap-2 transition-all duration-300 ${
                    isCommand ? "text-slate-100 font-semibold" : ""
                  }`}
                  id={`terminal-line-${idx}`}
                >
                  {isCommand ? (
                    <span className="text-emerald-400 select-none font-bold">▶</span>
                  ) : isSuccess ? (
                    <ShieldCheck className="w-4 h-4 text-emerald-400 inline" />
                  ) : null}

                  <span className={`
                    ${isCommand ? "text-slate-100" : ""}
                    ${isSuccess ? "text-emerald-400 font-bold" : ""}
                    ${isDetail ? "text-gold-300 font-medium pl-2 md:pl-4 border-l border-white/10" : ""}
                    ${!isCommand && !isDetail && !isSuccess ? "text-slate-400 italic" : ""}
                  `}>
                    {line}
                  </span>
                </div>
              );
            })}

            {isTyping && (
              <div className="inline-flex items-center gap-1 text-slate-400 text-xs">
                <span className="w-2 h-4 bg-gold-400 animate-pulse ml-1" />
                <span className="animate-pulse italic pl-2 text-gold-400/70">compiling memory logs...</span>
              </div>
            )}

            {!isTyping && typedLines.length === fullScript.length && (
              <div className="flex items-center gap-2 text-emerald-300 text-xs mt-6 select-none bg-emerald-deep/30 px-3 py-2 rounded-xl border border-white/10 max-w-fit">
                <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-bounce" />
                <span>Compiler Status: Online. Boundless gratitude instantiated.</span>
              </div>
            )}
          </div>

          {/* Replay action bar */}
          {showReplay && (
            <div className="bg-white/5 px-6 py-4 border-t border-white/10 flex justify-end">
              <button
                onClick={runAnimation}
                className="flex items-center gap-2 text-xs font-semibold text-gold-300 hover:text-gold-200 transition-all duration-300 uppercase tracking-wider group bg-white/5 px-4 py-2 rounded-xl border border-white/10 hover:border-gold-400/30"
                id="re-run-terminal-btn"
              >
                <RefreshCw className="w-3.5 h-3.5 animate-spin-slow group-hover:rotate-180 transition-all duration-500" />
                <span>Re-run Tribute script</span>
              </button>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
