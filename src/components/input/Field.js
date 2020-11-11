import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ContainerChildren = styled.div`
  padding: 8px 0;
`;

const Field = (props) => {
  const {
    title,
    description,
    children,
    status, // TODO: insert status of an input for error management
    style,
    className,
  } = props;

  console.log(status);

  return (
    <Container style={style} className={className}>
      <div>{title}</div>
      <ContainerChildren>
        {children}
      </ContainerChildren>
      <div>{description}</div>
    </Container>
  );
};

Field.propTypes = {
  children: PropTypes.any,
  description: PropTypes.string,
  title: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  status: PropTypes.string,
};

Field.defaultProps = {
  children: undefined,
  title: undefined,
  description: undefined,
  style: undefined,
  className: undefined,
  status: undefined,
};

export default Field;
