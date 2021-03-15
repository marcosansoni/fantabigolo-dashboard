import { Tab as MaterialTab } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Font from '../../../assets/Font';

const StyledMaterialTab = styled(MaterialTab)`
  
  .MuiTab-wrapper{
    font-family: ${Font.SEMIBOLD};
  }
`;

const Tab = (props) => {
  const { style, className, label, ...otherProps } = props;

  return (
    <StyledMaterialTab {...otherProps} label={label} style={style} className={className} />
  );
};

Tab.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  label: PropTypes.string,
};

Tab.defaultProps = {
  style: undefined,
  className: undefined,
  label: undefined,
};

export default Tab;
