import { createContext, useContext, useState } from "react";

const Video = createContext();

export const UseVideo = () => {
  return useContext(Video);
};

function RenderVideo({ children }) {
  const [renderVideo, setRentderVideo] = useState("Podcast");
  return (
    <Video.Provider value={{ renderVideo, setRentderVideo }}>
      {children}
    </Video.Provider>
  );
}

export default RenderVideo;
