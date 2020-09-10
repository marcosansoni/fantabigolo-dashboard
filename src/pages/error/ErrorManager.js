import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { CloseOutlined } from '@ant-design/icons';
import { getMessage, getSnackbar } from '../../store/message/messageSelector';
import { getColorFromSeverity } from '../../store/message/constants/Severity';
import useTheme from '../../hooks/useTheme';
import {
  messageActionCreator,
  snackbarActionCreator,
} from '../../store/message/messageActionCreator';
import { Color } from '../../assets/theme';

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
  const selectedMessage = useSelector(getSnackbar);

  const [isVisible, setIsVisible] = useState(true);

  const {
    text,
  } = selectedMessage || {};

  useEffect(() => {
    // Set snackbar visible at each message change
    setIsVisible(true);
    // After 5 seconds it closes in each case the snackbar
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [selectedMessage]);

  return !!text && isVisible && (
    <Snackbar>
      <Container>
        {text}
      </Container>
    </Snackbar>
  );
};

export default ErrorManager;
