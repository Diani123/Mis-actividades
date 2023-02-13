export default function OrderCharacter() {
  return (
    <div>
      <form action="#">
        <label>Lenguaje</label>
        <br />
        <select name="lenguajes" id="lang">
          <option value="javascript">JavaScript</option>
          <option value="php">PHP</option>
        </select>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}
