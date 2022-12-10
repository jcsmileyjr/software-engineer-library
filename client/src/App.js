import Books from './developmentData/testBooks.json';
import Header from "./components/header/header";
import Content from "./components/content/Content";
import MobileTools from "./components/mobileTools/MobileTools";
import "./App.css";

function App() {
  return (
    <div className="app--container">
      <Header />
      <Content books={Books} />
      <div className="showToolsInWideScreen">
        <MobileTools />
      </div>
    </div>
  );
}

export default App;
