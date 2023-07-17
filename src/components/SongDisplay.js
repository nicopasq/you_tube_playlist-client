import { Button, Grid, Typography } from "@mui/joy";
import React from "react";

function SongDisplay({songArr}){
    const songLi = songArr.map(song => {
        return (
            <li key={song.id}>
            <Grid container spacing={4} sx={{flexGrow: 1, borderBottom:'1px solid black' }}>
                <Grid xs={2}>
                    <Typography level="h5">Title</Typography>
                    <Typography level="body1">{song.song_title}</Typography>
                </Grid>
                <Grid xs={2}>
                    <Typography level="h5">Artist</Typography>
                    <Typography level="body1">{song.artist}</Typography>
                </Grid>
                <Grid xs={4}>
                    <Typography level="h5">Album</Typography>
                    <Typography level="body1">{song.album}</Typography>
                </Grid>
                <Grid xs={2}>
                    <Typography level="h5">Link</Typography>
                    <a href={song.link}>
                    <Button>Click to Listen</Button>
                    </a>
                </Grid>
            </Grid>
            </li>
        )
    })
    return (
        <div id="songDisplay" style={{border:"1px solid black", height:'40vh', width:'40vw', position:'relative', top:'15vh', left:'30%'}}>
            <ul style={{listStyle:"none", overflowY:"scroll", overflowX:"hidden", height:"38vh", width:'94%'}}>
                {songLi}
            </ul>
        </div>
    )
}

export default SongDisplay;