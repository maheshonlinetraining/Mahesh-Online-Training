import React, { useState, useRef, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  RotateCw, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  Minimize2,
  Sparkles
} from 'lucide-react';

const THEME_CONFIGS = {
  orange: {
    sliderClass: 'slider-orange',
    gradientTrack: (percent) => `linear-gradient(to right, #f97316 0%, #ea580c ${percent}%, #334155 ${percent}%, #334155 100%)`,
    centerPlayBtn: 'bg-gradient-to-tr from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 shadow-orange-600/40 group-hover:ring-orange-500/40',
    centerBadgeBorder: 'border-orange-500/30 text-orange-100',
    centerBadgeIcon: 'text-orange-400',
    badgePulse: 'bg-orange-500',
    timeHighlight: 'text-orange-400',
    rewindForwardBtn: 'bg-orange-500 hover:bg-orange-600 shadow-orange-500/25 border-orange-400/50',
    mainPlayBtn: 'bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-orange-500/30 border-orange-300/40',
    formatBtn: 'bg-orange-500/20 hover:bg-orange-500/30 text-orange-400 border-orange-500/40',
    formatIcon: 'text-orange-400'
  },
  purple: {
    sliderClass: 'slider-purple',
    gradientTrack: (percent) => `linear-gradient(to right, #a855f7 0%, #7c3aed ${percent}%, #334155 ${percent}%, #334155 100%)`,
    centerPlayBtn: 'bg-gradient-to-tr from-purple-700 via-indigo-600 to-violet-600 hover:from-purple-600 hover:to-violet-500 shadow-purple-600/40 group-hover:ring-purple-500/40',
    centerBadgeBorder: 'border-purple-500/30 text-purple-100',
    centerBadgeIcon: 'text-purple-400',
    badgePulse: 'bg-purple-500',
    timeHighlight: 'text-purple-300',
    rewindForwardBtn: 'bg-purple-600 hover:bg-purple-700 shadow-purple-600/25 border-purple-400/50',
    mainPlayBtn: 'bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 shadow-purple-600/30 border-purple-300/40',
    formatBtn: 'bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 border-purple-500/40',
    formatIcon: 'text-purple-300'
  },
  blue: {
    sliderClass: 'slider-blue',
    gradientTrack: (percent) => `linear-gradient(to right, #0ea5e9 0%, #0284c7 ${percent}%, #334155 ${percent}%, #334155 100%)`,
    centerPlayBtn: 'bg-gradient-to-tr from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 shadow-sky-600/40 group-hover:ring-sky-500/40',
    centerBadgeBorder: 'border-sky-500/30 text-sky-100',
    centerBadgeIcon: 'text-sky-400',
    badgePulse: 'bg-sky-400',
    timeHighlight: 'text-sky-300',
    rewindForwardBtn: 'bg-sky-600 hover:bg-sky-700 shadow-sky-600/25 border-sky-400/50',
    mainPlayBtn: 'bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700 shadow-sky-600/30 border-sky-300/40',
    formatBtn: 'bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 border-sky-500/40',
    formatIcon: 'text-sky-300'
  }
};

