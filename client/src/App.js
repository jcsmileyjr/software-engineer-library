import Header from "./components/header/header";
import Content from "./components/content/Content";
import MobileTools from "./components/mobileTools/MobileTools";
import "./App.css";
import React, { useState, useEffect } from "react";
import Books from './developmentData/testBooks.json';
import UserDataSchema from "./developmentData/userDataSchema.json";

function App() {
  const [localUserData, setLocalUserData] = useState({});

  useEffect(() => {
    getUsersSoftwarLibraryData();
  }, []);

  //check if there is a saved local data, if not create one.
  const getUsersSoftwarLibraryData = () => {
    if(localStorage.getItem("userSoftwareLibraryData") === null){
      localStorage.setItem("userSoftwareLibraryData", JSON.stringify(UserDataSchema));
    }else{
      const userData = JSON.parse(localStorage.getItem("userSoftwareLibraryData"));
      setLocalUserData(userData);
    }
  }

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
