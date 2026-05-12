function Saludo(props) {
  return (
    <div>
      <p>Buenos días{props.nombre}</p>
    </div>
  );
}

export default Saludo;
/* otra opcion
function Saludo({ nombre, tipo }) {
  return (
    <div>
      <p>Buenos días, {nombre}. Tipo: {tipo}</p>
    </div>
  );
}

export default Saludo;*/