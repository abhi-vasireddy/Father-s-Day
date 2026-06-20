import { useState } from "react";
import { achievementItems } from "../data";
import { AchievementItem } from "../types";
import { Briefcase, Bike, Car, HeartHandshake, Sparkles, MessageCircle, X, ChevronDown, Check } from "lucide-react";

// Icon dictionary mapped for Lucide
const IconMap: Record<string, any> = {
  Briefcase: Briefcase,
  Bike: Bike,
  Car: Car,
  HeartHandshake: HeartHandshake,
  Sparkles: Sparkles
};

// Custom son gratitude letters/thoughts corresponding to each achievement
const reflectionData: Record<string, string> = {
  provider: "Through long hours of hard labor and sleepless nights, you placed a roof over our heads and food on our plate. Your sacrifice taught me that true love is an action, not a word. I am here because you worked when you were exhausted.",
  bikes: "I remember you riding through summer heat and winter wind. Your two bikes did more than run commutes—they carried the dreams on their handlebars, proving to me that speed doesn't matter as long as you keep moving forward.",
  car: "The day we got our car was a celebration. It wasn’t about status, but about the culmination of your life’s pure dedication. Seeing you proud at the wheel taught me that self-made success is the sweetest of victories.",
  education: "While other fathers bought luxuries, you invested in my books, courses, and educational tools. You sacrificed your own wishes so that I could hold compiling software code. My career is literally built of your sweat.",
  inspiration: "You are my true definition of a role model, Dad. You showing how to lead with kindness, respect, and character is the greatest map of life I could ever obtain. I love you, Vijay Kumar."
};

export default function AchievementCards() {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  return (
    <section className="relative py-28 px-4 bg-[#011e17]" id="achievements">
      {/* Absolute ambient lights on margins */}
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-10 left-10 w-96 h-96 bg-emerald-light/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-gold-400 font-bold bg-gold-400/10 px-4 py-1.5 rounded-full border border-white/10">
            Showcase
          </span>
          <h2 className="text-4xl md:text-5xl font-serif-cinzel text-slate-100 mt-4 tracking-tight">
            The Milestones of a <span className="golden-text-shimmer">Hero</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm md:text-base">
            These physical milestones represent and celebrate years of quiet dedication, sacrifice, and successful provisions.
          </p>
        </div>

        {/* Card Grid Layout - Bento pattern with asymmetric feel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="achievement-cards-grid">
          {achievementItems.map((item, idx) => {
            const IconComponent = IconMap[item.iconName] || Briefcase;
            const isDetailed = activeCardId === item.id;
            
            // Asymmetric high-decorations: highlights bike/car/inspiration more beautifully (first, third, fifth)
            const isAltSpan = idx % 2 === 1;

            return (
              <div
                key={item.id}
                className={`group relative rounded-3xl p-6 md:p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 border ${
                  isDetailed 
                    ? "border-gold-400 font-bold bg-[#064e3b]/50 scale-[1.02] shadow-[0_20px_50px_rgba(250,204,21,0.15)] z-20" 
                    : isAltSpan
                      ? "border-emerald-500/20 bg-emerald-medium/10 hover:border-gold-400/40 hover:scale-[1.01]"
                      : "border-white/10 bg-white/3 hover:border-gold-400/40 hover:scale-[1.01]"
                }`}
                style={{ contentVisibility: "auto" }}
                id={`achievement-card-${item.id}`}
              >
                {/* Glowing border accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold-400/5 rounded-full blur-xl group-hover:scale-150 transition-all duration-700" />

                {/* Card Top section */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-gold-300 group-hover:bg-gold-500 group-hover:text-emerald-deep font-bold transition-all duration-500">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {/* Big Metric Display */}
                    <span className="text-xl font-extrabold text-gold-400 tracking-tight font-serif-cinzel">
                      {item.metric}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase font-mono text-slate-400 tracking-widest block font-medium">
                      {item.subtitle}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-slate-100 uppercase tracking-tight font-serif-cinzel mt-1">
                      {item.title}
                    </h3>
                  </div>

                  {/* Body Text */}
                  <p className="text-slate-300 text-sm leading-relaxed min-h-[72px]">
                    {item.description}
                  </p>
                </div>

                {/* Sub-Interactive drawer for heartfelt notes */}
                <div className="mt-6 border-t border-white/10 pt-4 flex flex-col gap-3">
                  {!isDetailed ? (
                    <button
                      onClick={() => setActiveCardId(item.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-300 hover:text-gold-200 uppercase tracking-wider transition-colors self-start"
                      id={`reflection-btn-${item.id}`}
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Read Tribute Reflection</span>
                    </button>
                  ) : (
                    <div className="space-y-3" id={`reflection-drawer-${item.id}`}>
                      <div className="flex items-center justify-between bg-emerald-deep/80 px-2.5 py-1.5 rounded-xl border border-white/15">
                        <span className="text-[10px] uppercase font-mono text-gold-400 font-bold">
                          Message from your Son
                        </span>
                        <button
                          onClick={() => setActiveCardId(null)}
                          className="p-1 rounded-md hover:bg-gold-500/20 text-slate-400 hover:text-gold-300 transition-colors"
                          title="Close panel"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                      
                      <p className="text-xs text-gold-100/90 leading-relaxed italic border-l-2 border-gold-400 pl-3">
                        {reflectionData[item.id]}
                      </p>

                      <span className="text-[10px] uppercase font-mono block text-right text-slate-400">
                        — Built with gratitude
                      </span>
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
