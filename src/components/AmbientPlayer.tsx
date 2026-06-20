import { useState, useEffect, useRef } from "react";
import {
  Volume2,
  VolumeX,
  Play,
  Pause,
  Music,
} from "lucide-react";

export default function AmbientPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/audio/father-song.mp3");

    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    return () => {
      audioRef.current?.pause();
    };
  }, []);

  const togglePlayback = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error("Audio playback failed:", error);
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;

    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-full glass-panel border border-gold-400/30 shadow-2xl transition-all duration-300 hover:border-gold-400/60"
      id="ambient-music-controller"
    >
      <div className="flex items-center gap-2">
        <button
          onClick={togglePlayback}
          className={`p-2.5 rounded-full flex items-center justify-center transition-all duration-300 ${isPlaying
              ? "bg-gold-500 text-emerald-deep animate-pulse"
              : "bg-emerald-medium text-gold-300 hover:bg-emerald-light"
            }`}
          title={isPlaying ? "Pause Music" : "Play Music"}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5" />
          ) : (
            <Play className="w-5 h-5 ml-0.5" />
          )}
        </button>

        <div className="flex flex-col">
          <span className="text-[10px] uppercase font-mono tracking-widest text-gold-400 flex items-center gap-1">
            <Music className="w-3 h-3" />
            Father's Day
          </span>

          <span className="text-xs font-semibold text-slate-200">
            {isPlaying ? "Playing Dad's Song ❤️" : "Music Off"}
          </span>
        </div>
      </div>

      {isPlaying && (
        <div className="flex items-end gap-0.5 h-4 w-6 px-1">
          <div
            className="w-1 bg-gold-400 rounded-full animate-pulse h-full"
            style={{ animationDelay: "0.1s" }}
          />
          <div
            className="w-1 bg-gold-500 rounded-full animate-pulse h-2/3"
            style={{ animationDelay: "0.3s" }}
          />
          <div
            className="w-1 bg-gold-300 rounded-full animate-pulse h-4/5"
            style={{ animationDelay: "0.5s" }}
          />
          <div
            className="w-1 bg-gold-400 rounded-full animate-pulse h-1/2"
            style={{ animationDelay: "0.2s" }}
          />
        </div>
      )}

      <div className="border-l border-gold-400/20 pl-3">
        <button
          onClick={toggleMute}
          className="p-2 rounded-full hover:bg-white/10 transition-all duration-200"
          title={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5 text-slate-400" />
          ) : (
            <Volume2 className="w-5 h-5 text-gold-300" />
          )}
        </button>
      </div>
    </div>
  );
}