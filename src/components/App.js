import { Button, Container, Typography } from "@mui/joy";
import React from "react";

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
        <div style={{border:"1px solid black", height:'40vh', width:'40vw', position:'relative', top:'15vh', left:'30%'}}>
            <Typography level="h1">SONG DISPLAY</Typography>
        </div>
        <div style={{border:"1px solid black", height:'40vh', width:'15vw', position:'relative', top:'-25.5vh'}}>
            <Typography level="h1">PlAYLIST DISPLAY</Typography>
        </div>
    </Container>
)
}

export default App;