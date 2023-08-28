

import moment from "moment";
const style={
  color:"white",
  backgroundColor:"rgba(0, 0, 0, 0.8)",
  position:"absolute",
  bottom:"5px",
  right:"10px"
}

function VideoLength({videoLen}) {
    const videoLength=moment().seconds(videoLen).format("H:mm")
    
  return (
   <>
    <div style={style}>{videoLength}</div>
   </>
  )
}

export default VideoLength
