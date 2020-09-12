import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getSnackbar } from '../../store/message/messageSelector';
import { Color } from '../../assets/theme';
import { snackbarActionCreator } from '../../store/message/messageActionCreator';

const Snackbar = styled.div`
  position: absolute;
  left: 24px;
  bottom: 24px;
  display: flex;
  align-items: center;
  background-color: ${(p) => p.theme[Color.ON_BACKGROUND]};
  border-radius: 4px;
  min-width: 192px;
  min-height: 48px;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 8px 16px;
  font-size: 16px;
  color: ${(p) => p.theme[Color.BACKGROUND]};
`;

const ErrorManager = () => {
  const dispatch = useDispatch();
  const selectedMessage = useSelector(getSnackbar);

  const [text, setText] = useState(selectedMessage && selectedMessage.text);

  console.log(selectedMessage);

  useEffect(() => {
    dispatch(snackbarActionCreator());
    // After 5 seconds it closes in each case the snackbar
    const timer = setTimeout(() => {
      // Dispatch action to remove message stored into redux
      setText(null);
    }, 5000);
    return () => clearTimeout(timer);
  }, [text, dispatch]);

  return !!text && (
    <Snackbar>
      <Container>
        {text}
      </Container>
    </Snackbar>
  );
};

export default ErrorManager;
