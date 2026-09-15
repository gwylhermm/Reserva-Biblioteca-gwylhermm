import { createContext, useState, useEffect } from "react";
import { books } from "../data/books";

const STORAGE_KEY = "reserva-biblioteca:books";

function loadBooks() {
  const stored = localStorage.getItem(STORAGE_KEY);

  if (!stored) {
    return books;
  }

  try {
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : books;
  } catch {
    return books;
  }
}

export const BooksContext = createContext(null);

export function BooksProvider({ children }) {
  const [books, setBooks] = useState(loadBooks);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
  }, [books]);

  function toggleBook(bookId) {
    setBooks((currentBooks) =>
      currentBooks.map((book) =>
        book.id === bookId ? { ...book, available: !book.available } : book
      )
    );
  }

  function addBook(newBook) {
    setBooks((currentBooks) => [...currentBooks, newBook]);
  }

  const availableCount = books.filter((book) => book.available).length;

  const value = { books, availableCount, toggleBook, addBook };

  return (
    <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
  );
}