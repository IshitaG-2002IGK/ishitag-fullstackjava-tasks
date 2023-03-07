import { useState, useRef } from 'react';

function VideoPlayer() {
  const [isPaused, setIsPaused] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setIsPaused(false);
  };

  const handlePause = () => {
    setShowPopup(true);
  };

  const handleReplay = () => {
    videoRef.current.currentTime = 0;
    setIsPaused(false);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setIsPaused(true);
    videoRef.current.currentTime = 0;
  };

  return (
    <div>
      <video
        ref={videoRef}
        src = "ad_vid.mp4"
        // src="https://www.w3schools.com/html/mov_bbb.mp4"
        controls
        onPlay={handlePlay}
        onPause={handlePause}
      />

      {showPopup && (
        <div>
          <p>Video paused. Want to continue watching?</p>
          <button onClick={handleClosePopup}>Yes</button>
          <button onClick={() => setShowPopup(false)}>No</button>
        </div>
      )}

      {!isPaused && (
        <button onClick={() => setIsPaused(true)}>Pause</button>
      )}

      {isPaused && (
        <button onClick={handleReplay}>Replay</button>
      )}
    </div>
  );
}

export default VideoPlayer