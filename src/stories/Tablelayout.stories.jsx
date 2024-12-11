import React from "react";
import { Table } from "../Table";
import { withKnobs, select } from '@storybook/addon-knobs';

export default {
    title: "Table/ Dynamic Table Layout",
    component: Table,
    argTypes: {
        rows: { control: '' },
        headers: { control: '' },
        theme: {
            control: {
                type: "select",
                option: ["Dark , Light"]
            }
        },
        // Add color knobs for header and cell colors
        headerTextColor: {
            control: 'color',  // Allow user to select a color for the header text
        },
        headerBackgroundColor: {
            control: 'color',  // Allow user to select a color for the header background
        },
        headerBorderColor: {
            control: 'color',  // Allow user to select a color for the header border
        },
        cellTextColor: {
            control: 'color',  // Allow user to select a color for the cell text
        },
        backgroundColor: {
            control: 'color',  // Allow user to select a color for the cell background
        },
        cellBorderColor: {
            control: 'color',  // Allow user to select a color for the cell border
        },
    },
    decorators: [withKnobs],
}

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
    headerTextColor: "#000000",  // Default header text color
    headerBackgroundColor: "#f1f1f1",  // Default header background color
    headerBorderColor: "#dcdcdc",  // Default header border color
    cellTextColor: "#000000",  // Default cell text color
    backgroundColor: "#ffffff",  // Default cell background color
    cellBorderColor: "#dcdcdc",
};