import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Color } from '../../assets/theme';

const Title = styled.div`
  width: 100%;
`;

const Separator = styled.div`
  height: 1px;
  background-color: ${(p) => p.theme[Color.ON_BACKGROUND]};
  width: 100%;
  padding-top: 4px;
`;

const Container = styled.div`
  padding-top: 16px;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Section = (props) => {
  const {
    title,
    children,
    style,
    className,
  } = props;

  return (
    <Container style={style} className={className}>
      <Title>
        {title}
        {' '}
        <Separator />
      </Title>
      {children}
    </Container>
  );
};

Section.propTypes = {
  children: PropTypes.any,
  title: PropTypes.any,
  style: PropTypes.object,
  className: PropTypes.string,
};

Section.defaultProps = {
  children: undefined,
  title: undefined,
  style: undefined,
  className: undefined,
};

export default Section;
