import React, { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css'; // Import the default styles
import audio1 from '../audios/believe.mp3'
import audio2 from '../audios/love.mp3'
import {GrChapterPrevious,GrChapterNext} from 'react-icons/gr'

const songs = [
  {
    src: audio1,
    title: 'Believe in yourself',
    artist: 'Onoychenkomusic',
  },
  {
    src: audio2,
    title: 'Leva - Eternity',
    artist: 'lemonmusicstudio',
  },
  // Add more songs as needed
];

const MusicPlayer = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const handleNext = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };

  const handlePrevious = () => {
    setCurrentSongIndex(
      (prevIndex) => (prevIndex - 1 + songs.length) % songs.length
    );
  };

  return (
    <div className="music-player bg-gradient-to-b from-pink-600 to-pink-300">
      <AudioPlayer
        autoPlay
        src={songs[currentSongIndex].src}
        header={
          <div className="audio-header">
            <h2>{songs[currentSongIndex].title}</h2>
            <h3>{songs[currentSongIndex].artist}</h3>
          </div>
        }
      />
      <div className="controls">
        <button  className=' buttonaudio' onClick={handlePrevious}><GrChapterPrevious className=' text-pink-500 hover:text-white'/></button>
        <button  className=' buttonaudio' onClick={handleNext}><GrChapterNext className=' text-pink-500 hover:text-white'/></button>
      </div>
    </div>
  );
};

export default MusicPlayer;
