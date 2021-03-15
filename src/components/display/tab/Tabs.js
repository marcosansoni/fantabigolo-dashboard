import { Tabs as MaterialTabs } from '@material-ui/core';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Tabs = (props) => {
  const { children, style, className } = props;
  const [value, setValue] = useState(0);

  const handleChange = (e, updatedValue) => {
    setValue(updatedValue);
  };

  return (
    <MaterialTabs
      value={value}
      onChange={handleChange}
      indicatorColor="primary"
      textColor="primary"
      style={style}
      className={className}
    >
      {children}
    </MaterialTabs>
  );
};

Tabs.propTypes = {
  children: PropTypes.any,
  style: PropTypes.object,
  className: PropTypes.string,
};

Tabs.defaultProps = {
  children: undefined,
  style: undefined,
  className: undefined,
};

export default Tabs;
