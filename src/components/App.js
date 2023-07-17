import { Button, Container } from "@mui/joy";
import React, { useEffect, useState } from "react";
import PlaylistDisplay from "./PlaylistDisplay";
import SongDisplay from "./SongDisplay";
import NewPlaylist from "./NewPlaylist";
import NewSong from "./NewSong";
import EditPlaylistName from "./EditPlaylistName";

function App(){
    const [playlistData, setPlaylistData] = useState([]);
    const [playlistArr, setPlaylistArr ]= useState([]);
    const [currentPlaylist, setCurrentPlaylist] = useState('');
    const [currentPlaylistData, setCurrentPlaylistData] = useState({})
    const [editPlaylist, setEditPlaylist] = useState({})

    const [editNameForm, setEditNameForm] = useState('none')
    const [newPlFormDisplay, setNewPlFormDisplay] = useState('none')
    const [newSongFormDisplay, setNewSongFormDisplay] = useState('none')
    const buttonSx = {
        position:"relative",
        top:'14vh',
        margin:'5px'
    }

    useEffect(() => {
        fetch('http://localhost:9292/playlists')
        .then(r => r.json())
        .then(data => {
            setPlaylistData(data)
            setPlaylistArr(data.map(pl => pl.playlist))
        })
    }, [])

    function toggleFormDispaly(e){
        return e.target.id === "createPlButton" ? setNewPlFormDisplay('block') : setNewSongFormDisplay('block');
    }

    function updatePlaylistArr(newPlaylist){
        const newPlaylistArr = [...playlistArr, newPlaylist]
        setPlaylistArr(newPlaylistArr)
        setNewPlFormDisplay('none')
    }

    function openSongs(playlist){
        const pl = playlistData.filter(pl => pl.playlist.id === playlist.id)[0];
        setCurrentPlaylistData(pl)
        setCurrentPlaylist(playlist)
    }

    function toggleEditNameForm(playlistData){
        setEditPlaylist(playlistData)
        return editNameForm === 'none' ? setEditNameForm('block') : setEditNameForm('none')
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
        <NewPlaylist updatePlaylistArr={updatePlaylistArr} display={newPlFormDisplay} closeForm={() => setNewPlFormDisplay('none')}/>
        <NewSong display={newSongFormDisplay}/>
        <EditPlaylistName display={editNameForm} closeForm={toggleEditNameForm} playlist={editPlaylist}/>
        <SongDisplay openEditNameForm={toggleEditNameForm} currentPlaylistData={currentPlaylistData} currentPlaylist={currentPlaylist}/>
        <PlaylistDisplay openSongs={openSongs} playlistArr={playlistArr}/>
    </Container>
)
}

export default App;