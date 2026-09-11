export default function Panel({ title, children }) {
  return (
    <div className="panel">
      <div className="panel-header">
        <h2>{title}</h2>
      </div>
      <div className="panel-content">{children}</div>
    </div>
  );
}