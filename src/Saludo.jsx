function Saludo({ nombre, tipo }) {
  return (
    <div>
      <p>Buenos días, {nombre}</p>
      <p>Tipo: {tipo}</p>
    </div>
  )
}

export default Saludo

/* otra opcion
function Saludo({ nombre, tipo }) {
  return (
    <div>
      <p>Buenos días, {nombre}. Tipo: {tipo}</p>
    </div>
  );
}

export default Saludo;*/

