import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import H6 from '../typography/heading/H6';
import P from '../typography/paragraph/P';
import MicroCopy from '../typography/paragraph/MicroCopy';

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

  return (
    <Container style={style} className={className}>
      <H6>{title}</H6>
      <ContainerChildren>
        {children}
      </ContainerChildren>
      <MicroCopy>{description}</MicroCopy>
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
