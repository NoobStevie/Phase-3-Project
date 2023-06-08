import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar(){
    return (
        <div className="sidebar">
          <div className="sidebar-header">
            <h2>Spotify</h2>
          </div>
          <div className="sidebar-links">
            <Link to="/search" className="sidebar-link">
              Search
            </Link>
            <Link to="/sign_up" className="sidebar-link">
              Sign Up
            </Link>
            <Link to="/playlist" className="sidebar-link">
              Playlist
            </Link>
          </div>
        </div>
      );
    };

export default Sidebar;