import { Button, Container } from "@mui/joy";
import React, { useEffect, useState } from "react";
import PlaylistDisplay from "./PlaylistDisplay";
import SongDisplay from "./SongDisplay";
import NewPlaylist from "./NewPlaylist";
import NewSong from "./NewSong";

function App(){
    const [playlistData, setPlaylistData] = useState([]);
    const [newPlFormDisplay, setNewPlFormDisplay] = useState('none')
    const [newSongFormDisplay, setNewSongFormDisplay] = useState('none')
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

    function toggleFormDispaly(e){
        return e.target.id === "createPlButton" ? setNewPlFormDisplay('block') : setNewSongFormDisplay('block');
    }

return (
    <Container sx={{border:"1px solid black"}}>
        <Button 
        id="createPlButton"
        onClick={toggleFormDispaly} 
        sx={buttonSx}
        >
            Create Playlist
            </Button>
        <Button 
        id="createSongButton"
        onClick={toggleFormDispaly} 
        sx={buttonSx}
        >
            Add Song
            </Button>
        <NewPlaylist display={newPlFormDisplay}/>
        <NewSong display={newSongFormDisplay}/>
        <SongDisplay/>
        <PlaylistDisplay playlistArr={playlistArr}/>
    </Container>
)
}

export default App;