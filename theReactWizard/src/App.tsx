import "./App.css";
import { Navbar } from "./Navbar/Navbar";
function App() {
  return (
    <>
      <header className="App">
        <Navbar />
        <div className="top-left-text">
          <h1 className="name-text">
            ALEJANDRO <br /> GISPERT
          </h1>
          <h2 className="slogan-text">THE REACT WIZARD</h2>
        </div>
        <div className="bottom-center-text">
          <h3 className="services-text">Solutions & Consultancy Services</h3>
          <button className="work-button">WORK WITH ME.</button>
        </div>
      </header>
    </>
  );
}

export default App;
