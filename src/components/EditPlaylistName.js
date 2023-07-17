import React from "react";
import '../styles/form.css'
import { Button, Textarea } from "@mui/joy";

function EditPlaylistName({display, closeForm, playlist, updatePlNameState}){
    const txtVal = 'PLAYLIST NAME HAS CHANGED'

    function handleSubmit(e){
        e.preventDefault()
        fetch(`http://localhost:9292/playlists/${playlist.id}`, {
            method:"PATCH",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({name:txtVal})
        })
        .then(r => r.json())
        .then(data => updatePlNameState(data))
    }

    return (
        <div className="formContainer" style={{display:display}}>
            <form onSubmit={handleSubmit} className="form">
                <Textarea 
                value={txtVal}
                placeholder="New Playlist Name"/>
                <Button type="submit" sx={{marginTop:"10px"}}>Submit</Button>
                <Button onClick={closeForm} sx={{marginLeft:"10px"}}>Close</Button>
            </form>
            
        </div>
    )
}

export default EditPlaylistName;