import React, { FC, useCallback, useState } from 'react';
import { MessageType } from '../../types/messageType';
import * as Styled from '../../styles/components/FarmButton';

const FarmButton: React.FC = () => {
  const [isFarm, setIsFarm] = useState(false);

  const startFarm = useCallback(() => {
    setIsFarm(!isFarm);
    chrome.runtime.sendMessage('Hello from the popup!');
  }, []);
  return (
    <Styled.Container>
      <a>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <button onClick={startFarm}>Farm</button>
      </a>
    </Styled.Container>
  );
};

export default FarmButton;
