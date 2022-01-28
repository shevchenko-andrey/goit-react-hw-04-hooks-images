import { SpinnerDiamond } from 'spinners-react';

const Loader = () => {
  const style = {
    display: 'block',
    margin: '30 auto',
  };
  return <SpinnerDiamond style={style} color={'#3f51b5'} size={40} />;
};
export default Loader;
