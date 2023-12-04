import React, { useRef, useState } from 'react';
import './AudioPlayer.css';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const audioFile = '/sunshine-whistle-175139.mp3';

  const toggleAudio = () => {
    const audio = audioRef.current;

    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }

      setIsPlaying(!isPlaying);
    }
  };

  const stopAudio = () => {
    const audio = audioRef.current;

    if (audio) {
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    const progressBar = document.getElementById('progressBar');

    if (audio && progressBar) {
      const value = (audio.currentTime / audio.duration) * 100;
      progressBar.value = value;
    }
  };

  const handleAudioEnded = () => {
    // La lecture est terminée, réinitialisez le lecteur audio et le bouton Play
    const audio = audioRef.current;

    if (audio) {
      audio.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <div className="audio-container">
      <audio
        id="audioPlayer"
        ref={audioRef}
        src={audioFile}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleAudioEnded}
      />
      <div className="audio-controls">
        <button onClick={toggleAudio}>{isPlaying ? '⏸' : '▶️'}</button>
        <button onClick={stopAudio}>⏹️</button>
      </div>
      <div className="progress-container">
        <progress id="progressBar" value="0" max="100"></progress>
      </div>
    </div>
  );
};

export default AudioPlayer;

 