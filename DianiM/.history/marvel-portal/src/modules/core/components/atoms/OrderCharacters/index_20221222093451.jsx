export default function OrderCharacter() {
  return (
    <div>
        <label>Lenguaje</label>
        <select name="lenguajes" id="lang">
          <option value="javascript">JavaScript</option>
          <option value="php">PHP</option>
        </select>
        <input type="submit" value="Enviar" />
    </div>
  );
}
