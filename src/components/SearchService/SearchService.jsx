import PropTypes from 'prop-types';

import Searchbar from 'components/Searchbar';

function SearchService({ children, onSubmit }) {
  return (
    <>
      <Searchbar onSubmit={onSubmit} />
      <section>{children}</section>
    </>
  );
}
SearchService.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default SearchService;
