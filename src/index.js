import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import RenderVideo from './context/videoRenderByGuide/RenderVideo';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RenderVideo>
      <App />
    </RenderVideo>
  </React.StrictMode>
);

