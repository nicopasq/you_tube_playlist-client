import React from "react";
import '../styles/form.css'
import { Button, Textarea } from "@mui/joy";

function NewSong({display}){
    return (
        <div className="formContainer" style={{display:display}}>
        <form className="form">
            <Textarea className="newSongInput" placeholder="Song Title"/>
            <Textarea className="newSongInput" placeholder="Artist"/>
            <Textarea className="newSongInput" placeholder="Album"/>
            <input className="newSongInput" type="url" placeholder="YouTube URL"/>
            <select className="newSongInput">
                <option>Select Playlist</option>
            </select>
            <Button type="submit" sx={{marginTop:"10px"}}>Submit</Button>
            <Button sx={{marginLeft:"10px"}}>Close</Button>
        </form>
        
    </div>
    )
}

export default NewSong;