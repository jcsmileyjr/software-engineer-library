import Header from './components/header/Header.js';
import Content from "./components/content/Content.js";
import MobileTools from './components/mobileTools/MobileTools.js';
import './App.css';

function App() {
  return (
    <div className="app--container">
      <Header />
      <Content />
      <MobileTools />
    </div>
  );
}

export default App;
