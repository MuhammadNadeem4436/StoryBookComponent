import React from "react";
import { Table } from "../Table";
import { withKnobs, select } from '@storybook/addon-knobs';
import EnvironmentDecorator from '../EnviDecorator';

export default {
  title: "Table/Environment",
  component: Table,
  argTypes: {
    // rows: { control: '' },
    // headers: { control: '' },
    theme: { control: { type: "select", options: ["Dark", "Light"] } },
    environment: { control: { type: "select", options: ["Light", "Dark"] } },
  },
  decorators: [withKnobs, EnvironmentDecorator],
};

const Template = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  rows: [
    ['Awais', 'Khan', 'awaiskhan@gmail.com', '12345'],
    ['Abubaker', 'Mukhtar', 'abubaker@gmail.com', '12345'],
    ['M.Nadeem', 'Akram', '(link unavailable)', '03021436596']
  ],
  headers: ['First Name', 'Last Name', 'Email', 'Phone No.'],
  theme: select('Theme', ['Light', 'Dark'], 'Light'),
  environment: select('Environment', ['Light', 'Dark'], 'Light'),
};

export const DarkMode = Template.bind({});
DarkMode.args = {
  ...Default.args,
  theme: select('Theme', ['Light', 'Dark'], 'Dark'),
  environment: select('Environment', ['Light', 'Dark'], 'Dark'),
};