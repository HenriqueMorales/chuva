import { useState } from "react";
import Discussions from "./components/Discussions";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Summary from "./components/Summary";
import VideoSection from "./components/VideoSection";
import GlobalStyle from "./styles/GlobalStyle";
import Footer from "./components/Footer";

function App() {
  const [showNavMobile, setShowNavMobile] = useState(false);
  return (
    <div className="app">
      <GlobalStyle />
      {showNavMobile && (
        <div className="modal" onClick={() => setShowNavMobile(false)}></div>
      )}
      <Nav showNavMobile={showNavMobile} />
      <div className="header-content-wrapper">
        <Header setShowNavMobile={setShowNavMobile} />
        <div className="content">
          <VideoSection />
          <Summary />
          <Discussions />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
