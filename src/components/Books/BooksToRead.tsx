import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import BooksList from '../General/BooksList';

const BooksToRead = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('../../../db/books_to_read.csv')
      .then(response => response.text())
      .then(csvString => {
        const results = Papa.parse(csvString, {
          header: true,
          dynamicTyping: true,
        });
        // Transform the data to only include title, author, and image
        const formattedData = results.data.map(book => ({
          title: book.Title, // Use the exact column name from CSV
          author: book.Author, // Use the exact column name from CSV
          image: book.Image ? book.Image : '../../../img/book-cover.jpg', // Check if Image exists, otherwise use default
        }));
        setData(formattedData);
      });
  }, []);

    return (
      <>
        <BooksList books={data} />
      </>
    );
  };
  
  export default BooksToRead;