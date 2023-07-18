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
        const newPlaylistHash = [...playlistData, {playlist:newPlaylist, songs:[]}]
        setPlaylistArr(newPlaylistArr)
        setPlaylistData(newPlaylistHash)
        setNewPlFormDisplay('none')
    }

    function openSongs(playlist){
        const pl = playlistData.filter(pl => pl.playlist.id === playlist.id)[0];
        setCurrentPlaylistData(pl)
    }

    function toggleEditNameForm(playlistData){
        setEditPlaylist(playlistData)
        return editNameForm === 'none' ? setEditNameForm('block') : setEditNameForm('none')
    }

    function updatePlNameState(patchedPlaylist){
        const updatedPlaylistArr = playlistArr.map(playlist => {
            if (playlist.id === patchedPlaylist.id){
                playlist.name = patchedPlaylist.name
            }
           return playlist
        })
        setPlaylistArr(updatedPlaylistArr)
    }

    function removePlaylist(id){
        const updatedPlaylistData = playlistData.filter(pl => pl.playlist.id !== id)
        setPlaylistData(updatedPlaylistData)
        setCurrentPlaylistData({})
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
        <EditPlaylistName display={editNameForm} closeForm={toggleEditNameForm} playlist={editPlaylist} updatePlNameState={updatePlNameState}/>
        <SongDisplay openEditNameForm={toggleEditNameForm} currentPlaylistData={currentPlaylistData} removePlaylist={removePlaylist}/>
        <PlaylistDisplay openSongs={openSongs} playlistData={playlistData}/>
    </Container>
)
}

export default App;