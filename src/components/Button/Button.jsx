import PropTypes from 'prop-types';
import { LoadMore } from './Button.syled';
const Button = ({ onClick }) => {
  return (
    <LoadMore type="button" onClick={onClick}>
      Load more
    </LoadMore>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default Button;
