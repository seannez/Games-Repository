import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import 'semantic-ui-css/semantic.min.css'
import Home from './Home';
import NavBar from './NavBar'
import Footer from './Footer';
import Cards from './Cards';
import Genres from './Genres';
import MyGames from './MyGames';
import { Container } from 'semantic-ui-react';

function App() {
  return (
    <div>
       <Router>
      <div className="App">
      <NavBar />
      <Container fluid className="content">
          <Routes>
            <Route path="/genres" element={<Genres />} />
            <Route path="/mygames" element={<MyGames/>}/>
            <Route path="/cards" element={<Cards />} />  
            <Route path="/" element={<Home />} />
                   
          </Routes>
        </Container>
      </div>
    </Router>
    <Footer />
    </div>
  );
}

export default App;
