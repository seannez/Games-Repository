import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import React, { createContext, useState } from 'react';
import 'semantic-ui-css/semantic.min.css'
import Home from './Home';
import NavBar from './NavBar'
import Footer from './Footer';
import Cards from './Cards';
import Genres from './Genres';
import MyGames from './MyGames';
import { Container } from 'semantic-ui-react';

/*Creating Context*/
export const GameContext = createContext(null)

function App() {
  const [gameToAdd, setGameToAdd] = useState('') /*Controls Context value added*/
  return (
    <div>
       <Router>
      <div className="App">
      <NavBar />
      <Container fluid className="content">
      <GameContext.Provider value={{ gameToAdd, setGameToAdd }}>
          <Routes>
            <Route path="/genres" element={<Genres />} />
            <Route path="/mygames" element={<MyGames/>}/>
            <Route path="/cards" element={<Cards />} />  
            <Route path="/" element={<Home />} />   
          </Routes>
      </GameContext.Provider>
        </Container>
      </div>
    </Router>
    <Footer />
    </div>
  );
}

export default App;
