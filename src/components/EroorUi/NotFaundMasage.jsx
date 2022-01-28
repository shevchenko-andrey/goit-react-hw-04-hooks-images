import { ErrorImage, ErrorWrapper } from './NotFaundStyled';
import PropTypes from 'prop-types';

function NotFaundMassage({ image }) {
  return (
    <>
      <ErrorWrapper>
        <ErrorImage src={image} alt="cat, not faund" />
      </ErrorWrapper>
    </>
  );
}
NotFaundMassage.propTypes = {
  image: PropTypes.string.isRequired,
};
export default NotFaundMassage;
