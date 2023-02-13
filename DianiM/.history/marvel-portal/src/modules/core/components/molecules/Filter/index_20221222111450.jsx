import PropTypes from 'prop-types';
import { RiSearch2Line } from 'react-icons/ri';
import ButtonMovies from '../../atoms/ButtonArrow';
import OrderCharacter from '../../atoms/OrderCharacters';

Filter.propTypes = {
  totalItems: PropTypes.number.isRequired
};

function Filter({ totalItems }) {
  return (
    <div className="mvl-character-gri-filters">
      <div>
        <RiSearch2Line />
        <input
          type="text"
          placeholder="SEARCH"
          className="input-nav"
          // value=""
          // autoComplete="off"
          // aria-autocomplete="list"
          // aria-controls="reac-autowhatever-1"
        />
        <ButtonMovies />
      </div>
      
      <div className="Container-span">
        <div>
          <span className="span-results">{totalItems} RESULTADOS</span>
        </div>
        <div>
          <OrderCharacter />
        </div>
      </div>
    </div>
    <div className="Container-span">
        <div>
          <span className="span-results">{totalItems} RESULTADOS</span>
        </div>
        <div>
          <OrderCharacter />
        </div>
      </div>
  );
}
export default Filter;
