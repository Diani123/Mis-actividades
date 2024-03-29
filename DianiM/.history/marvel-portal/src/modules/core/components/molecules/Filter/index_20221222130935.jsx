import PropTypes from 'prop-types';
import ButtonMovies from '../../atoms/ButtonArrow';
import OrderCharacter from '../../atoms/OrderCharacters';
// import { RiSearch2Line } from 'react-icons/ri';
import SearchBar from '../../atoms/SearchBar';
import MovieFilter from './SerieFilter';

Filter.propTypes = {
  totalItems: PropTypes.number.isRequired
};

function Filter({ totalItems }) {
  return (
    <div className="mvl-character-gri-filters">
      <div className="filter_search">
        <SearchBar />
        {/* <RiSearch2Line />
        <input
          type="search"
          placeholder="SEARCH"
          className="input-nav"
          //value=""
          autoComplete="on"
          aria-autocomplete="list"
          aria-controls="reac-autowhatever-1"
          readOnly
        /> */}
      </div>
      <MovieFilter />
      <div>
        <h5 className="results_totalItems">{totalItems} RESULTS</h5>
      </div>
      <div><Order</div>
    </>
  );
}
export default Filter;
