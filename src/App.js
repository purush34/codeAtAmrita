import './App.css';
import Home from './Pages/Home';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Members from './Pages/Members';
import Resources from './Pages/Resources';
import WhyUs from './Pages/WhyUs';
import Events from './Pages/Events';
import PagesNotFound from './Pages/PagesNotFound';

function App() {
  return (
    <div className="App">
      <video src='https://raw.githubusercontent.com/purush34/codeAtAmrita/main/public/videos/videov2.mp4' autoPlay loop muted></video>
      <Router>
        <Navbar />
        <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/members' element={< Members />}></Route>
        <Route exact path='/resources' element={< Resources />}></Route>
        <Route exact path='/why' element={< WhyUs />}></Route>
        <Route exact path='/upev' element={< Events />}></Route>
        <Route path='*' element={<PagesNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
