import { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import Insert from './pages/insert';
import Signin from './pages/signin';
import Delete from './pages/delete';
import Search from './pages/search';
import Update from './pages/update';
import ReportCrime from './pages/ReportCrime';
import Map from './pages/map';
import Advanced1 from './pages/advanced1';
import Advanced2 from './pages/advanced2';
import { LoginContext } from './context/LoginContext';
import WeeklyReport from './pages/weeklyreport';

function App() {
  const [userLogin, setUserLogin] = useState();
  return (
    <LoginContext.Provider value={{userLogin, setUserLogin}}>
      <Router>
        <Navbar />
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/insert' element={<Insert />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/delete' element={<Delete />} />
            <Route path='/search' element={<Search />} />
            <Route path='/update' element={<Update />} />
            <Route path='/streetboard' element={<StreetBoard />} />
            <Route path='/ReportCrime' element={<ReportCrime />} />
            <Route path='/map'    element={<Map />} />
            <Route path='/advanced1'    element={<Advanced1 />} />
            <Route path='/advanced2'    element={<Advanced2 />} />
            <Route path='/weeklyreport'    element={<WeeklyReport />} />
        </Routes>
      </Router>
    </LoginContext.Provider>
  );
}

export default App;
