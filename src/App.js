import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import 'semantic-ui-css/semantic.min.css'
import Home from './Home';
import NavBar from './NavBar'
import Footer from './Footer';
import Cards from './Cards';
import Genres from './Genres';
import { Container } from 'semantic-ui-react';

function App() {
  return (
    <div>
       <Router>
      <div className="App">
      <NavBar />
      <Container fluid className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/genres" element={<Genres />} />
          </Routes>
        </Container>
      </div>
    </Router>
    <Footer />
    </div>
  );
}

export default App;
