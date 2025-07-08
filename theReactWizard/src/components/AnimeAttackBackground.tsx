import "./AnimeAttackBackground.css";

const AnimeAttackBackground = () => (
  <div className="anime-attack-bg">
    <svg width="100vw" height="100vh" viewBox="0 0 1920 1080" fill="none">
      <g>
        <ellipse
          className="energy"
          cx="960"
          cy="540"
          rx="400"
          ry="100"
          stroke="#00f0ff"
          strokeWidth="8"
          filter="url(#glow)"
        />
        <ellipse
          className="energy energy2"
          cx="960"
          cy="540"
          rx="300"
          ry="60"
          stroke="#fff"
          strokeWidth="4"
          filter="url(#glow)"
        />
        <ellipse
          className="energy energy3"
          cx="960"
          cy="540"
          rx="200"
          ry="40"
          stroke="#ff00ff"
          strokeWidth="2"
          filter="url(#glow)"
        />
      </g>
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="12" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  </div>
);

export default AnimeAttackBackground;
