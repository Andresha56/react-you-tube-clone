
import './App.css';
import Nav from './components/nav/Nav';
import Feed from './components/feed/Feed';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VideoID from './components/videoIdPage/VideoID';


function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
       <Routes>
        <Route path='/' element={<Feed/>}/>
        <Route path = "/video-id-page/:id" element={<VideoID/>}/>
       </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
