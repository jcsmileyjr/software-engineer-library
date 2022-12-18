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

  /**
   * Update the selected book's rating within the Rating component
   * @param {number} selectedBookID - Book ID of the selected book
   * 
   * TODO: Update via API and local app state
   */
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

  // Displays the user's list of favorite books
  const onViewList = () => {
    setShowFavorites(!showFavorites);
  }

  /**
   * When the app first loads, saves the develpment array of books to the the app state
   * and loads the user preference setting format to local storage
   * 
   * TODO: API call get library of books from external database
   */
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
