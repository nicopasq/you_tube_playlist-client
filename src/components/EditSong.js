import { Button, Textarea } from "@mui/joy";
import React, { useState } from "react";
import '../styles/editSongForm.css'

function EditSong({display, closeEditSong, songId}){
    const updatedSong = {
        song_title:'New Song Name',
        artist:'New Artist',
        album:'New Album',
        url:"https://THISisAnewFAKEurl.com"
    };
    const {song_title, artist, album, url} = updatedSong;
    
    function handleSubmit(e){
        e.preventDefault()
        fetch(`http://localhost:9292/songs/${songId}`, {
            method:"PATCH",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(updatedSong)
        })
        .then(r => r.json())
        .then(data => console.log('New Song:', data))
    }


    return (
        <div id="editSongFormContainer" style={{ display: display }}>
          <form onSubmit={handleSubmit} id="editSongForm">
            <Textarea
            readOnly={true}
              defaultValue={song_title}
              className="newSongInput"
              placeholder="Song Title"
            />
            <Textarea
            readOnly={true}
              defaultValue={artist}
              className="newSongInput"
              placeholder="Artist"
            />
            <Textarea
            readOnly={true}
              defaultValue={album}
              className="newSongInput"
              placeholder="Album"
            />
            <input
            readOnly={true}
              defaultValue={url}
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