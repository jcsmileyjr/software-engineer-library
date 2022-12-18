import "./content.css";
import Book from "../book/Book.js";
import React, { useState, useEffect } from "react";

const Content = ({ books, showFavorites, starBook }) => {
  const [listOfFavorites, setListOfFavorites] = useState([]);

  useEffect(() => {
    getOriginalListOfFavorites();
  }, []);

  const updateUserLocalData = (currentBookID) => {
    //get the local data
    let localData = JSON.parse(localStorage.getItem("userSoftwareLibraryData"));

    // Check for the index of the book if it's already designated as a favorite.
    const ifBookAlreadyDesignatedFavorite = localData.favoriteBooks.findIndex(
      (id) => id === currentBookID
    );

    // If the index is already designated as a favorite, then remove. If not, then add as a favorite
    if (ifBookAlreadyDesignatedFavorite > -1) {
      localData.favoriteBooks.splice(ifBookAlreadyDesignatedFavorite, 1);
    } else {
      localData.favoriteBooks = [...localData.favoriteBooks, currentBookID];
    }

    //save to current local list of favorites
    setListOfFavorites(localData.favoriteBooks);

    // save the updated data to local data
    localStorage.setItem("userSoftwareLibraryData", JSON.stringify(localData));
  };

  const getOriginalListOfFavorites = () => {
    const localSavedData = JSON.parse(
      localStorage.getItem("userSoftwareLibraryData")
    );
    setListOfFavorites(localSavedData.favoriteBooks);
  };

  return (
    <section className="content--container">
      {books.map((book) => {
        if (listOfFavorites.findIndex((id) => id === book.bookID) > -1) {
          return <Book starBook={() => starBook(book.bookID)} key={book.bookID} bookData={book} favorite={true} updateList={updateUserLocalData} />;
        } else {
            if(!showFavorites){
                return <Book starBook={() => starBook(book.bookID)} key={book.bookID} bookData={book} favorite={false} updateList={updateUserLocalData} />;
            }
        }
      })}
    </section>
  );
};

export default Content;
