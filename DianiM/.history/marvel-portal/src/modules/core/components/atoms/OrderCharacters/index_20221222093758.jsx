export default function OrderCharacter() {
  return (
    <div>
      <font style="vertical-aling:inherit;">Ordenar por</font>
      <select name="lenguajes" id="lang">
        <option value="">JavaScript</option>
        <option value="php">PHP</option>
      </select>
      <input type="submit" value="Enviar" />
    </div>
  );
}
