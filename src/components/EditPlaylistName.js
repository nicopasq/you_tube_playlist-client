import React from "react";
import '../styles/form.css'
import { Button, Textarea } from "@mui/joy";

function EditPlaylistName({display, closeForm}){
    return (
        <div className="formContainer" style={{display:display}}>
            <form className="form">
                <Textarea 
                value='PLAYLIST NAME HAS CHANGED'
                placeholder="New Playlist Name"/>
                <Button type="submit" sx={{marginTop:"10px"}}>Submit</Button>
                <Button onClick={closeForm} sx={{marginLeft:"10px"}}>Close</Button>
            </form>
            
        </div>
    )
}

export default EditPlaylistName;