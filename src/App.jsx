import React, { useContext } from 'react';
import Sidebar from './components/Sidebar'; // Ensure the file exists
import Player from './components/Player';   // Ensure the file exists
import Display from './components/Display'; // Ensure the file exists
import { PlayerContext } from './context/PlayerContext'; // Ensure the import is correct

const App = () => {
  const { audioRef, track } = useContext(PlayerContext);

  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sidebar />
        <Display />
      </div>
      <div>
        <Player />
        <audio 
          ref={audioRef} 
          src={track?.file} // Optional chaining to handle undefined track
          preload='auto'   // Fixed typo from 'prelode' to 'preload'
        ></audio>
      </div>
    </div>
  );
};

export default App;
