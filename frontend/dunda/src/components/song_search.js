import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function SongSearch ({ fetchSearchResult, clearSearch, songs, albums, artists, playlists, toggleSearch }){
  const [query, setQuery] = useState('');

  function handleChange(e){
    const value = e.target.value;
    setQuery(value);
    if (value.length > 0) {
      fetchSearchResult(value);
    } else {
      clearSearch();
    }
  };

  function showSongs(){
    if (songs.length > 0) {
      return (
        <div className='search-list'>
          <h2>Songs</h2>
          {songs.map((song) => (
            <Link to={`/albums/${song.album_id}`} key={song.id} onClick={toggleSearch}>
              {song.title}
            </Link>
          ))}
        </div>
      );
    }
  };

  function showAlbums(){
    if (albums.length > 0) {
      return (
        <div className='search-list'>
          <h2>Albums</h2>
          {albums.map((album) => (
            <Link to={`/albums/${album.id}`} key={album.id} onClick={toggleSearch}>
              {album.title}
            </Link>
          ))}
        </div>
      );
    }
  };

  function showArtists(){
    if (artists.length > 0) {
      return (
        <div className='search-list'>
          <h2>Artists</h2>
          {artists.map((artist) => (
            <Link to={`/artists/${artist.id}`} key={artist.id} onClick={toggleSearch}>
              {artist.name}
            </Link>
          ))}
        </div>
      );
    }
  };

  function showPlaylists(){
    if (playlists.length > 0) {
      return (
        <div className='search-list'>
          <h2>Playlists</h2>
          {playlists.map((playlist) => (
            <Link to={`/playlists/${playlist.id}`} key={playlist.id} onClick={toggleSearch}>
              {playlist.title}
            </Link>
          ))}
        </div>
      );
    }
  };

  const componentRef = useRef(null);

  function clickForm(e){
    const component = componentRef.current;

    if (e.target === component || component.contains(e.target)) {
      // Inside of the component.
    } else {
      toggleSearch();
    }
  };

  useEffect(() => {
    document.addEventListener('click', clickForm);
    return () => {
      document.removeEventListener('click', clickForm);
    };
  }, []);

  return (
    <div className='search' id='search' ref={componentRef}>
      <div className='search-input'>
        <input type='text' onChange={handleChange} value={query} />
      </div>

      {showSongs()}
      {showAlbums()}
      {showArtists()}
      {showPlaylists()}
    </div>
  );
};

export default Search;