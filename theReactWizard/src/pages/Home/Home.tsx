import "./Home.css";
import backgroundVideo from "../../assets/videos/withbackground2.mp4";
import { useState } from "react";
import { ContactModal } from "../../components/ContactModal";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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

        <div className="top-left-text">
          <h1 className="name-text">
            ZEPHYR <br /> MAGNUS
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
