import { Button, Textarea } from "@mui/joy";
import React from "react";
import '../styles/editSongForm.css'

function EditSong({display, closeEditSong}){
    return (
        <div id="editSongFormContainer" style={{ display: display }}>
          <form id="editSongForm">
            <Textarea
              name="song_title"
              className="newSongInput"
              placeholder="Song Title"
            />
            <Textarea
              name="artist"
              className="newSongInput"
              placeholder="Artist"
            />
            <Textarea
              name="album"

              className="newSongInput"
              placeholder="Album"
            />
            <input
              name="url"
              className="newSongInput"
              type="url"
              placeholder="YouTube URL"
            />
            <Button type="submit" sx={{ marginTop: "10px" }}>
              Submit
            </Button>
            <Button onClick={closeEditSong} sx={{ marginLeft: "10px" }}>
              Close
            </Button>
          </form>
        </div>
      );
}

export default EditSong;