import React from 'react';
import { Vortex } from 'react-loader-spinner';
import { LoadDiv } from './Loader.styled';

const Loader = () => {
  return (
    <LoadDiv>
      <Vortex
        visible={true}
        height="100"
        width="100"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
      />
    </LoadDiv>
  );
};
export default Loader;
