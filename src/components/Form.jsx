import { useState } from "react";
import Card from "./Card";
import "./Form.css"

const Form = () => {
  const [user, setUser] = useState({
    name: "",
    book: "",
  });

  const [show, setShow] = useState(false);
  const [err, setErr] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name.trimStart().length > 2 && user.book.length > 5) {
      setShow(true);
      setErr(false);
    } else {
      setErr(true);
    }
  };

  return (
    <>
      {show ? (
        <Card name={user.name} book={user.book} />
      ) : (
        <form className="form" onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            placeholder="Ingresá tu nombre"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
          <input
            className="input"
            type="text"
            placeholder="Ingresá tu libro favorito"
            value={user.book}
            onChange={(e) => setUser({ ...user, book: e.target.value })}
          />
          <button>Enviar</button>
        </form>
      )}
      {err && <p className="error">Por favor chequeá que la información sea correcta.</p>}
    </>
  );
};

export default Form;
