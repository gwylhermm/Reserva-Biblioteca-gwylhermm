import { useState } from "react";
import "./App.css";
import { books as initialBooks } from "./data/books";
import BookList from "./components/BookList";
import Panel from "./components/Panel";

export default function App() {
  const [books, setBooks] = useState(initialBooks);

  function handleReserve(bookId) {
    setBooks((currentBooks) =>
      currentBooks.map((book) =>
        book.id === bookId ? { ...book, available: !book.available } : book
      )
    );
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

      <Panel title="Acervo">
        <BookList books={books} onReserve={handleReserve} />
      </Panel>
    </main>
  );
}