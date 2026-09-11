export default function BookCard({ book, onReserve }) {
  const { id, title, author, available } = book;

  return (
    <article className="book-card">
      <div>
        <h2>{title}</h2>
        <p>{author}</p>
      </div>
      <span className={`badge ${available ? "badge-ok" : "badge-off"}`}>
        {available ? "Disponível" : "Reservado"}
      </span>
      <button onClick={() => onReserve(id)}>
        {available ? "Reservar" : "Devolver"}
      </button>
    </article>
  );
}