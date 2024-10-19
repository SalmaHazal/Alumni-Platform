import React, { useEffect, useRef, useState } from "react";
import Player from "./Player";
import Song from "./Song";
import Library from "./Library";
import Nav from "./Nav";
import UploadSong from "./UploadSong";
import axios from "axios";

function App() {
  const [songs, setSongs] = useState([{songName: "No Songs yet", artistName: "Upload a song to let the others sing", cover: null, songFile: null}]);
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
      <UploadSong uploadStatus={uploadStatus} setUploadStatus={setUploadStatus} setSongs={setSongs} />
      { songs.length > 0 ? <Song currentSong={currentSong} /> : "No songs available"}
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

export default App;
