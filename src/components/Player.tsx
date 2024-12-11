import { Howl } from 'howler';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import songs from '@/constants/songs';
import { isPlayingState, setIsPlayingState } from '@/store/player';

import nextIcon from '~/images/next.svg';
import pauseIcon from '~/images/pause.svg';
import playIcon from '~/images/play.svg';
import prevIcon from '~/images/prev.svg';

const Player = () => {
  const isPlaying = useRecoilValue(isPlayingState);
  const [_, setIsPlaying] = useRecoilState(setIsPlayingState);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false);
  const [audio, setAudio] = useState(
    new Howl({ src: songs[0].url, onend: () => nextSongRef.current?.click() })
  );
  const nextSongRef = useRef<HTMLButtonElement>(null);
  const handleImageClick = () => {
    setIsExpanded(!isExpanded);
  };
  useEffect(() => {
    const image = document.querySelector('.animate-spin') as HTMLElement;
    if (image) {
      image.style.animationPlayState = !isPlaying ? 'paused' : 'running';
    }
  }, [isPlaying]);

  const handlePlayPauseClick = () => {
    setIsPlaying((v) => {
      if (!v) {
        audio.play();
      } else {
        audio.pause();
      }
      return !v;
    });
  };
  useEffect(() => {
    if (isInitialized) {
      audio.load();
      audio.play();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [audio]);

  useEffect(() => {
    setIsInitialized(true);
  }, []);
  const handleSongChange = (direction: string) => {
    audio.unload();
    const index =
      direction === 'next'
        ? (currentSongIndex + 1) % songs.length
        : (currentSongIndex - 1 + songs.length) % songs.length;
    setAudio(
      new Howl({
        src: songs[index].url,
        onend: () => {
          nextSongRef.current?.click();
        },
      })
    );
    setCurrentSongIndex(index);
    setIsPlaying(true);
  };
  return (
    <div
      className={`fixed bottom-4 rounded-full right-4 ${
        isExpanded ? 'w-52 pr-2' : 'w-16 h-16 pr-0'
      } rounded-full bg-gray-900 bg-opacity-75 flex items-center justify-between transition-all duration-500`}
    >
      <div className='rounded-full overflow-hidden mr-0'>
        <Image
          src={songs[currentSongIndex].cover}
          alt={songs[currentSongIndex].title}
          onClick={handleImageClick}
          width={64}
          height={64}
          style={{
            animationDuration: '4s',
            animationPlayState: 'paused',
          }}
          className='animate-spin w-16 h-16'
        />
      </div>
      <div className={`flex items-center ${!isExpanded ? 'hidden' : ''}`}>
        <button
          className={`w-8 h-8 rounded-full bg-white text-gray-800 flex items-center justify-center focus:outline-none hover:bg-gray-500 hover:text-white ${
            currentSongIndex === 0
              ? 'opacity-50 cursor-not-allowed pointer-events-none'
              : ''
          }`}
          onClick={() => handleSongChange('prev')}
          disabled={currentSongIndex === 0}
        >
          <Image
            src={prevIcon}
            alt='Prev'
            width={16}
            height={16}
            className={`transform hover:scale-125 ${
              currentSongIndex === 0
                ? 'opacity-50 cursor-not-allowed pointer-events-none'
                : ''
            }`}
          />
        </button>
        <button
          className='w-8 h-8 rounded-full bg-white text-gray-800 flex items-center justify-center ml-2 focus:outline-none hover:bg-gray-500 hover:text-white'
          onClick={handlePlayPauseClick}
          style={{ transform: isPlaying ? 'scale(1.2)' : 'scale(1)' }}
        >
          <Image
            src={isPlaying ? pauseIcon : playIcon}
            alt={isPlaying ? 'Pause' : 'Play'}
            width={16}
            height={16}
          />
        </button>
        <button
          className={`w-8 h-8 rounded-full bg-white text-gray-800 flex items-center justify-center ml-2 focus:outline-none hover:bg-gray-500 hover:text-white ${
            currentSongIndex === songs.length - 1
              ? 'opacity-50 cursor-not-allowed pointer-events-none'
              : ''
          }`}
          ref={nextSongRef}
          onClick={() => handleSongChange('next')}
          disabled={currentSongIndex === songs.length - 1}
        >
          <Image
            src={nextIcon}
            alt='Next'
            width={16}
            height={16}
            className={`transform hover:scale-125 ${
              currentSongIndex === songs.length - 1
                ? 'opacity-50 cursor-not-allowed pointer-events-none'
                : ''
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default Player;
