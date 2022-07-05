import Header from "./components/Header";
import Nav from "./components/Nav";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <div className="app">
      <GlobalStyle />
      <Nav />
      <div>
        <Header />
      </div>
    </div>
  );
}

export default App;
