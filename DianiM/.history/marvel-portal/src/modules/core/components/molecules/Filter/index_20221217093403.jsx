import PropTypes from 'prop-types';
import { RiSearch2Line } from 'react-icons/ri';
import ButtonMovies from '../../atoms/ButtonArrow';
}

Filter.propTypes = {
  totalItems: PropTypes.number.isRequired
};

function Filter({ totalItems }) {
  return (
    <div className="mvl-character-gri-filters">
      <div className="content-search">
        <RiSearch2Line className="Risearch2line" />
        

        <input
          type="search"
          placeholder="SEARCH"
          className="input-nav"
          value=""
          autoComplete="off"
          aria-autocomplete="list"
          aria-controls="reac-autowhatever-1"
          readOnly></input>
      </div>
      <ButtonMovies />
      <div className="Container-span">
        <span className="span-results">{totalItems} RESULTADOS</span>
      </div>
    </div>
  );
}
export default Filter;
