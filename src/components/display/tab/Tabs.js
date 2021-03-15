import { Tab as MaterialTab, Tabs as MaterialTabs } from '@material-ui/core';
import React, { useState } from 'react';

const Tabs = (props) => {
  const {children} = props;
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
    >
      <MaterialTab label="Item One" />
      <MaterialTab label="Item Two" />
      <MaterialTab label="Item Three" />
    </MaterialTabs>
  );
};

export default Tabs;
