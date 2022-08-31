import { Component } from 'react';

import { Rings } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

class Loader extends Component {
  state = {};

  render() {
    return (
      <>
        <Rings
          height="80"
          width="80"
          color="#4fa94d"
          radius="6"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="rings-loading"
        />
      </>
    );
  }
}

export default Loader;
