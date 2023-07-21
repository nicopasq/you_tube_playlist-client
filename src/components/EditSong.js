import { Button, Textarea } from "@mui/joy";
import React from "react";
import '../styles/editSongForm.css'

function EditSong({display, closeEditSong}){

    function handleSubmit(e){
        e.preventDefault()
    }


    return (
        <div id="editSongFormContainer" style={{ display: display }}>
          <form onSubmit={handleSubmit} id="editSongForm">
            <Textarea
              name="song_title"
              value='New Song Title'
              className="newSongInput"
              placeholder="Song Title"
            />
            <Textarea
              name="artist"
              value='New Artist'
              className="newSongInput"
              placeholder="Artist"
            />
            <Textarea
              name="album"
              value='New Album'
              className="newSongInput"
              placeholder="Album"
            />
            <input
              name="url"
              value="https://THISisAnewFAKEurl.com"
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