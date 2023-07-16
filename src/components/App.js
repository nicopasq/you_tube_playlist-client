import { Button, Container } from "@mui/joy";
import React, { useEffect, useState } from "react";
import PlaylistDisplay from "./PlaylistDisplay";
import SongDisplay from "./SongDisplay";

function App(){
    const [playlistData, setPlaylistData] = useState([]);
    const playlistArr = playlistData.map(playlist => playlist.playlist);
    const buttonSx = {
        position:"relative",
        top:'14vh',
        margin:'5px'
    }

    useEffect(() => {
        fetch('http://localhost:9292/playlists')
        .then(r => r.json())
        .then(data => setPlaylistData(data))
    }, [])

return (
    <Container sx={{border:"1px solid black"}}>
        <Button sx={buttonSx}>Create Playlist</Button>
        <Button sx={buttonSx}>Add Song</Button>
        <SongDisplay/>
        <PlaylistDisplay playlistArr={playlistArr}/>
    </Container>
)
}

export default App;