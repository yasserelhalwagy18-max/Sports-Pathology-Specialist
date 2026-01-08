import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, RotateCw, Volume2, VolumeX, Maximize, Repeat } from 'lucide-react';

interface ExercisePlayerProps {
  videoUrl: string;
  thumbnail: string;
}

const ExercisePlayer: React.FC<ExercisePlayerProps> = ({ videoUrl, thumbnail }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooping, setIsLooping] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const controlsTimeoutRef = useRef<number | null>(null);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
    triggerControls();
  };

  const triggerControls = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      window.clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = window.setTimeout(() => {
      setShowControls(false);
    }, 3000);
  };

  const toggleLoop = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLooping(!isLooping);
  };
  
  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(currentProgress);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      const time = (Number(e.target.value) / 100) * videoRef.current.duration;
      videoRef.current.currentTime = time;
      setProgress(Number(e.target.value));
    }
  };

  return (
    <div 
      className="relative group rounded-2xl md:rounded-3xl overflow-hidden bg-slate-900 shadow-2xl aspect-video cursor-pointer" 
      onClick={() => setShowControls(!showControls)}
    >
      <video
        ref={videoRef}
        src={videoUrl}
        poster={thumbnail}
        loop={isLooping}
        muted={isMuted}
        onTimeUpdate={handleTimeUpdate}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        className="w-full h-full object-cover"
        playsInline
      />

      {/* Overlays */}
      <div className={`absolute inset-0 bg-black/30 transition-opacity duration-300 flex flex-col justify-between p-4 md:p-6 ${showControls ? 'opacity-100' : 'opacity-0 md:group-hover:opacity-100'}`}>
        <div className="flex justify-between items-start flex-row-reverse">
          <button 
            onClick={toggleLoop}
            className={`p-2 rounded-xl backdrop-blur-md transition-all ${isLooping ? 'bg-blue-700 text-white' : 'bg-white/20 text-white hover:bg-white/40'}`}
          >
            <Repeat size={18} />
          </button>
          <div className="bg-blue-700/80 backdrop-blur-md px-2 md:px-3 py-1 rounded-lg text-[8px] md:text-[10px] font-black text-white uppercase tracking-widest">
            آموزشی
          </div>
        </div>

        <div className="space-y-2 md:space-y-4" onClick={(e) => e.stopPropagation()}>
          <input 
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleSeek}
            className="w-full h-1 md:h-1.5 bg-white/30 rounded-lg appearance-none cursor-pointer accent-blue-700"
          />
          
          <div className="flex justify-between items-center flex-row-reverse">
            <div className="flex gap-2 md:gap-4 flex-row-reverse items-center">
              <button onClick={togglePlay} className="w-10 h-10 md:w-12 md:h-12 bg-white text-slate-900 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="mr-0.5" />}
              </button>
              <button onClick={(e) => { e.stopPropagation(); if(videoRef.current) videoRef.current.currentTime = 0; }} className="text-white p-1">
                <RotateCw size={18} />
              </button>
            </div>

            <div className="flex gap-3 md:gap-4 items-center">
              <button onClick={toggleMute} className="text-white p-1">
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
              <button className="text-white p-1">
                <Maximize size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {!isPlaying && !showControls && (
        <div className="absolute inset-0 m-auto w-16 h-16 md:w-20 md:h-20 bg-blue-700/90 backdrop-blur-md text-white rounded-full flex items-center justify-center shadow-2xl pointer-events-none group-hover:scale-110 transition-transform">
          <Play size={32} fill="currentColor" className="mr-1" />
        </div>
      )}
    </div>
  );
};

export default ExercisePlayer;