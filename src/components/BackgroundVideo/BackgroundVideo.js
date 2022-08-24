import React from 'react';

const BackgroundVideo = ({ videoSource, children, blur }) => {
  // const video = React.useRef(null);
  // React.useEffect(() => {
  //   console.log(video.current.style);
  //   video.current.style.filter = "blur(10px)";
  // }, []);
  return (
    <>
        <video
          style={{ filter: `blur(${blur}px)`, WebkitFilter: `blur(${blur}px)` }}
          autoPlay="autoplay"
          loop="loop"
          width="auto"
          height="100%"
          overflow="hidden"
          position="absolute"
          muted
          // ref={video}
          id="video-id"
          className='hero-video' >
          {/* TODO make it accept multiple media types */}
          <source className="source-vid" src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
      </video>
      {/* <span id="video-bottom"></span> */}
    </>
  )
}

export default BackgroundVideo
