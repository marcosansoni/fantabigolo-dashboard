import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';
import Color from '../../../assets/Color';
import Paragraph14Bold from '../../typography/paragraph/Paragraph14Bold';
import Paragraph12 from '../../typography/paragraph/Paragraph12';

const Container = styled.div`
  display: flex;
`;

const Logo = styled.div`
  border-radius: 50%;
  min-width: 42px;
  max-width: 42px;
  min-height: 42px;
  max-height: 42px;
  border: ${(p) => `1px solid${p.theme[Color.DARK_TEXT]}`};
`;

const Text = styled.div`
  padding-left: 16px;
  width: 100%;
`;

const Right = styled.div`
  padding-left: 16px;
`;

const Label = (props) => {
  const {
    style,
    className,
    title,
    subtitle,
    image,
    rightContent,
  } = props;

  return (
    <Container style={style} className={className}>
      <Logo>{image}</Logo>
      <Text>
        <Paragraph14Bold>{title}</Paragraph14Bold>
        <Paragraph12 color={Color.SUBTITLE}>{subtitle}</Paragraph12>
      </Text>
      <Right>
        {rightContent}
      </Right>
    </Container>
  );
};

Label.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  rightContent: PropTypes.element,
};

Label.defaultProps = {
  style: undefined,
  className: undefined,
  title: undefined,
  subtitle: undefined,
  image: undefined,
  rightContent: undefined,
};

export default Label;
