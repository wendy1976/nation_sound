// Importer React et les hooks nécessaires depuis 'react'
import React, { useRef, useState } from 'react';
// Importer les styles CSS spécifiques pour le lecteur audio
import './AudioPlayer.css';

// Composant principal du lecteur audio
const AudioPlayer = () => {
  // État pour suivre si la lecture est en cours
  const [isPlaying, setIsPlaying] = useState(false);
  // Référence au lecteur audio pour accéder à ses propriétés
  const audioRef = useRef(null);

  // Chemin du fichier audio
  const audioFile = '/sunshine-whistle-175139.mp3';

  // Fonction pour basculer la lecture audio
  const toggleAudio = () => {
    const audio = audioRef.current;

    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }

      // Inverser l'état de lecture
      setIsPlaying(!isPlaying);
    }
  };

  // Fonction pour arrêter la lecture audio et réinitialiser le lecteur
  const stopAudio = () => {
    const audio = audioRef.current;

    if (audio) {
      audio.pause();
      // Réinitialiser la position de lecture à zéro
      audio.currentTime = 0;
      // Mettre à jour l'état pour indiquer l'arrêt de la lecture
      setIsPlaying(false);
    }
  };

  // Fonction appelée lors de la mise à jour du temps de lecture
  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    const progressBar = document.getElementById('progressBar');

    if (audio && progressBar) {
      // Calculer le pourcentage de progression et mettre à jour la barre de progression
      const value = (audio.currentTime / audio.duration) * 100;
      progressBar.value = value;
    }
  };

  // Fonction appelée lorsque la lecture audio est terminée
  const handleAudioEnded = () => {
    // La lecture est terminée, réinitialiser le lecteur audio et le bouton Play
    const audio = audioRef.current;

    if (audio) {
      // Réinitialiser la position de lecture à zéro
      audio.currentTime = 0;
      // Mettre à jour l'état pour indiquer l'arrêt de la lecture
      setIsPlaying(false);
    }
  };

  // Rendu du composant
  return (
    <div className="audio-container">
      {/* Balise audio pour le lecteur audio avec des gestionnaires d'événements */}
      <audio
        id="audioPlayer"
        ref={audioRef}
        src={audioFile}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleAudioEnded}
      />
      {/* Zone de contrôles pour le lecteur audio */}
      <div className="audio-controls">
        {/* Bouton Play/Pause avec icône dynamique en fonction de l'état de lecture */}
        <button onClick={toggleAudio}>{isPlaying ? '⏸' : '▶️'}</button>
        {/* Bouton Stop */}
        <button onClick={stopAudio}>⏹️</button>
      </div>
      {/* Barre de progression pour suivre la progression de la lecture audio */}
      <div className="progress-container">
        <progress id="progressBar" value="0" max="100"></progress>
      </div>
    </div>
  );
};

// Exporter le composant pour une utilisation dans d'autres parties de l'application
export default AudioPlayer;


 