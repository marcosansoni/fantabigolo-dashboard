import styled from 'styled-components';
import PropTypes from 'prop-types';
import React from 'react';
import Heading4 from '../../typography/heading/Heading4';
import Paragraph12 from '../../typography/paragraph/Paragraph12';
import Validation from '../../../constants/Validation';
import Color from '../../../assets/Color';

const Container = styled.div``;

const Title = styled(Heading4)`
  padding-bottom: 8px;
`;

const Content = styled.div`
`;

const Description = styled(Paragraph12)`
  padding-top: 8px;
  color: ${(p) => p.validation === Validation.ERROR && p.theme[Color.ERROR]};
`;

const InputContainer = (props) => {
  const { style, className, title, children, description, validation } = props;

  return (
    <Container style={style} className={className}>
      <Title>
        {title}
      </Title>
      <Content>
        {children}
      </Content>
      {description && (<Description validation={validation}>{description}</Description>)}
    </Container>
  );
};

InputContainer.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  validation: PropTypes.oneOf(Object.values(Validation)),
};

InputContainer.defaultProps = {
  style: undefined,
  className: undefined,
  title: undefined,
  description: undefined,
  validation: Validation.VALID,
};

export default InputContainer;
