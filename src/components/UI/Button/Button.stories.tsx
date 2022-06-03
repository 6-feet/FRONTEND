import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button, { IButton } from './Button';
import {Sizes, Variants} from './Button.types';
import './Button.module.scss';

export default {
  title: 'UI/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template = (args: IButton) => <Button {...args}>{args.children}</Button>;

export const Default: ComponentStory<typeof Button> = Template.bind({});

Default.args = {
  children: 'Press me'
};


export const Rounded: ComponentStory<typeof Button> = Template.bind({});

Rounded.args = {
  children: '+',
  size: Sizes.rounded,
  variant: Variants.secondary
};