import { Button, Divider, Grid, Stack, Typography } from "@mui/joy";
import { styled } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import React from "react";

function SongDisplay({currentPlaylist, openEditNameForm}){
    const songArr = currentPlaylist.songs ? currentPlaylist.songs : [];
    const plName = currentPlaylist.playlist ? currentPlaylist.playlist.name : '';
    const stackDisp = plName ? 'true' : 'hidden';
    const Item = styled(Sheet)(({ theme }) => ({
        backgroundColor:
          theme.palette.mode === "dark" ? theme.palette.background.level1 : "#fff",
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: "center",
        borderRadius: 4,
      }));
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

    function deletePlaylist(id){}
    
    function editPlaylist(e){
        return e.target.id === 'changeName' ? openEditNameForm() : deletePlaylist(currentPlaylist.playlist.id)
    }

    return (
        <div id="songDisplay" style={{border:"1px solid black", height:'40vh', width:'40vw', position:'relative', top:'15vh', left:'30%'}}>
            <Grid container spacing={2} visibility={stackDisp} sx={{flexGrow: 1 }}>
                <Grid xs={8}>
                    <Typography level="h2">{plName}</Typography>
                </Grid>
                <Grid xs={4}>
                <Stack
            direction="row"
            divider={<Divider orientation="vertical" />}
            spacing={2}
            justifyContent="center"
            sx={{ margin: "10px" }}
          >
            <Item
              id="changeName"
              sx={{ color: "blue" }}
              onClick={editPlaylist}
            >
              Change Playlist Name
            </Item>
            <Item
              id="delete"
              sx={{ color: "red" }}
              onClick={editPlaylist}
            >
              Delete Playlist
            </Item>
          </Stack>
                </Grid>
            </Grid>
            <ul style={{listStyle:"none", overflowY:"scroll", overflowX:"hidden", height:"30vh", width:'94%'}}>
                {songLi}
            </ul>
        </div>
    )
}

export default SongDisplay;