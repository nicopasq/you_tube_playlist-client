import React, { useState } from "react";
import "../styles/form.css";
import { Button, Textarea } from "@mui/joy";

function NewSong({ display, closeForm, playlist, addSongToDisplay }) {
  const [newSongBody, setNewSongBody] = useState({
    song_title: "",
    artist: "",
    url: "",
    playlist_id: 0,
    album: "",
  });
  const { song_title, artist, url, album, playlist_id } = newSongBody;
  const playlistOptions = playlist.map((pl) => {
    if (pl.name !== '') {
      return <option key={pl.id}>{pl.name}</option>;
    }
    return null
  });

  function updateNewSongBody(e) {
    if (e.target.name === "playlist_id") {
      const songPlaylistId = playlist.filter((pl) =>
        pl.name === e.target.value ? pl : null
      )[0].id;
      setNewSongBody({ ...newSongBody, playlist_id: songPlaylistId });
    } else {
      setNewSongBody({ ...newSongBody, [e.target.name]: e.target.value });
    }
  }

  function addSong(e) {
    e.preventDefault();
    if(newSongBody.playlist_id !== 0){
    fetch("http://localhost:9292/songs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSongBody),
    })
      .then((r) => r.json())
      .then((data) => {
        if(data !== "This song is already in this playlist."){
          addSongToDisplay(data, playlist_id)
        } else {
          alert("This song is already in this playlist.")
        }
      });
    } else {
      alert("Please select a playlist")
    }
  }

  return (
    <div className="formContainer" style={{ display: display }}>
      <form className="form" onSubmit={addSong}>
        <Textarea
          name="song_title"
          onChange={updateNewSongBody}
          value={song_title}
          className="newSongInput"
          placeholder="Song Title"
        />
        <Textarea
          name="artist"
          onChange={updateNewSongBody}
          value={artist}
          className="newSongInput"
          placeholder="Artist"
        />
        <Textarea
          name="album"
          onChange={updateNewSongBody}
          value={album}
          className="newSongInput"
          placeholder="Album"
        />
        <input
          name="url"
          onChange={updateNewSongBody}
          value={url}
          className="newSongInput"
          type="url"
          placeholder="YouTube URL"
        />
        <select
          name="playlist_id"
          onChange={updateNewSongBody}
          id="playlistId"
          className="newSongInput"
        >
          <option>Select Playlist</option>
          {playlistOptions}
        </select>
        <Button type="submit" sx={{ marginTop: "10px" }}>
          Submit
        </Button>
        <Button onClick={closeForm} sx={{ marginLeft: "10px" }}>
          Close
        </Button>
      </form>
    </div>
  );
}

export default NewSong;
