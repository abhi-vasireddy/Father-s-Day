import { useState } from "react";
import { galleryPhotos } from "../data";
import { GalleryPhoto } from "../types";
import { Camera, Calendar, MapPin, Minimize2, ZoomIn, Heart, Sparkles } from "lucide-react";

export default function MemoryGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  return (
    <section className="relative py-28 px-4 bg-gradient-to-b from-[#03130e] to-emerald-deep overflow-hidden" id="gallery">
      {/* Sunlight glow rays */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-400/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-gold-400 font-bold bg-gold-400/10 px-3 py-1.5 rounded-full border border-gold-400/20">
            Timeline Assets
          </span>
          <h2 className="text-4xl md:text-5xl font-serif-cinzel mt-4 text-slate-100 tracking-tight">
            The Gallery of <span className="golden-text-shimmer">Precious</span> Milestones
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm md:text-base">
            Moments, principles, and physical environments that celebrate K. Vijay Kumar's tireless, inspiring work. Click on any Polaroid photo to inspect full details.
          </p>
        </div>

        {/* Polaroid Floating Gallery Grid */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6" 
          id="polaroid-gallery-grid"
        >
          {galleryPhotos.map((photo, index) => {
            // Pick a beautiful scenic seed from picsum to represent the memory
            const imageUrl = `https://picsum.photos/seed/${photo.imageSeed}/800/800`;

            return (
              <div
                key={photo.id}
                onClick={() => setSelectedPhoto(photo)}
                className={`group cursor-pointer select-none bg-white/3 p-4 rounded-3xl shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:scale-[1.04] border border-white/10 opacity-95 hover:opacity-100 hover:border-gold-400/30 ${photo.rotation}`}
                id={`polaroid-card-${photo.id}`}
              >
                {/* Polaroid Picture Frame */}
                <div className="relative overflow-hidden rounded-2xl bg-slate-950 aspect-square group-hover:shadow-[0_15px_30px_rgba(250,204,21,0.15)] transition-shadow duration-500">
                  <img
                    src={imageUrl}
                    alt={photo.caption}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 select-none pointer-events-none"
                    loading="lazy"
                  />
                  {/* Glowing zoom hint overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-3.5 rounded-full bg-gold-400 text-emerald-deep font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Hand-written styled signature cap */}
                <div className="mt-5 space-y-1.5 pb-2">
                  <div className="flex items-center gap-1 text-slate-400 font-mono text-[10px] tracking-wider uppercase">
                    <MapPin className="w-3.5 h-3.5 text-gold-400" />
                    <span>{photo.location}</span>
                  </div>
                  <p className="text-slate-200 uppercase font-serif-cinzel text-xs md:text-sm leading-snug truncate">
                    {photo.caption}
                  </p>
                  <div className="flex items-center gap-1.5 text-[9px] font-mono text-gold-400/60 uppercase">
                    <Calendar className="w-3 h-3 text-gold-400/40" />
                    <span>In Honor of Vijay Kumar</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Premium Fullscreen Cinematic Lightbox */}
        {selectedPhoto && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md transition-all duration-300"
            onClick={() => setSelectedPhoto(null)}
            id="gallery-lightbox"
          >
            <div 
               className="relative max-w-4xl w-full bg-[#022c22]/90 rounded-3xl border border-white/10 overflow-hidden shadow-2xl flex flex-col md:grid md:grid-cols-12 max-h-[90vh]"
              onClick={(e) => e.stopPropagation()} // stop parent dismiss on card press
            >
              {/* Image box */}
              <div className="md:col-span-12 lg:col-span-7 bg-black flex items-center justify-center relative aspect-square md:aspect-auto md:h-full">
                <img
                  src={`https://picsum.photos/seed/${selectedPhoto.imageSeed}/1000/1000`}
                  alt={selectedPhoto.caption}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover max-h-[40vh] md:max-h-none select-none"
                />
                
                {/* Floating Heart over focus */}
                <div className="absolute top-4 left-4 bg-red-500 text-white p-2.5 rounded-full shadow-lg select-none">
                  <Heart className="w-5 h-5 fill-white animate-pulse" />
                </div>
              </div>

              {/* Memory Details column */}
              <div className="md:col-span-12 lg:col-span-5 p-6 md:p-8 flex flex-col justify-between space-y-6 bg-slate-950/40 backdrop-blur-md relative">
                
                {/* Interactive dismiss button */}
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="absolute top-4 right-4 p-2 rounded-full border border-white/10 bg-emerald-deep text-gold-300 hover:bg-gold-500 hover:text-emerald-deep font-bold transition-all duration-300"
                  title="Close memory details"
                  id="lightbox-close-btn"
                >
                  <Minimize2 className="w-4 h-4" />
                </button>

                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-gold-400/70 uppercase">
                    <Camera className="w-4 h-4 text-gold-400" />
                    <span>Memory Archive</span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-serif-cinzel font-bold text-slate-100">
                    {selectedPhoto.location}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-slate-400 bg-white/5 px-3 py-1.5 rounded-xl border border-white/10 w-fit">
                    <MapPin className="w-3.5 h-3.5 text-gold-400" />
                    <span>Milestone Spotlight</span>
                  </div>

                  <hr className="border-white/10" />

                  <p className="text-slate-200 text-sm md:text-base leading-relaxed font-sans mt-4 italic">
                    "{selectedPhoto.caption}"
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-slate-300 space-y-1.5">
                    <span className="font-mono text-gold-400 font-bold uppercase block tracking-wider flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" /> Wisdom Reflection
                    </span>
                    <p>
                      Every bike trip, car drive, and work shift was a step to build. This tribute celebrates 46 years of his honor, wisdom, and leadership.
                    </p>
                  </div>

                  <div className="text-center">
                    <button
                      onClick={() => setSelectedPhoto(null)}
                      className="w-full py-3 bg-gold-400 text-emerald-deep font-bold uppercase rounded-xl border border-white/10 hover:bg-gold-300 transition-colors uppercase tracking-wider text-xs cursor-pointer"
                    >
                      Close Memory Log
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
