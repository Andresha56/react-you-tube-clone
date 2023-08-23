
import './App.css';
import {BrowserRouter} from "react-router-dom"
import Nav from './components/nav/Nav';
import Feed from './components/feed/Feed';



function App() {
  return (
   <>
   <BrowserRouter>
    <Nav/>
    <Feed/>
   </BrowserRouter>
   
   </>
  );
}

export default App;
