import React, { FC, useCallback, useState } from 'react';
import * as Styled from '../../styles/components/FarmButton';

const FarmButton: React.FC = () => {
  const [isFarm, setIsFarm] = useState(false);

  const startFarm = useCallback(() => {
    setIsFarm(!isFarm);
    chrome.runtime.sendMessage('Hello from the popup!');
  }, [isFarm]);
  return (
    <Styled.Container onClick={startFarm}>
      <a>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {!isFarm ? <>Farm</> : <>Desligar Farm</>}
      </a>
    </Styled.Container>
  );
};

export default FarmButton;
