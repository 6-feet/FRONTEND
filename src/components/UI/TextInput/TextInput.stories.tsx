import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextInput, { ITextInput } from './TextInput';
import './TextInput.module.scss';

export default {
    title: 'UI/TextInput',
    component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template = (args: ITextInput) => <TextInput {...args}/>;

export const Default: ComponentStory<typeof TextInput> = Template.bind({});

Default.args = {
    value: 'Name',
    placeholder: 'write your name',
    disabled: false
};
