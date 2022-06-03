import { ComponentStory, ComponentMeta } from '@storybook/react';
import ToggleSwitch, { IToggleSwitch } from './ToggleSwitch';
import './ToggleSwitch.module.scss';

export default {
  title: 'UI/ToggleSwitch',
  component: ToggleSwitch,
} as ComponentMeta<typeof ToggleSwitch>;

const Template = (args: IToggleSwitch) => <ToggleSwitch {...args} />;

export const Default: ComponentStory<typeof ToggleSwitch> = Template.bind({});

Default.args = {
  active: false,
  id: 'switch',
};
