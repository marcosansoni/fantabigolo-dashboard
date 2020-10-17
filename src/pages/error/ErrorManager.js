import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Color } from '../../assets/theme';
import useActionCreator from '../../store/utils/useActionCreator';
import MessageActionType from '../../store/message/MessageActionType';
import snackbarSelector from '../../store/message/selectors/snackbarSelector';

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
  const { text: defaultText } = useSelector(snackbarSelector);

  const [text, setText] = useState(defaultText);

  const resetSnackbar = useActionCreator(MessageActionType.SNACKBAR);

  useEffect(() => {
    if (defaultText && defaultText !== text) setText(defaultText);
    resetSnackbar();
    // After 5 seconds it closes in each case the snackbar
    const timer = setTimeout(() => {
      // Dispatch action to remove message stored into redux
      setText(null);
    }, 5000);
    return () => clearTimeout(timer);
  }, [defaultText]);

  return !!text && (
    <Snackbar>
      <Container>
        {text}
      </Container>
    </Snackbar>
  );
};

export default ErrorManager;
