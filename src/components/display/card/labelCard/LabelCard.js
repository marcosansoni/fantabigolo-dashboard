import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';
import Color from '../../../../assets/Color';
import Paragraph14Bold from '../../../typography/paragraph/Paragraph14Bold';
import Paragraph12 from '../../../typography/paragraph/Paragraph12';
import IconCard from '../logoCard/IconCard';

const Container = styled.div`
  display: flex;
`;

const Text = styled.div`
  padding-left: 16px;
  width: 100%;
`;

const Right = styled.div`
  padding-left: 16px;
`;

const LabelCard = (props) => {
  const {
    style,
    className,
    title,
    subtitle,
    icon,
    rightContent,
  } = props;

  console.log(icon);

  return (
    <Container style={style} className={className}>
      {icon && (<IconCard>{icon}</IconCard>)}
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

LabelCard.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  icon: PropTypes.any,
  rightContent: PropTypes.element,
};

LabelCard.defaultProps = {
  style: undefined,
  className: undefined,
  title: undefined,
  subtitle: undefined,
  icon: undefined,
  rightContent: undefined,
};

export default LabelCard;
