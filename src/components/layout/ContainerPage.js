import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Color } from '../../assets/theme';

const FullPage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(p) => p.theme[Color.BACKGROUND]};
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  max-width: 1200px;
`;

const Toolbar = styled.div`
  height: 64px;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${(p) => p.theme[Color.SECONDARY]};
  border-bottom: ${(p) => `1px solid ${p.theme[Color.BORDER]}`};
  box-shadow: 2px 12px 24px rgba(51, 51, 51, 0.08);
`;

const ContainerPage = (props) => {
  const {
    children,
    toolbar,
  } = props;

  return (
    <FullPage>
      <Toolbar>
        <Container>
          {toolbar}
        </Container>
      </Toolbar>
      <Container>
        {children}
      </Container>
    </FullPage>
  );
};

ContainerPage.propTypes = {
  children: PropTypes.any,
  toolbar: PropTypes.any,
};

ContainerPage.defaultProps = {
  children: undefined,
  toolbar: undefined,
};

export default ContainerPage;
