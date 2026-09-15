import BookForm from "../components/BookForm";
import Panel from "../components/Panel";

export default function NovoLivroPage() {
  return (
    <>
      <header className="hero">
        <p className="eyebrow">BIBLIOTECA ITEAM</p>
        <h1>Cadastrar novo livro</h1>
      </header>

      <Panel title="Novo livro">
        <BookForm />
      </Panel>
    </>
  );
}