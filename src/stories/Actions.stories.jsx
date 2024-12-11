import React from "react";
import { Table } from "../Table";
import { withKnobs, select} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions'

export default {
  title: "Table/Actions",
  component: Table,
  argTypes: {
    rows: { control: '' },
    headers: { control: '' },
    theme: { control: { type: "select", options: ["Dark", "Light"] } }
  },
  decorators: [withKnobs],
};

const Template = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  rows: [
    ['Awais', 'Khan', 'awaiskhan@gmail.com', '12345'],
    ['Abubaker', 'Mukhtar', 'abubaker@gmail.com', '12345'],
    ['M.Nadeem', 'Akram', 'nadeemakram4436@gmail.com', '03021436596']
  ],
  headers: ['First Name', 'Last Name', 'Email', 'Phone No.'],
  theme: "Light",
  onRowClick: action('onRowClick'),
  onHeaderClick: action('onHeaderClick'),
};