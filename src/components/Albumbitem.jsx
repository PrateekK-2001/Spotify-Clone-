import React from 'react';
import { useNavigate } from 'react-router-dom';

// Apply prop
const AlbumItem = ({ name, image, desc, id }) => {
  const navigate = useNavigate();

  return (
    // When clicked, navigate to the album page with the specific id
    <div
      onClick={() => navigate(`/album/${id}`)}
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]"
    >
      {/* Display the image passed via props */}
      <img className="rounded" src={image} alt={name} />
      {/* Album name */}
      <p className="font-bold mt-2 mb-1">{name}</p>
      {/* Album description */}
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  );
};

export default AlbumItem;
