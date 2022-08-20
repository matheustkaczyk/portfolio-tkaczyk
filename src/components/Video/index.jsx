import bgVideo from '../../assets/videoloop.mp4';

const Video = () => {
  return(
    <div className="video">
      <video autoPlay loop muted>
        <source src={bgVideo} type="video/mp4" />
      </video>
    </div>
  )
}

export default Video;
