import React, { createContext, useEffect, useRef, useState } from 'react';
import { songsData } from '../assets/assets';

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  // creating a reference variable 
  const audioRef = useRef(); // pass into the app
  const seekBg = useRef(); // pass into the player.jsx
  const seekBar = useRef();

  const [track, setTrack] = useState(songsData[1]);
  const [playstatus, setPlaystatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second: 0,
      minute: 0,
    },
  });

  // create a function to play and pause the songs
  const play = () => {
    audioRef.current.play();
    setPlaystatus(true);
  };

  const pause = () => {
    audioRef.current.pause();
    setPlaystatus(false);
  };

  // add song finction 
  const playWithId = async(id)=>{
    await setTrack(songsData[id]);
    await audioRef.current.play();
    setPlaystatus(true);
  }

  // create a function to change the songs by arrow 

  const previos = async(id)=>{
    if(track.id>0){
      await setTrack(songsData[track.id-1]);
      await audioRef.current.play();
      setPlaystatus(true);
    }
  }

  //  change the next songs by arrow function
  const next = async(id)=>{
    if(track.id<songsData.length-1){
      await setTrack(songsData[track.id+1]);
      await audioRef.current.play();
      setPlaystatus(true);
    }
  }
  const seekSong = (e) => {
    // Correct the typo 'netiveEvent' to 'nativeEvent' and 'offssetX' to 'offsetX'
    const { nativeEvent } = e;
    
    // Calculate the new current time
    const newTime = (nativeEvent.offsetX / seekBg.current.offsetWidth) * audioRef.current.duration;
    
    // Set the current time of the audio
    audioRef.current.currentTime = newTime;
  };
  

  // Context value to be provided
  const contextValue = {
    audioRef,
    seekBar,
    seekBg,
    track,
    setTrack,
    playstatus,
    setPlaystatus,
    time,
    setTime,
    play,
    pause,
    playWithId,
    previos,
    next,
    seekSong
  };






  // Create the time management function for the song
  useEffect(() => {
    audioRef.current.ontimeupdate = () => {
        seekBar.current.style.width = (Math.floor((audioRef.current.currentTime / audioRef.current.duration) * 100)) + "%";


      setTime({
        currentTime: {
          second: Math.floor(audioRef.current.currentTime % 60), // Fixed 'math' to 'Math'
          minute: Math.floor(audioRef.current.currentTime / 60), // Fixed incorrect minute calculation
        },
        totalTime: {
          second: Math.floor(audioRef.current.duration % 60),
          minute: Math.floor(audioRef.current.duration / 60),
        },
      },1000);
    };
  }, [audioRef]);

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children} {/* Ensure this is `props.children` and not `props.Children` */}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
