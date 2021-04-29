import * as React from 'react';

import * as Styled from '../../styles/components/FarmButton';

const FarmButton: React.FC = () => {
  return (
    <Styled.Container>
      <a href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Farm
      </a>
    </Styled.Container>
  );
};

export default FarmButton;
