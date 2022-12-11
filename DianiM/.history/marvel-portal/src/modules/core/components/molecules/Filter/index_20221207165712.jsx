import PropTypes from 'prop-types';

Filter.propTypes = {
  totalItems: PropTypes.number.isRequired,
};

function Filter() {
  return (
    <div className="mvl-character-gri-filters">
      <div>
        <input
          type="search"
          placeholder="SEARCH"
          className="input-nav"
          value=""
          autoComplete="off"
          aria-autocomplete="list"
          aria-controls="reac-autowhatever-1"></input>
      </div>
      <div className="Container-span">
        <span className="span-results">3744 RESULTADOS</span>
      </div>
    </div>
  );
}
export default Filter;
