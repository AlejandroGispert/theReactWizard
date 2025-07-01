import "./Portfolio.css";

function Portfolio() {
  return (
    <>
      <header className="portfolio-header">
        <div className="portfolio-top-left-text">
          <h1 className="portfolio-name-text">
            ALEJANDRO <br /> GISPERT
          </h1>
          <h2 className="portfolio-slogan-text">THE REACT WIZARD</h2>
        </div>
        <div className="portfolio-bottom-center-text">
          <h3 className="portfolio-services-text">
            Solutions & Consultancy Services
          </h3>
          <button className="portfolio-work-button">WORK WITH ME.</button>
        </div>
      </header>
    </>
  );
}

export default Portfolio;
