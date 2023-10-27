
import './App.css';
import Nav from './components/nav/Nav';
import Feed from './components/feed/Feed';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VideoID from './components/videoIdPage/VideoID';
import SearchContext from './context/SearchContext/SearchContext';
import SearchVideos from './components/searchPage/SearchVideos';

function App() {
  return (
    <>
     <BrowserRouter>
        <SearchContext>
          <Nav />
        <Routes>
          <Route path='/' element={<Feed />} />

          <Route path="/video-id-page/:id" element={<VideoID />} />

          <Route path="/search-video" element={<SearchVideos />} />
        </Routes>

        </SearchContext>
      </BrowserRouter>
    </>
  );
}

export default App;




