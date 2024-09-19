import React, { useEffect, useRef } from 'react'; // Added useEffect import
import DispalyAlbum from './DispalyAlbum';
import Displayhome from './Displayhome';
import { Route, Routes, useLocation } from 'react-router-dom';
import { albumsData } from '../assets/assets';

const Dispaly = () => {
  const displayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes('album');
  const albumId = isAlbum ? location.pathname.split('/').pop() : ''; // Extract album ID correctly
  const bgColor = albumsData[Number(albumId)]?.bgColor || '#121212'; // Default to #121212 if bgColor is not found

  useEffect(() => {
    if (isAlbum && albumsData[Number(albumId)]) {
      displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`;
    } else {
      displayRef.current.style.background = '#121212';
    }
  }, [location, isAlbum, albumId, bgColor]); // Added bgColor to dependencies

  return (
    <div ref={displayRef} className='w-[100%] px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:ml-0'>
      <Routes>
        <Route path='/' element={<Displayhome />} />
        <Route path='/album/:id' element={<DispalyAlbum />} />
      </Routes>
    </div>
  );
};

export default Dispaly;
