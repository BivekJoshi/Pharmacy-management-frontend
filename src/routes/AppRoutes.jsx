import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const AppRoutes = () => {
  return (
    <HashRouter hashType="slash">
        <Routes>
            <Route path="/" element={<Navbar />}/>
        </Routes>
    </HashRouter>
  );
}

export default AppRoutes;
