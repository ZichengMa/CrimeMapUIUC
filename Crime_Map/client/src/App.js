import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import Insert from './pages/insert';
import Delete from './pages/delete';
import Search from './pages/search';
import Update from './pages/update';
import Crime_Map from './pages/map';


function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/insert' element={<Insert />} />
        <Route path='/delete' element={<Delete />} />
        <Route path='/search' element={<Search />} />
        <Route path='/update' element={<Update />} />
        <Route path='/map'    element={<Crime_Map />} />
    </Routes>
    </Router>
  );
}

export default App;
