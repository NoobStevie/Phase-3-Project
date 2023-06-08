import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Search from './Search';
import Playlist from './Playlist';

const Main = () => {
  return (
    <div className="app">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content">
        <Routes>
          <Route path="/search" element={<Search />} />
          <Route path="/playlist" element={<Playlist />} />
          {/* Add more routes for other components */}
        </Routes>
      </div>
    </div>
  );
};

export default Main;