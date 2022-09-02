/* eslint-disable array-callback-return */
import React from "react";
const Book = ({ book }) => {
  return (
    <>
      {book.map((item) => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
        if (thumbnail !== undefined && amount !== undefined) {
          return (
            <div key={item.id} className="col">
              <div className="card">
                <img
                  src={thumbnail}
                  className="img-book"
                  alt={thumbnail.title}
                />
                <div className="card-body">
                  <h6 className="card-title text-center">
                    {item.volumeInfo.title}
                  </h6>
                  <p className="card-text text-center">{amount}</p>
                </div>
                <button className="btn btn-light">About Book</button>
              </div>
            </div>
          );
        }
      })}
    </>
  );
};
export default Book;
