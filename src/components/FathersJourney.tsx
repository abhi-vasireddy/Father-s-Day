import { useState } from "react";
import { timelineEvents } from "../data";
import { TimelineEvent } from "../types";
import { Hammer, Bike, Car, ShieldCheck, Heart, CircleCheck, Sparkles, ChevronRight } from "lucide-react";

// Lucide icon dictionary helper
const IconMap: Record<string, any> = {
  Hammer: Hammer,
  Bike: Bike,
  Car: Car,
  ShieldHeart: Heart, // beautiful protective heart
  Code2: Sparkles
};

export default function FathersJourney() {
  const [selectedEventIndex, setSelectedEventIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredEvents = activeFilter === "all" 
    ? timelineEvents 
    : timelineEvents.filter(e => e.category === activeFilter);

  // If filtered events doesn't contain the currently selected index, auto-choose first item of current list
  const currentEvent = filteredEvents[selectedEventIndex] || filteredEvents[0] || timelineEvents[0];

  const categories = [
    { id: "all", label: "Entire Journey" },
    { id: "hardwork", label: "Silent Hustle" },
    { id: "family", label: "Family Armor" },
    { id: "achievement", label: "Milestones" },
    { id: "future", label: "Legacy" }
  ];

  return (
    <section className="relative py-28 px-4 bg-gradient-to-b from-emerald-deep to-[#011e17]" id="journey">
      {/* Sunlight glow backdrop */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[500px] bg-yellow-500/5 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-gold-400 font-bold bg-gold-400/10 px-4 py-1.5 rounded-full border border-white/10">
            Interactive Bio
          </span>
          <h2 className="text-4xl md:text-5xl font-serif-cinzel mt-4 text-slate-100 tracking-tight">
            A Journey of <span className="golden-text-shimmer">Unwavering</span> Devotion
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            From humble beginnings to monumental family achievements. Explore the chronological steps K. Vijay Kumar completed to secure our tomorrow.
          </p>

          {/* Interactive filter pills */}
          <div className="flex flex-wrap justify-center items-center gap-2 mt-10" id="timeline-filters">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveFilter(cat.id);
                  setSelectedEventIndex(0); // reset select safe bounds
                }}
                className={`px-4 py-2 text-xs font-semibold rounded-full border transition-all duration-300 ${
                  activeFilter === cat.id
                    ? "bg-gold-500 text-emerald-deep border-white/10 font-bold shadow-lg"
                    : "bg-white/5 text-gold-300 border-white/10 hover:border-gold-300/30 hover:bg-white/10"
                }`}
                id={`filter-pill-${cat.id}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Section: Spoke Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12 items-start" id="timeline-interactive-grid">
          
          {/* Timeline Milestones list (Left pane) */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[10px] tracking-widest uppercase font-mono text-gold-400/70 block px-2 mb-2">
              Select Milestones to view details ({filteredEvents.length})
            </span>
            <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2 no-scrollbar border-r border-white/10">
              {filteredEvents.map((event, idx) => {
                const IconComponent = IconMap[event.iconName] || Hammer;
                const isSelected = timelineEvents.indexOf(event) === timelineEvents.indexOf(currentEvent);

                return (
                  <button
                    key={event.title}
                    onClick={() => {
                      setSelectedEventIndex(idx);
                    }}
                    className={`w-full text-left p-4 rounded-2xl transition-all duration-300 flex items-center justify-between group ${
                      isSelected 
                        ? "bg-gold-400/10 border border-gold-400/60 text-slate-100 shadow-xl" 
                        : "bg-white/3 border border-white/10 text-slate-300 hover:border-gold-400/30 hover:bg-white/5"
                    }`}
                    id={`milestone-btn-${idx}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-2.5 rounded-xl transition-transform duration-300 group-hover:scale-110 ${
                        isSelected ? "bg-gold-400 text-emerald-deep font-bold" : "bg-white/5 text-gold-300 border border-white/10"
                      }`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="flex flex-col">
                        <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${
                          isSelected ? "text-gold-300" : "text-slate-500"
                        }`}>
                          {event.year}
                        </span>
                        <h4 className="text-sm font-semibold truncate tracking-tight mt-0.5">
                          {event.title}
                        </h4>
                      </div>
                    </div>
                    <ChevronRight className={`w-4 h-4 text-gold-400 transition-transform ${
                      isSelected ? "translate-x-1" : "opacity-40"
                    }`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Epic Detailed Spotlight Card (Right pane) */}
          <div className="lg:col-span-7" id="timeline-spotlight-display">
            <div className="rounded-3xl bento-card p-6 md:p-10 space-y-6 relative overflow-hidden group">
              {/* Subtle visual gradient decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/5 rounded-full blur-2xl group-hover:bg-gold-400/15 transition-all duration-700" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gold-400/10 border border-white/10 flex items-center justify-center text-gold-400">
                    {(() => {
                      const Icon = IconMap[currentEvent.iconName] || Hammer;
                      return <Icon className="w-6 h-6" />;
                    })()}
                  </div>
                  <div>
                    <span className="text-xs font-mono font-semibold uppercase text-gold-400 tracking-wider">
                      {currentEvent.year}
                    </span>
                    <h3 className="text-xl md:text-2xl font-serif-cinzel font-bold text-slate-100 uppercase tracking-tight">
                      {currentEvent.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 self-start md:self-center">
                  <span className="text-[10px] uppercase font-mono px-2.5 py-1.5 rounded-lg bg-emerald-deep font-bold text-emerald-300 border border-white/10">
                    Category: {currentEvent.category}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-slate-300 text-sm md:text-base leading-relaxed font-sans first-letter:text-3xl first-letter:font-bold first-letter:text-gold-400 first-letter:mr-2">
                  {currentEvent.description}
                </p>
                
                <hr className="border-white/10 my-4" />

                <div className="space-y-3">
                  <span className="text-[11px] font-mono tracking-wider text-slate-400 uppercase">
                    Milestone Highlights
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {currentEvent.highlights.map((highlight, index) => (
                      <div 
                        key={index} 
                        className="flex items-center gap-2.5 bg-white/5 px-3.5 py-2.5 rounded-xl border border-white/10 text-xs text-slate-300 hover:border-gold-400/20 transition-all duration-300"
                        id={`highlight-${index}`}
                      >
                        <CircleCheck className="w-4.5 h-4.5 text-gold-400 flex-shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Touch of visual depth */}
              <div className="text-xs font-mono text-gold-400/40 select-none text-right pt-4 group-hover:text-gold-400/60 transition-colors">
                ✦ STORY LOG {timelineEvents.indexOf(currentEvent) + 1} OF {timelineEvents.length}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
