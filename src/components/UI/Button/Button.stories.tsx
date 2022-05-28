import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button, { IButton } from './Button';

export default {
  title: 'UI/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template = (args: IButton) => <Button {...args}>{args.children}</Button>;

export const Default: ComponentStory<typeof Button> = Template.bind({});

Default.args = {
  children: 'Press me',
};
