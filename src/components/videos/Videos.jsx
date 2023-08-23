

import React, { useEffect } from 'react'
import { fetchAPI } from '../api/Api';
import { UseVideo } from '../../context/videoRenderByGuide/RenderVideo';


function Videos() {
  const {renderVideo}=UseVideo()
  console.log(renderVideo)
    useEffect(()=>{

        fetchAPI(`search?part=snippet&q=Music`)
    },[])
  return (
    <div>
      
    </div>
  )
}

export default Videos
