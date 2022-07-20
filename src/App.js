import './App.css';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Home from './pages/Home';
import Fishes from './pages/Fishes';
import Datas from './pages/Datas';
import User from './pages/User';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <Router>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/peixes" element={<Fishes />} />
            <Route path="/dados" element={<Datas />} />
            <Route path="/usuario" element={<User />} />
          </Routes>
        </Sidebar>
      </Router>
    </>
  );
}

export default App;
