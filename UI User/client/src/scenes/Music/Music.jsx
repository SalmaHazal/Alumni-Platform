import React, { useEffect, useRef, useState } from "react";
import Player from "./Player";
import Song from "./Song";
import Library from "./Library";
import Nav from "./Nav";
import UploadSong from "./UploadSong";
import axios from "axios";
import { FaMusic } from "react-icons/fa";
import { useTheme, useMediaQuery } from "@mui/material";

function Music() {
  const { palette } = useTheme();
  const [songs, setSongs] = useState([
    {
      songName: "No Songs yet",
      artistName: "Upload a song to let the others sing",
      cover: null,
      songFile: null,
    },
  ]);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [libraryStatus, setLibraryStatus] = useState(false);
  const [uploadStatus, setUploadStatus] = useState(false);
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animationPercentage = Math.round(
      (roundedCurrent / roundedDuration) * 100
    );
    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration,
      animationPercentage,
    });
  };
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    if (isPlaying) audioRef.current.play();
  };
  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/getSong");
        setSongs(response.data);
        if (response.data.length > 0) {
          setCurrentSong(response.data[0]);
        }
        console.log("Fetched songs:", response.data);
      } catch (error) {
        console.error("Error fetching songs:", error);
      }
    };

    fetchSongs();
  }, []);

  return (
    <div className={`App ${libraryStatus ? "library-active" : ""} `}>
      <Nav
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
        uploadStatus={uploadStatus}
        setUploadStatus={setUploadStatus}
      />
      <Library
        audioRef={audioRef}
        songs={songs}
        setSongs={setSongs}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
      />
      <UploadSong
        uploadStatus={uploadStatus}
        setUploadStatus={setUploadStatus}
        setSongs={setSongs}
      />
      {songs.length > 0 ? (
        <Song currentSong={currentSong} />
      ) : (
        <div className="no-songs-available flex flex-col items-center justify-center h-full text-center px-6 py-32">
          <FaMusic className="text-6xl text-blue-700 mb-4" />
          <h2
            className={`text-2xl font-semibold mb-2 ${
              palette.mode === "dark" ? "text-white" : "text-gray-700"
            }`}
          >
            No Songs Available
          </h2>
          <p
            className={`${
              palette.mode === "dark" ? "text-white" : "text-gray-600"
            }`}
          >
            Upload some music to get started!
          </p>
          <button
            onClick={() => setUploadStatus(true)}
            className="mt-6 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
          >
            Upload a Song
          </button>
        </div>
      )}
      <Player
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        songs={songs}
        setSongs={setSongs}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={`http://localhost:3001/songs/${currentSong.songFile}`}
        onEnded={songEndHandler}
      ></audio>
    </div>
  );
}

export default Music;
