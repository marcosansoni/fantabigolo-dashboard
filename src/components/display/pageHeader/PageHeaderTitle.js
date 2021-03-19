import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Color from '../../../assets/Color';
import Font from '../../../assets/Font';
import PageHeader from './PageHeader';

const UpperTitle = styled.div`
  font-family: ${Font.REGULAR};
  font-size: 16px;
  margin-bottom: 4px;
  color: ${(p) => p.theme[Color.TEXT_LIGHT]};
`;

const Title = styled.div`
  font-family: ${Font.SEMIBOLD};
  font-size: 28px;
  margin-bottom: 4px;
  color: ${(p) => p.theme[Color.TEXT_DARK]};
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
`;

const Right = styled.div``;

const PageHeaderTitle = (props) => {
  const { upperTitle, title, children, rightContent, style, className } = props;

  return (
    <PageHeader style={style} className={className}>
      <Left>
        <UpperTitle>{upperTitle}</UpperTitle>
        <Title>{title}</Title>
        {children}
      </Left>
      <Right>
        {rightContent}
      </Right>
    </PageHeader>
  );
};

PageHeaderTitle.propTypes = {
  upperTitle: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.any,
  rightContent: PropTypes.any,
  style: PropTypes.object,
  className: PropTypes.string,
};

PageHeaderTitle.defaultProps = {
  upperTitle: undefined,
  title: undefined,
  children: undefined,
  rightContent: undefined,
  style: undefined,
  className: undefined,
};

export default PageHeaderTitle;
