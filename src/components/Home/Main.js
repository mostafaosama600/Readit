import React, { useState } from "react";
import Book from "../Books/Books";
import axios from "axios";

const Main = () => {
  const [search, setSearch] = useState("");
  const [bookData, setBookData] = useState([]);
  let searchBook = (evt) => {
    if (evt.key === "Enter") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&key=AIzaSyCWCxeVKXGf2w6DW6ft6KKjB-bXZ9wlQE4" +
            "&maxResults=40"
        )
        .then((res) => setBookData(res.data.items))
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand">Readnow</span>
        </div>
      </nav>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-1">
          <div className="col mt-4">
            <div className="card border-0">
              <div className="card-body text-center mt-5">
                <h2 className="card-title">Card title</h2>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <input
                  type="text"
                  className="bg-light w-75 p-3 border "
                  placeholder="search for a book"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyPress={searchBook}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {<Book book={bookData} />}
        </div>
      </div>
    </>
  );
};
export default Main;
