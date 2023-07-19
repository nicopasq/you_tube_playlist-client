import { Button, Textarea } from "@mui/joy";
import React, { useState } from "react";
import "../styles/form.css";

function NewPlaylist({ display, updatePlaylistArr, closeForm }) {
  const [plNameInput, setPlNameInput] = useState("");

  function createPlaylist(e) {
    e.preventDefault();
    const newPlaylist = { name: plNameInput };
    fetch("http://localhost:9292/playlists", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlaylist),
    })
      .then((r) => r.json())
      .then((data) => {
        updatePlaylistArr(data);
        setPlNameInput("");
      });
  }

  return (
    <div className="formContainer" style={{ display: display }}>
      <form onSubmit={createPlaylist} className="form">
        <Textarea
          value={plNameInput}
          onChange={(e) => setPlNameInput(e.target.value)}
          placeholder="Playlist Name"
        />
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

export default NewPlaylist;
