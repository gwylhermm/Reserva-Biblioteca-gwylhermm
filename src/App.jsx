import "./App.css";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import Panel from "./components/Panel";

export default function App() {
  return (
    <main className="app">
      <header className="hero">
        <p className="eyebrow">BIBLIOTECA ITEAM</p>
        <h1>Reserva de livros do acervo.</h1>
      </header>

      <Panel title="Novo livro">
        <BookForm />
      </Panel>

      <Panel title="Acervo">
        <BookList />
      </Panel>
    </main>
  );
}