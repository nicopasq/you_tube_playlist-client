import { Typography } from "@mui/joy";
import React from "react";

function PlaylistDisplay({playlistArr}){
    const playlistLi = playlistArr.map(playlist => {
        return (
            <li key={playlist.id}>
                <Typography level='h5'>{playlist.name}</Typography>
            </li>
        )
    })
    return (
        <div style={{border:"1px solid black", height:'40vh', width:'15vw', position:'relative', top:'-25.5vh'}}>
            <ul style={{listStyle:"none"}}>
                {playlistLi}
            </ul>
        </div>
        )
}

export default PlaylistDisplay;