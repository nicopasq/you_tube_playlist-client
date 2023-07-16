import { Button, Container, Typography } from "@mui/joy";
import React from "react";
import PlaylistDisplay from "./PlaylistDisplay";
import SongDisplay from "./SongDisplay";

function App(){
    const buttonSx = {
        position:"relative",
        top:'14vh',
        margin:'5px'
    }
return (
    <Container sx={{border:"1px solid black"}}>
        <Button sx={buttonSx}>Create Playlist</Button>
        <Button sx={buttonSx}>Add Song</Button>
        <SongDisplay/>
        <PlaylistDisplay/>
    </Container>
)
}

export default App;