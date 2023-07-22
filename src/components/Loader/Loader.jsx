import { Oval } from 'react-loader-spinner';

const Loader = () => (
  <Oval
    height={40}
    width={40}
    color="#f2ab26"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    ariaLabel="oval-loading"
    secondaryColor="#f2ab26"
    strokeWidth={2}
    strokeWidthSecondary={2}
  />
);

export default Loader;
