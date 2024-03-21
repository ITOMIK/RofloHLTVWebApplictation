import { useState } from 'react'
import HomePage from './pages/Home/HomePage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import PlayerPage from './pages/Player/PlayerPage';
import CsgoEventPage from './pages/Event/EventPage';
import CsgoPage from './pages/Csgo/CsgoPage';
import ValorantPage from './pages/Valorant/ValorantPage';
import FortnitePage from './pages/Fortnite/FortnitePage';

function App() {
 
  return (
    
      <Router>
        <div className='content-wrap'>
        <ScrollToTop />
        <Header />
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Event/:discipline/:matchId" element={<CsgoEventPage />} />
        <Route path="/players/:playerId" element={<PlayerPage />} />
        <Route path="/CSGO" element={<CsgoPage />} />
        <Route path="/Valorant" element={<ValorantPage />} />
        <Route path="/Fortnite" element={<FortnitePage />} />
        </Routes>
        </div>
        <Footer />
      </Router>
    
  )
}

export default App
