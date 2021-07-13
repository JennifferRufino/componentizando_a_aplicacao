import React from 'react';
import {MoviesProvider} from './context/MovieContext';
import SideBar from './components/SideBar';
import Content from './components/Content';

import './styles/global.scss';

export default function App() {
  return (
    <MoviesProvider>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar />
        <Content />
      </div>
    </MoviesProvider>
  )
}