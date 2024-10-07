import scss from './player.module.scss';
import { FC, useEffect, useRef, useState } from 'react';
import {
  IconBack,
  IconDinamic,
  IconNext,
  IconPlay,
  IconPlaying,
} from '../../assets/icons';

interface TypeProps {
  url: string | null;
  name: string;

  lastName: string;
  image: string;
}

const Player: FC<TypeProps> = ({ url, name, lastName, image }) => {
  const [isMusic, setIsMusic] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTime, setCurrentTime] = useState<number | undefined>(0);
  const [duration, setDuration] = useState<number | undefined>(0);
  const [sliderValue, setSliderValue] = useState(0);
  const [volume, setVolume] = useState(1);

  const toggleAudio = () => {
    if (audioRef.current?.paused) {
      audioRef.current.play();
      setIsMusic(true);
    } else {
      audioRef.current?.pause();
      setIsMusic(false);
    }
  };

  const updateTime = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setSliderValue((audioRef.current.currentTime / duration!) * 100);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener('timeupdate', updateTime);
    }

    return () => {
      if (audio) {
        audio.removeEventListener('timeupdate', updateTime);
      }
    };
  }, []);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = (value / 100) * duration!;
      setCurrentTime(audioRef.current.currentTime);
    }
  };
  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);
    if (audioRef.current) {
      audioRef.current.volume = value;
      setVolume(value);
    }
  };

  return (
    <div className={scss.Player}>
      <div className={scss.test}>
        <div className={scss.music}>
          <img src={image} alt='' />
          <div className={scss.title}>
            <h2>{name}</h2>
            <p>{lastName}</p>
          </div>
        </div>
        <div className={scss.contaienr_panel}>
          <audio
            onLoadedMetadata={handleLoadedMetadata}
            controls
            style={{ display: 'none' }}
            ref={audioRef}
            autoPlay={true}
            onPlay={() => {
              setIsMusic(true);
            }}
            onPause={() => {
              setIsMusic(false);
            }}
          >
            <source src={url != null ? url : ''} type='audio/mpeg' />
          </audio>
          <div className={scss.control_music}>
            <div className={scss.control_icons}>
              <div className={scss.box}>
                <button>
                  <IconBack />
                </button>
              </div>
              <div className={scss.box}>
                <div className={scss.controled} onClick={() => toggleAudio()}>
                  {isMusic ? <IconPlaying /> : <IconPlay />}
                </div>
              </div>
              <div className={scss.box}>
                <button>
                  <IconNext />
                </button>
              </div>
            </div>
            <div className={scss.control_line}>
              <span>{formatTime(currentTime!)}</span>
              <div className={scss.line}>
                <input
                  type='range'
                  value={sliderValue}
                  onChange={handleSliderChange}
                />
              </div>
              <span>0:{Math.floor(duration!)}</span>
            </div>
          </div>
          <div className={scss.control_dinamic}>
            <span>
              <IconDinamic />
            </span>
            <input
              type='range'
              step='0.02'
              min='0'
              max={'1'}
              value={volume}
              onChange={handleVolumeChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
