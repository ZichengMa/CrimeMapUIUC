import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import Insert from './pages/insert';
import Delete from './pages/delete';
import Search from './pages/search';
import Update from './pages/update';
import Map from './pages/map';
import Advanced1 from './pages/advanced1';
import Advanced2 from './pages/advanced2';

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
        <Route path='/map'    element={<Map />} />
        <Route path='/advanced1'    element={<Advanced1 />} />
        <Route path='/advanced2'    element={<Advanced2 />} />
    </Routes>
    </Router>
  );
}

export default App;
