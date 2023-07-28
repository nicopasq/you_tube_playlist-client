# YouTube Music Playlist: Client

YouTube Music Playlist Client is the front-end part of a web application that allows users to create and manage playlists of their favorite YouTube videos. This application serves as the client-side component, which interacts with the YouTube Music Playlist Server API to get and update playlist.

## Features
- **Create Playlist:**
A form that allows a user to create a new playlist.
- **Edit Playlist:** 
A form that allows a user to change a playlist's name.
- **Delete Playlist:**
This will delete a playlist. It also deletes any associated songs from the db.
- **Add Song:**
A form that allows a user to add a new song to a playlist, if that song is not already in the playlist.
- **Edit Song:**
A form that allows a user to edit a song.
- **Delete Song:**
Deletes a song from a specific playlist.

## Demo
Check out a video demonstration of YouTube Music Playlist Client here.

## Getting Started 
Follow these steps to get YouTube Music Playlist Client running properly.

### Installation
1. Fork and clone this repository 

```git
git@github.com:nicopasq/you_tube_playlist-client.git
```

2. Install dependencies.

```npm
npm install
```

## Usage
Start the app.

```npm
npm start
```
**Playlist Actions**
1. To make a playlist, click on the 'Create Playlist' button, and enter the desired name for the new playlist. Click on a playlist name to open it.

2. To edit a playlist, open the playlist then click on edit playlist. Fill out the form for a new playlist name and submit. 

    Note - The form to edit a playlist name is already filled out for the purpose of this project. 

3. To delete a playlist, open the playlist then click on the 'Delete Playlist' button. An alert should show up, indicating a playlist was successfuly deleted.

**Song Actions**
1. To make a new song, click on the 'Add Song' button, and enter the song information to the form.

2. To edit a song, open the playlist that contains the desired song, click on the 'Edit Song' button on the desired song, then fill out the form and submit. 
    Note - The form to edit a song is already filled out for the purpose of this project. 

3. To delete a song, open the playlist that contains the desired song, click on the 'Delete Song' button. It will delete the song from state and the database.