import Header from "./components/Header";
import Nav from "./components/Nav";
import VideoSection from "./components/VideoSection";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <div className="app">
      <GlobalStyle />
      <Nav />
      <div className="content-wrapper">
        <Header />
        <VideoSection />
      </div>
    </div>
  );
}

export default App;
