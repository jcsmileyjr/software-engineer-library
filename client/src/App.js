import Header from "./components/header/header";
import Content from "./components/content/Content";
import MobileTools from "./components/mobileTools/MobileTools";
import "./App.css";
import React, { useEffect, useState } from "react";
import Books from './developmentData/testBooks.json';
import UserDataSchema from "./developmentData/userDataSchema.json";

function App() {
  const [showFavorites, setShowFavorites] = useState(false);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getUsersSoftwarLibraryData();
  }, []);

  const onViewList = () => {
    setShowFavorites(!showFavorites);
  }

  //check if there is a saved local data, if not create one.
  const getUsersSoftwarLibraryData = () => {
    setBooks(Books);
    if(localStorage.getItem("userSoftwareLibraryData") === null){
      localStorage.setItem("userSoftwareLibraryData", JSON.stringify(UserDataSchema));
    }
  }

  return (
    <div className="app--container">
      <Header viewList={onViewList} />
      <Content books={books} showFavorites={showFavorites} />
      <div className="showToolsInWideScreen">
        <MobileTools viewList={onViewList} />
      </div>
    </div>
  );
}

export default App;
