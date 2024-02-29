import "./Card.css"

const Card = ({ name, book }) => {
  return (
    <div className="card">
      <p>Hola {name}!</p>
      <p>Sabemos que tu libro favorito es:</p>
      <p className="book">{book}</p>
    </div>
  );
};

export default Card;
