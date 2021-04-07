import React from 'react';
import GameSettingsFormFormation from './GameSettingsFormFormation';

export default {
  title: 'pages/fantaleague/fantaleagueDetails/fantaleagueDetailsSettings/form/gameSettingsForm',
  component: GameSettingsFormFormation,
  args: {
    formationList: ['3-4-3', '3-5-2', '4-4-2', '3-6-1', '6-1-3'],
  },
};

const Template = (args) => <GameSettingsFormFormation {...args} />;

export const Default = Template.bind({});

Default.storyName = 'GameSettingsFormFormation';
