
function formatViews(views) {
    if (views >= 1000000000) {
      return (views / 1000000000).toFixed(1) + "B";
    } else if (views >= 1000000) {
      return (views / 1000000).toFixed(1) + "M";
    } else if (views >= 1000) {
      return (views / 1000).toFixed(1) + "K";
    } else {
      return views.toString();
    }
  }

function Views({videoView}) {
    const view=formatViews(videoView)
    console.log(view)
  return (
   <span style={{fontSize:"15px"}}>
     {view}
   </span>
  )
}

export default Views
