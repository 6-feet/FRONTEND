import { ComponentStory, ComponentMeta } from '@storybook/react';
import InputPassword, { IPassword } from './InputPassword';
import './InputPassword.module.scss';

export default {
  title: 'UI/Inputs',
  component: InputPassword,
} as ComponentMeta<typeof InputPassword>;

const Template = (args: IPassword) => <InputPassword {...args} />;

export const Password: ComponentStory<typeof InputPassword> = Template.bind({});

Password.args = {
  id: 'inputPassword',
  show: false,
};
