import './styles.scss';
export default function OrderCharacter() {
  return (
    <div>
      <font style="vertical-aling:inherit;">
        <font style="vertical-aling:inherit;">Ordenar por</font>
      </font>
      <select className="Arizona" id="lang">
        <option value="A-Z" tabIndex="0" className="Option-order-active">
          A-Z
        </option>
        <option value="Z-A" tabIndex="0" className="Option-order">
          Z-A
        </option>
      </select>
    </div>
  );
}