export default function AnalyticsHeroVideoPlayer({
  videoSrc = "/videos/Data_Analytics_Video_Option_2.mp4",
  theme = "orange",
  badgeText = "Watch 2-Min Beginner Lesson",
  title = "Course Lesson Video"
}) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Active theme configuration (falls back to orange if invalid)
  const currentTheme = THEME_CONFIGS[theme] || THEME_CONFIGS.orange;

  // Reset state whenever video source changes
  useEffect(() => {
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
      video.load();
    }
  }, [videoSrc]);

  // Synchronize duration and play state
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onLoadedMetadata = () => {
      setDuration(video.duration || 150);
    };

    const onTimeUpdate = () => {
      if (!isDragging) {
        setCurrentTime(video.currentTime);
      }
    };

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    video.addEventListener('loadedmetadata', onLoadedMetadata);
    video.addEventListener('timeupdate', onTimeUpdate);
    video.addEventListener('play', onPlay);
    video.addEventListener('pause', onPause);
    video.addEventListener('ended', onEnded);

    return () => {
      video.removeEventListener('loadedmetadata', onLoadedMetadata);
      video.removeEventListener('timeupdate', onTimeUpdate);
      video.removeEventListener('play', onPlay);
      video.removeEventListener('pause', onPause);
      video.removeEventListener('ended', onEnded);
    };
  }, [isDragging, videoSrc]);

  // Fullscreen change listener
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Format MM:SS helper
  const formatTime = (timeInSeconds) => {
    if (isNaN(timeInSeconds) || timeInSeconds < 0) return '0:00';
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // Play / Pause toggle
  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(err => console.log("Playback error:", err));
    } else {
      video.pause();
    }
  };

  // Rewind 10 seconds
  const handleRewind10 = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    const newTime = Math.max(0, video.currentTime - 10);
    video.currentTime = newTime;
    setCurrentTime(newTime);
  };

  // Forward 10 seconds
  const handleForward10 = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    const maxDuration = duration || video.duration || 150;
    const newTime = Math.min(maxDuration, video.currentTime + 10);
    video.currentTime = newTime;
    setCurrentTime(newTime);
  };

  // Scrub slider change
  const handleScrubChange = (e) => {
    const targetTime = parseFloat(e.target.value);
    setCurrentTime(targetTime);
    if (videoRef.current) {
      videoRef.current.currentTime = targetTime;
    }
  };

  const handleScrubMouseDown = () => {
    setIsDragging(true);
  };

  const handleScrubMouseUp = (e) => {
    setIsDragging(false);
    const targetTime = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = targetTime;
    }
  };

  // Toggle Mute
  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    const newMuteState = !isMuted;
    video.muted = newMuteState;
    setIsMuted(newMuteState);
  };

  // Cycle playback speed: 1x -> 1.25x -> 1.5x -> 1x
  const cycleSpeed = () => {
    const video = videoRef.current;
    if (!video) return;
    const speeds = [1, 1.25, 1.5];
    const nextIdx = (speeds.indexOf(playbackRate) + 1) % speeds.length;
    const newRate = speeds[nextIdx];
    video.playbackRate = newRate;
    setPlaybackRate(newRate);
  };

  // Toggle Fullscreen
  const toggleFullscreen = () => {
    const container = containerRef.current;
    if (!container) return;

    if (!document.fullscreenElement) {
      if (container.requestFullscreen) {
        container.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  // Progress percentage for range gradient
  const totalDuration = duration || 150;
  const progressPercent = totalDuration > 0 ? (currentTime / totalDuration) * 100 : 0;

  return (
    <div 
      ref={containerRef} 
      className="w-full flex flex-col bg-slate-950 rounded-xl overflow-hidden border border-slate-800 shadow-2xl relative select-none"
    >
      {/* Video Screen Area */}
      <div 
        className="relative w-full aspect-video bg-black overflow-hidden cursor-pointer group flex items-center justify-center"
        onClick={togglePlay}
      >
        <video
          ref={videoRef}
          src={videoSrc}
          playsInline
          preload="metadata"
          className="w-full h-full object-contain"
        />

        {/* Center Big Play Button Overlay (when paused) */}
        {!isPlaying && (
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex flex-col items-center justify-center transition-all duration-300">
            <button
              onClick={(e) => {
                e.stopPropagation();
                togglePlay();
              }}
              className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full ${currentTheme.centerPlayBtn} text-white flex items-center justify-center shadow-xl transform hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer border-2 border-white/80 group-hover:ring-4`}
              title={`Play ${title}`}
              aria-label={`Play ${title}`}
            >
              <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-white ml-1" />
            </button>
            <div className={`mt-3 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border ${currentTheme.centerBadgeBorder} text-[11px] font-bold tracking-wide flex items-center gap-1.5 shadow-md`}>
              <Sparkles className={`w-3.5 h-3.5 ${currentTheme.centerBadgeIcon}`} />
              <span>{badgeText}</span>
            </div>
          </div>
        )}

        {/* Top-Right Badge on Video */}
        <div className="absolute top-2 right-2 flex items-center gap-1.5 px-2 py-0.5 rounded bg-black/75 backdrop-blur-md border border-white/10 text-[10px] font-mono font-bold text-slate-300 pointer-events-none">
          <span className={`w-1.5 h-1.5 rounded-full ${currentTheme.badgePulse} animate-pulse`}></span>
          <span>1080P HD</span>
        </div>
      </div>

      {/* Custom Video Controls Panel - Course-Themed Dynamic Colors */}
      <div className="p-2 sm:p-2.5 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-t border-slate-800/90 space-y-1.5">
        
        {/* Custom Draggable Progress / Scrub Bar */}
        <div className="space-y-1">
          <div className="relative flex items-center w-full group">
            <input
              type="range"
              min="0"
              max={totalDuration}
              step="0.1"
              value={currentTime}
              onChange={handleScrubChange}
              onMouseDown={handleScrubMouseDown}
              onMouseUp={handleScrubMouseUp}
              onTouchStart={handleScrubMouseDown}
              onTouchEnd={handleScrubMouseUp}
              className={`w-full h-2 rounded-lg appearance-none cursor-pointer focus:outline-none transition-all duration-150 ${currentTheme.sliderClass}`}
              style={{
                background: currentTheme.gradientTrack(progressPercent)
              }}
              title="Drag progress bar to scrub video"
              aria-label="Video Progress Bar"
            />
          </div>

          {/* Time Display Under Progress Bar */}
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 px-0.5">
            <span className={`${currentTheme.timeHighlight} font-bold`}>{formatTime(currentTime)}</span>
            <span>{formatTime(totalDuration)}</span>
          </div>
        </div>

        {/* Custom Themed Video Action Buttons */}
        <div className="flex items-center justify-between gap-2">
          
          {/* Main Playback Cluster: -10s, Play/Pause (Resume), +10s */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            
            {/* 10-Second Rewind Button */}
            <button
              onClick={handleRewind10}
              className={`px-2.5 py-1.5 rounded-lg ${currentTheme.rewindForwardBtn} active:scale-95 text-white font-bold text-xs flex items-center gap-1 shadow-md transition-all cursor-pointer`}
              title="Rewind 10 Seconds"
              aria-label="Rewind 10 Seconds"
            >
              <RotateCcw className="w-3.5 h-3.5 stroke-[2.5]" />
              <span className="font-mono text-[10px] leading-none">-10s</span>
            </button>

            {/* Play / Pause (Resume) Button */}
            <button
              onClick={togglePlay}
              className={`px-3.5 py-1.5 rounded-lg ${currentTheme.mainPlayBtn} active:scale-95 text-white font-extrabold text-xs flex items-center gap-1.5 shadow-lg transition-all cursor-pointer`}
              title={isPlaying ? "Pause Lesson" : "Play / Resume Lesson"}
              aria-label={isPlaying ? "Pause Lesson" : "Play / Resume Lesson"}
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 fill-white stroke-[2.5]" />
                  <span className="text-[11px] uppercase tracking-wider">Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-white stroke-[2.5]" />
                  <span className="text-[11px] uppercase tracking-wider">Resume</span>
                </>
              )}
            </button>

            {/* 10-Second Forward Button */}
            <button
              onClick={handleForward10}
              className={`px-2.5 py-1.5 rounded-lg ${currentTheme.rewindForwardBtn} active:scale-95 text-white font-bold text-xs flex items-center gap-1 shadow-md transition-all cursor-pointer`}
              title="Forward 10 Seconds"
              aria-label="Forward 10 Seconds"
            >
              <span className="font-mono text-[10px] leading-none">+10s</span>
              <RotateCw className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>

          {/* Secondary Themed Controls: Speed, Audio, Fullscreen */}
          <div className="flex items-center gap-1.5">
            {/* Speed Selector Button */}
            <button
              onClick={cycleSpeed}
              className={`px-2 py-1 rounded ${currentTheme.formatBtn} text-[10px] font-mono font-bold transition-colors cursor-pointer`}
              title="Playback Speed"
            >
              {playbackRate}x
            </button>

            {/* Mute / Unmute Button */}
            <button
              onClick={toggleMute}
              className={`p-1.5 rounded ${currentTheme.formatBtn} transition-colors cursor-pointer`}
              title={isMuted ? "Unmute Audio" : "Mute Audio"}
              aria-label={isMuted ? "Unmute Audio" : "Mute Audio"}
            >
              {isMuted ? (
                <VolumeX className={`w-3.5 h-3.5 ${currentTheme.formatIcon}`} />
              ) : (
                <Volume2 className={`w-3.5 h-3.5 ${currentTheme.formatIcon}`} />
              )}
            </button>

            {/* Fullscreen Toggle */}
            <button
              onClick={toggleFullscreen}
              className={`p-1.5 rounded ${currentTheme.formatBtn} transition-colors cursor-pointer`}
              title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
              aria-label={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
            >
              {isFullscreen ? (
                <Minimize2 className={`w-3.5 h-3.5 ${currentTheme.formatIcon}`} />
              ) : (
                <Maximize2 className={`w-3.5 h-3.5 ${currentTheme.formatIcon}`} />
              )}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
