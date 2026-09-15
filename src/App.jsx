import { useState, useEffect } from "react";
import "./App.css";
import { books } from "./data/books";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import Panel from "./components/Panel";

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

export default function App() {
  const [books, setBooks] = useState(loadBooks);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
  }, [books]);

  function handleReserve(bookId) {
    setBooks((currentBooks) =>
      currentBooks.map((book) =>
        book.id === bookId ? { ...book, available: !book.available } : book
      )
    );
  }

  function handleAddBook(newBook) {
    setBooks((currentBooks) => [...currentBooks, newBook]);
  }

  const availableCount = books.filter((book) => book.available).length;

  return (
    <main className="app">
      <header className="hero">
        <p className="eyebrow">BIBLIOTECA ITEAM</p>
        <h1>Reserva de livros do acervo.</h1>
        <p>
          {availableCount} de {books.length} livros disponíveis
        </p>
      </header>

      <Panel title="Novo livro">
        <BookForm onAddBook={handleAddBook} />
      </Panel>

      <Panel title="Acervo">
        <BookList books={books} onReserve={handleReserve} />
      </Panel>
    </main>
  );
}