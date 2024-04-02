import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import 'semantic-ui-css/semantic.min.css'
import Home from './Home';
import NavBar from './NavBar'

function App() {
  return (
    <div>
       <Router>
      <div className="App">
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
