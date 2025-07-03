import "./Home.css";
import backgroundVideo from "../../assets/videos/withbackground.mp4";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      document.body.classList.add("loaded");
    }, 1000);
    return () => {
      clearTimeout(timeout);
      document.body.classList.remove("loaded");
    };
  }, []);

  return (
    <>
      <header className="home-header">
        <video
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

        <div className="wizard-eyes-container">
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
            <button className="work-button">WORK WITH ME.</button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Home;
