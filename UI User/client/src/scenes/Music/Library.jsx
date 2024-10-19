import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
  setLibraryStatus,
}) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 transition-opacity ${
        libraryStatus ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      {/* Modal content */}
      <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-lg p-6">
        {/* Close button */}
        <button
          onClick={() => setLibraryStatus(false)}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        >
          &times;
        </button>

        {/* Library heading */}
        <h2 className="text-2xl font-bold mb-4 text-center">Library</h2>

        {/* Library songs list */}
        <div className="library-songs max-h-96 overflow-y-auto">
          {songs.map((song) => (
            <LibrarySong
              songs={songs}
              setSongs={setSongs}
              setCurrentSong={setCurrentSong}
              song={song}
              key={song.id}
              audioRef={audioRef}
              isPlaying={isPlaying}
              setLibraryStatus={setLibraryStatus}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Library;
