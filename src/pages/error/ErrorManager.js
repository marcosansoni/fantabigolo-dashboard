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

const Snackbar = styled.div`
  position: absolute;
  left: 24px;
  bottom: 24px;
  display: flex;
  align-items: center;
  background-color: ${(p) => p.color};
  border-radius: 4px;
  min-width: 192px;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 8px 24px;
  font-size: 16px;
`;

const Closing = styled.div`
  position: absolute;
  top:4px;
  right: 6px;
  cursor: pointer;
`;

const ErrorManager = () => {
  const selectedMessage = useSelector(getSnackbar);
  const dispatch = useDispatch();

  const [isVisible, setIsVisible] = useState(true);

  const {
    text,
    severity,
  } = selectedMessage || {};

  const {
    theme,
  } = useTheme();

  const handleCloseSnackbar = () => {
    dispatch(snackbarActionCreator());
  };

  const color = getColorFromSeverity(severity, theme);

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
    <Snackbar color={color}>
      <Container>
        <Closing onClick={handleCloseSnackbar}><CloseOutlined /></Closing>
        {text}
      </Container>
    </Snackbar>
  );
};

export default ErrorManager;
