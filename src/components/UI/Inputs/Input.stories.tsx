import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input, { IInput } from './Input';
import './Input.module.scss';
import Folder from '../Icons/Folder';

export default {
  title: 'UI/Inputs',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template = (args: IInput) => <Input {...args} />;

export const Default: ComponentStory<typeof Input> = Template.bind({});

Default.args = {
  value: 'Name',
  placeholder: 'write your name',
  disabled: false,
  id: 'input',
  IconComponent: Folder,
};
