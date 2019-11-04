var playlist = {
  katie: "Remember"
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle 
  return playlist
}