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

  const recommendBook = (selectedBookID) => {
    setBooks(books.map((book) => {
      if(book.bookID === selectedBookID){
        book.rating.numberOfRating += 1;
        return book;
      }else{
        return book;
      }
    }))
  }

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
      <Content starBook={recommendBook} books={books} showFavorites={showFavorites} />
      <div className="showToolsInWideScreen">
        <MobileTools viewList={onViewList} />
      </div>
    </div>
  );
}

export default App;
