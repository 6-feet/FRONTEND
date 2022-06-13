import { ComponentStory, ComponentMeta } from '@storybook/react';
import InputWithButton, { IInputWithButton } from './InputWithButton';
import Call from '../../Icons/Call';

export default {
  title: 'UI/Inputs',
  component: InputWithButton,
} as ComponentMeta<typeof InputWithButton>;

const Template = (args: IInputWithButton) => <InputWithButton {...args} />;

export const WithButton: ComponentStory<typeof InputWithButton> = Template.bind({});

WithButton.args = {
  value: '',
  placeholder: 'phone',
  buttonText: 'check',
  buttonDisabled: false,
  id: 'inputWithButton',
  IconComponent: Call,
};
