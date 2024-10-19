import React from "react";

const Song = ({ currentSong }) => {
  return (
    <div className="flex flex-col items-center text-center p-20 bg-white shadow-lg h-[60vh]">
      {/* Song Cover Image */}
      <img
        src={`http://localhost:3001/covers/${currentSong.cover}`}
        className="  md:w-48 md:h-48 object-cover shadow-md mb-8"
      />

      {/* Song Name */}
      <h2 className="text-l font-semibold text-gray-800 mb-2">
        {currentSong.songName}
      </h2>

      {/* Song Artist */}
      <h3 className="text-[25px] mt-[15px] text-gray-600">{currentSong.artistName}</h3>
    </div>
  );
};

export default Song;
