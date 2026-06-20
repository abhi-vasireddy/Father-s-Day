import { useState } from "react";
import { Heart, Send, Scroll, Sparkles } from "lucide-react";

export default function ThankYouLetter() {
  const [stampClicked, setStampClicked] = useState(false);

  return (
    <section className="relative py-28 px-4 bg-gradient-to-b from-emerald-deep to-slate-950" id="letter">
      {/* Sunlight overlay glow from top right */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-gold-400 font-bold bg-gold-400/10 px-4 py-1.5 rounded-full border border-white/10">
            A Son's Epistle
          </span>
          <h2 className="text-4xl md:text-5xl font-serif-cinzel mt-4 text-slate-100 tracking-tight">
            The Letter of <span className="golden-text-shimmer">Gratitude</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-lg mx-auto text-sm md:text-base">
            A handwritten letter from a son to his real-life hero on Father's Day.
          </p>
        </div>

        {/* Paper texture letter layout - Styled as highly distinctive parchment Bento block from instructions */}
        <div 
          className="relative rounded-3xl p-8 md:p-14 bg-[#fdfcf0] text-[#022c22] border border-[#eab308]/20 shadow-[0_30px_60px_rgba(0,0,0,0.6)] overflow-hidden rotate-1 translate-y-1 hover:rotate-0 transition-all duration-700" 
          id="handwritten-letter-surface"
        >
          {/* Faint gold ink scroll accent on background corners */}
          <div className="absolute top-4 left-6 text-emerald-950/5 pointer-events-none">
            <Scroll className="w-24 h-24" />
          </div>

          <div className="space-y-6 md:space-y-8 text-emerald-950 text-sm md:text-base leading-relaxed font-sans max-w-3xl mx-auto">
            {/* Salutation */}
            <div>
              <p className="text-xs font-mono text-emerald-700 font-bold uppercase tracking-widest mb-1">June 21, 2026</p>
              <h3 className="text-2xl md:text-3xl font-serif-cinzel text-emerald-950 font-black tracking-tight">
                Dear Dad (K. Vijay Kumar),
              </h3>
            </div>

            {/* Content paragraph 1 */}
            <p className="handwritten-font italic text-emerald-900/95 pr-2">
              On this Father's Day, I wanted to write down the words that I might not say often enough, but feel in every single heartbeat. Looking back at my life, I realize that every opportunity I have today is a direct result of your quiet sacrifice and relentless work ethic over the years.
            </p>

            {/* Content paragraph 2 */}
            <p className="handwritten-font italic text-emerald-900/95 pr-2">
              You chose our tomorrow over your today, again and again. I remember the sound of your bikes starting early in the mornings for long, tiring commutes, and the proud, beaming smile on your face when you brought home our family car. Those weren’t just achievements to admire; they were life lessons demonstrating that honesty, discipline, and perseverance can conquer any struggle.
            </p>

            {/* Content paragraph 3 */}
            <p className="handwritten-font italic text-emerald-900/95 pr-2">
              Now, as a software engineering student, I sit here analyzing complex codebases, networks, and advanced architectures. But I know with absolute certainty that the most grand architecture, the most outstanding design, and the supreme code of sacrifice is the life you have built for our family.
            </p>

            {/* Content paragraph 4 */}
            <p className="handwritten-font italic text-emerald-900/95 pr-2">
              Thank you for shielding us from struggles. Thank you for believing in me, ensuring I pursued my higher studies with premium support. Because of you, I have the courage to dream big and build systems that make a difference.
            </p>

            {/* Divider lines */}
            <div className="border-t border-[#022c22]/15 my-6" />

            {/* Sign off */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6" id="letter-sign-off">
              <div className="space-y-1">
                <p className="text-xs uppercase font-mono text-emerald-700">With eternal love & gratitude,</p>
                <p className="text-xl md:text-2xl font-serif-cinzel text-emerald-900 font-extrabold italic tracking-wider">
                  Your Software Engineer Son
                </p>
              </div>

              {/* Classic Golden Wax Seal stamp illustration */}
              <div className="flex items-center gap-3">
                <div 
                  onClick={() => setStampClicked(!stampClicked)}
                  className={`relative cursor-pointer w-16 h-16 rounded-full bg-gradient-to-br from-red-700 to-red-500 border border-red-400 shadow-lg flex items-center justify-center transition-all active:scale-95 select-none hover:rotate-6 ${
                    stampClicked ? "scale-110 rotate-12" : ""
                  }`}
                  title="Click to stamp seal of love!"
                  id="wax-seal"
                >
                  <Heart className={`w-7 h-7 text-white transition-transform duration-500 ${
                    stampClicked ? "scale-110 fill-white" : "fill-transparent"
                  }`} />
                  {/* Outer writing around seal */}
                  <div className="absolute inset-0 rounded-full border border-red-300/40 m-1 border-dashed" />
                </div>
                
                <div className="flex flex-col text-xs font-mono text-emerald-800 mt-1">
                  <span className="text-[#022c22] font-semibold uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-red-600" /> Vijay's Legacy
                  </span>
                  <span>Stamped with absolute love</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
