import Section from './Section';
import React from 'react';

// const SectionStory = () => {
//   return(
//     <Section
//       title={""}
//     />
//   )
// }
//
// export default SectionStory;

export default {
  title: 'Display/Section',
  component: Section,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

const Template = (args) => <Section {...args} />;

export const Default = Template.bind({});
Section.args = {
  title: 'title',
  label: 'Button',
};
