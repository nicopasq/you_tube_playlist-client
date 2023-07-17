import { Typography } from "@mui/joy";
import React from "react";

function PlaylistDisplay({playlistArr, openSongs}){
    const playlistLi = playlistArr.map(playlist => {
        return (
            <li onClick={() => openSongs(playlist)} className="playlistLi" key={playlist.id}>
                <Typography level='h5'>{playlist.name}</Typography>
            </li>
        )
    })
    return (
        <div style={{border:"1px solid black", height:'40vh', width:'15vw', position:'relative', top:'-25.5vh'}}>
            <Typography sx={{borderBottom:'3px solid black'}}level='h4'>Playlists</Typography>
            <ul style={{listStyle:"none", overflowY:"scroll",height:'35vh', position:'relative', bottom:'1vh'}}>
                {playlistLi}
            </ul>
        </div>
        )
}

export default PlaylistDisplay;