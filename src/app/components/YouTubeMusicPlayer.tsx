"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

export default function YouTubeMusicPlayer() {
  const playerRef = useRef<any>(null);
  const [player, setPlayer] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playlistId = "PLK9HaZHtCc5JjdazSVwm-1uzSiJZkR8kG";

  useEffect(() => {
    (window as any).onYouTubeIframeAPIReady = () => {
      const YT = (window as any).YT;

      const newPlayer = new YT.Player("youtube-player", {
        height: "0",
        width: "0",
        playerVars: {
          listType: "playlist",
          list: playlistId,
          autoplay: 0,
          loop: 1,
          mute: 0,
        },
        events: {
          onReady: () => onPlayerReady(newPlayer),
        },
      });

      setPlayer(newPlayer);
    };
  }, []);

  function onPlayerReady(player: any) {
    setTimeout(() => {
      player.playVideo();
      setIsPlaying(true);
    }, 3000);
  }

  function togglePlay() {
    if (!player) return;

    if (!isPlaying) {
      player.playVideo();
      setIsPlaying(true);
    } else {
      player.pauseVideo();
      setIsPlaying(false);
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <Script src="https://www.youtube.com/iframe_api" />

      <div id="youtube-player" ref={playerRef}></div>

      <button
        onClick={togglePlay}
        className={`flex items-center gap-2 px-5 py-3 rounded-full shadow-xl bg-black/60 text-white backdrop-blur-md hover:scale-105 transition-all duration-200 ${
          isPlaying ? "bg-green-600" : "bg-black/70"
        }`}
      >
        🎵
        <span className="font-semibold">
          {isPlaying ? "Pausar Música" : "Tocar Música"}
        </span>
      </button>
    </div>
  );
}
