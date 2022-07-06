import Header from "./components/Header";
import Nav from "./components/Nav";
import Summary from "./components/Summary";
import VideoSection from "./components/VideoSection";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <div className="app">
      <GlobalStyle />
      <Nav />
      <div className="header-content-wrapper">
        <Header />
        <div className="content">
          <VideoSection />
          <Summary />
        </div>
      </div>
    </div>
  );
}

export default App;
