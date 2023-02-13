export default function OrderCharacter() {
  return (
    <div>
      <font style="vertical-aling:inherit;">Ordenar por</font>
      <select name="lenguajes" id="lang">
        <option value="A-Z" tabIndex="0" className="Option-order">A-Z</option>
        <option value="Z-A" tabIndex="0" className="Option-order"">
          Z-A
        </option>
      </select>
    </div>
  );
}
