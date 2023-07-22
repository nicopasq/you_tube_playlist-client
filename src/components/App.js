import { Button, Container } from "@mui/joy";
import React, { useEffect, useState } from "react";
import PlaylistDisplay from "./PlaylistDisplay";
import SongDisplay from "./SongDisplay";
import NewPlaylist from "./NewPlaylist";
import NewSong from "./NewSong";
import EditPlaylistName from "./EditPlaylistName";

function App() {
  const [playlistArr, setPlaylistArr] = useState([]);

  const [currentPlaylist, setCurrentPlaylist] = useState({});
  const [editPlaylist, setEditPlaylist] = useState({});
  const [editNameForm, setEditNameForm] = useState("none");
  const [newPlFormDisplay, setNewPlFormDisplay] = useState("none");
  const [newSongFormDisplay, setNewSongFormDisplay] = useState("none");
  const buttonSx = {
    position: "relative",
    top: "14vh",
    margin: "5px",
  };

  useEffect(() => {
    fetch("http://localhost:9292/playlists")
      .then((r) => r.json())
      .then((data) => {
        setPlaylistArr(data);
      });
  }, []);

  function toggleFormDispaly(e) {
    return e.target.id === "createPlButton"
      ? setNewPlFormDisplay("block")
      : setNewSongFormDisplay("block");
  }

  function updatePlaylistArr(newPlaylist) {
    const newPlaylistArr = [...playlistArr, newPlaylist];
    setPlaylistArr(newPlaylistArr);
    setNewPlFormDisplay("none");
  }

  function openSongs(id) {
    const pl = playlistArr.filter((pl) => pl.id === id)[0];
    setCurrentPlaylist(pl);
  }

  function toggleEditNameForm(playlistData) {
    setEditPlaylist(playlistData);
    return editNameForm === "none"
      ? setEditNameForm("block")
      : setEditNameForm("none");
  }

  function updatePlNameState(patchedPlaylist) {
    const updatedPlaylistData = playlistArr.map((pl) => {
      if (pl.id === patchedPlaylist.id) {
        pl.name = patchedPlaylist.name;
      }
      return pl;
    });
    setPlaylistArr(updatedPlaylistData);
  }

  function removePlaylist(id) {
    const updatedPlaylistData = playlistArr.filter(
      (pl) => pl.id !== id
    );
    setPlaylistArr(updatedPlaylistData);
    setCurrentPlaylist({});
    alert("Playlist Deleted");
  }

  function addSongToDisplay(newSong, id) {
    const targetPlaylist = playlistArr.filter(pl => pl.id === id)[0]
    const playlistWithNewSong = targetPlaylist.songs.push(newSong)
    const newPlaylistArr = playlistArr.filter(pl => pl.id === playlistWithNewSong.id ? pl = playlistWithNewSong : pl);
    setPlaylistArr(newPlaylistArr)
  }

  function updateSongDisplay(updatedSong){
    const updatedSongs = currentPlaylist.songs.map(song => {
      return song.id === updatedSong.id ? song = updatedSong : song
    })
    setCurrentPlaylist({...currentPlaylist, songs:updatedSongs})
  }

  return (
    <Container sx={{ border: "1px solid black" }}>
      <Button id="createPlButton" onClick={toggleFormDispaly} sx={buttonSx}>
        Create Playlist
      </Button>
      <Button id="createSongButton" onClick={toggleFormDispaly} sx={buttonSx}>
        Add Song
      </Button>
      <NewPlaylist
        updatePlaylistArr={updatePlaylistArr}
        display={newPlFormDisplay}
        closeForm={() => setNewPlFormDisplay("none")}
      />
      <NewSong
        closeForm={() => setNewSongFormDisplay("none")}
        display={newSongFormDisplay}
        playlist={playlistArr}
        addSongToDisplay={addSongToDisplay}
      />
      <EditPlaylistName
        display={editNameForm}
        closeForm={toggleEditNameForm}
        playlist={editPlaylist}
        updatePlNameState={updatePlNameState}
      />
      <SongDisplay
        openEditNameForm={toggleEditNameForm}
        currentPlaylist={currentPlaylist}
        removePlaylist={removePlaylist}
        updateSongDisplay={updateSongDisplay}
      />
      <PlaylistDisplay openSongs={openSongs} playlistArr={playlistArr} />
    </Container>
  );
}

export default App;
