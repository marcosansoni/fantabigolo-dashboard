import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Color from '../../../assets/Color';
import Heading4 from '../../typography/heading/Heading4';

const Container = styled.div`
  background-color: ${(p) => p.theme[Color.BACKGROUND]};
  border: ${(p) => `2px solid ${p.theme[p.borderColor]}`};
  padding: 8px 12px;
  border-radius: 4px;
  display: inline-flex;
`;

const Tag = (props) => {
  const { style, className, borderColor, children } = props;

  return (
    <Container style={style} className={className} borderColor={borderColor}>
      <Heading4 style={{display: 'flex', alignItems: 'center'}}>
        {children}
      </Heading4>
    </Container>
  );
};

Tag.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  borderColor: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

Tag.defaultProps = {
  style: undefined,
  className: undefined,
  borderColor: Color.PRIMARY_DARK,
  children: undefined,
};

export default Tag;
