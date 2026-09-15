import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <header className="hero">
      <p className="eyebrow">BIBLIOTECA ITEAM</p>
      <h1>Página não encontrada</h1>
      <p>
        <Link to="/">Voltar para o início</Link>
      </p>
    </header>
  );
}