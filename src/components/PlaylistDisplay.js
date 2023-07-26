import { Typography } from "@mui/joy";
import React from "react";
import { Link } from "react-router-dom";

function PlaylistDisplay({ playlistArr, openSongs }) {
    const playlistLinkStyle = {
        color:"black",
        fontSize:"20px",
        textDecoration:"none"
    }
  const playlistLi = playlistArr.map((playlist) => {
    return (
      <Link id={playlist.name} style={playlistLinkStyle} to={`/playlists/${playlist.name}`}>
        <li
          onClick={() => openSongs(playlist.id)}
          className="playlistLi"
          key={playlist.id}
        >
          {playlist.name}
        </li>
      </Link>
    );
  });

  return (
    <div
      style={{
        border: "1px solid black",
        height: "40vh",
        width: "15vw",
        position: "relative",
        top: "-25.5vh",
      }}
    >
      <Typography sx={{ borderBottom: "3px solid black" }} level="h4">
        Playlists
      </Typography>
      <ul
        style={{
          listStyle: "none",
          overflowY: "scroll",
          height: "35vh",
          position: "relative",
          bottom: "1vh",
        }}
      >
        {playlistLi}
      </ul>
    </div>
  );
}

export default PlaylistDisplay;
