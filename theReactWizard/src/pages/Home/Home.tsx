import "./Home.css";
import backgroundVideo from "../../assets/videos/withbackground2.mp4";
import { useEffect, useState, useRef } from "react";
import { ContactModal } from "../../components/ContactModal";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const eyesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      document.body.classList.add("loaded");
    }, 1000);
    return () => {
      clearTimeout(timeout);
      document.body.classList.remove("loaded");
    };
  }, []);

  // Calculate eyes position based on video dimensions and viewport
  useEffect(() => {
    const updateEyesPosition = () => {
      const video = videoRef.current;
      const eyesContainer = eyesContainerRef.current;
      if (!video || !eyesContainer) return;

      // Wait for video metadata
      if (video.videoWidth === 0 || video.videoHeight === 0) {
        return;
      }

      // Get video's natural dimensions
      const videoAspect = video.videoWidth / video.videoHeight;
      const viewportAspect = window.innerWidth / window.innerHeight;

      // Calculate where the face would be in the video
      // Adjust this percentage based on your actual video (40% = upper-middle)
      const faceYPercent = 35;

      let topPosition: number;

      if (viewportAspect > videoAspect) {
        // Viewport is wider - video height fills viewport, width is cropped
        // Video uses object-fit: cover, so it scales to fill
        topPosition = (faceYPercent / 100) * window.innerHeight;
      } else {
        // Viewport is taller - video width fills viewport, height is cropped
        const videoDisplayWidth = window.innerWidth;
        const videoDisplayHeight = videoDisplayWidth / videoAspect;
        const verticalOffset = (window.innerHeight - videoDisplayHeight) / 2;
        topPosition =
          verticalOffset + (faceYPercent / 100) * videoDisplayHeight;
      }

      eyesContainer.style.top = `${topPosition}px`;
    };

    const video = videoRef.current;
    if (video) {
      const handleLoadedMetadata = () => {
        // Small delay to ensure video dimensions are available
        setTimeout(updateEyesPosition, 100);
      };

      const handleCanPlay = () => {
        updateEyesPosition();
      };

      if (video.readyState >= 2) {
        // Video metadata already loaded
        updateEyesPosition();
      } else {
        video.addEventListener("loadedmetadata", handleLoadedMetadata);
        video.addEventListener("canplay", handleCanPlay);
      }

      window.addEventListener("resize", updateEyesPosition);

      return () => {
        video.removeEventListener("loadedmetadata", handleLoadedMetadata);
        video.removeEventListener("canplay", handleCanPlay);
        window.removeEventListener("resize", updateEyesPosition);
      };
    }
  }, []);

  return (
    <>
      <header className="home-header">
        <video
          ref={videoRef}
          className="background-video"
          src={backgroundVideo}
          autoPlay
          muted
          playsInline
          onEnded={(e) => e.currentTarget.pause()}
          style={{
            objectFit: "cover",
            width: "100vw",
            height: "100vh",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        />
        <div className="dream-blur-overlay"></div>

        <div ref={eyesContainerRef} className="wizard-eyes-container">
          <div className="wizard-eye left-eye"></div>
          <div className="wizard-eye right-eye"></div>
        </div>

        <div className="top-left-text">
          <h1 className="name-text">
            ALEJANDRO <br /> GISPERT
          </h1>
          <h2 className="slogan-text">THE REACT WIZARD</h2>
        </div>
        <div className="main-zoom">
          <div className="home-bottom-center-text">
            <h3 className="home-services-text">
              Solutions & Consultancy Services
            </h3>
            <button
              className="work-button"
              onClick={() => setIsModalOpen(true)}
            >
              WORK WITH ME.
            </button>
          </div>
        </div>
      </header>
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

export default Home;
