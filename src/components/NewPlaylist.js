import { Button, Textarea } from "@mui/joy";
import React from "react";
import '../styles/form.css'

function NewPlaylist({display}){
    return (
        <div className="formContainer" style={{display:display}}>
            <form  className="createForm">
                <Textarea placeholder="Playlist Name"/>
                <Button type="submit" sx={{marginTop:"10px"}}>Submit</Button>
                <Button /*onClick={closeForm} */ sx={{marginLeft:"10px"}}>Close</Button>
            </form>
            
        </div>
    )
}

export default NewPlaylist;