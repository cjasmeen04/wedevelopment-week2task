import PlayVideo from "../../Components/PlayVideo/PlayVideo"
import Recommended from "../../Components/Recommended/Recommended"
import "./Video.css"
import { useParams } from "react-router-dom"
import { useState } from "react"

const Video = () => {

  const { videoId } = useParams();

  const [categoryId, setCategoryId] = useState(null);

  return (
    <div className="play-container">

      <PlayVideo
        videoId={videoId}
        setCategoryId={setCategoryId}
      />

      <Recommended
        categoryId={categoryId}
      />

    </div>
  )
}

export default Video