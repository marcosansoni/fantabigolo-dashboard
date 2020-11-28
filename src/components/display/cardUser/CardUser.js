import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Color from '../../../assets/Color';
import Card from '../card/Card';
import Label from '../label/Label';

const ContainerActions = styled.div`
  background-color: ${(p) => p.theme[Color.BACKGROUND]};
  display: flex;
  align-items: flex-end;
  margin-bottom: -8px;
  
  > * {
    margin-left: 8px;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CardUser = (props) => {
  const { style, className, title, subtitle, image, renderAction, ...cardProps } = props;

  return (
    <Card style={style} className={className} {...cardProps}>
      <Content>
        <Label title={title} subtitle={subtitle} image={image} />
        {renderAction && (
          <ContainerActions>{renderAction()}</ContainerActions>
        )}
      </Content>
    </Card>
  );
};

CardUser.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  renderAction: PropTypes.func,
};

CardUser.defaultProps = {
  style: undefined,
  className: undefined,
  title: undefined,
  subtitle: undefined,
  image: undefined,
  renderAction: undefined,
};

export default CardUser;
