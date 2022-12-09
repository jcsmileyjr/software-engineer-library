import Header from "./components/header/Header";
import Content from "./components/content/Content";
import MobileTools from "./components/mobileTools/MobileTools";
import "./App.css";

function App() {
  return (
    <div className="app--container">
      <Header />
      <Content />
      <div className="showToolsInWideScreen">
        <MobileTools />
      </div>
    </div>
  );
}

export default App;
