import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Color from '../../../../assets/Color';
import Card from '../Card';
import LabelCard from '../labelCard/LabelCard';

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

const UserCard = (props) => {
  const { style, className, title, subtitle, icon, renderAction, ...cardProps } = props;

  return (
    <Card style={style} className={className} {...cardProps}>
      <Content>
        <LabelCard title={title} subtitle={subtitle} icon={icon} />
        {renderAction && (
          <ContainerActions>{renderAction()}</ContainerActions>
        )}
      </Content>
    </Card>
  );
};

UserCard.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  icon: PropTypes.any,
  renderAction: PropTypes.func,
};

UserCard.defaultProps = {
  style: undefined,
  className: undefined,
  title: undefined,
  subtitle: undefined,
  icon: undefined,
  renderAction: undefined,
};

export default UserCard;
