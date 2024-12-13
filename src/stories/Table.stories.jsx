import React from "react";
import { Table } from "../Table";
import { withKnobs, select, text, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
    title: "Table - A Customizable React Table Component",
    component: Table,
    argTypes: {
        rows: {
            control: 'object',
            description: 'Data for the table rows',
        },
        headers: {
            control: 'object',
            description: 'Data for the table headers',
        },
        theme: {
            control: {
                type: "select",
                options: ["Dark", "Light"],
            },
            description: 'Theme of the table',
        },
        borderWidth: {
            control: 'text',
            description: 'Border width of the table cells',
        },
        cellPadding: {
            control: 'text',
            description: 'Padding inside table cells',
        },
    },
    decorators: [withKnobs],
    parameters: {
        a11y: {
            // Accessibility checks are now configured here
            element: '#root',
        },
    },
};

const Template = (args) => <Table {...args} />;

// Default Story
export const Default = Template.bind({});
Default.args = {
    rows: [
        ['Awais', 'Khan', 'awaiskhan@gmail.com', '12345'],
        ['Abubaker', 'Mukhtar', 'abubaker@gmail.com', '12345'],
        ['M.Nadeem', 'Akram', 'nadeemakram4436@gmail.com', '03021436596']
    ],
    headers: ['First Name', 'Last Name', 'Email', 'Phone No.'],
    theme: "Light",
    borderWidth: "1px",
    cellPadding: "10px",
};

// Dark Mode Story
export const DarkMode = Template.bind({});
DarkMode.args = {
    ...Default.args,
    theme: "Dark",
};
DarkMode.parameters = {
    backgrounds: {
        default: 'dark',
        values: [
            { name: 'dark', value: '#333' },
            { name: 'light', value: '#fff' },
        ],
    },
};

// Dynamic Input Story
export const DynamicInput = Template.bind({});
DynamicInput.args = {
    theme: "Light",
    rows: object("Rows", Default.args.rows),
    headers: object("Headers", Default.args.headers),
};

// Customized Layout Story
export const CustomizedLayout = Template.bind({});
CustomizedLayout.args = {
    ...Default.args,
    borderWidth: text("Border Width", "2px"),
    cellPadding: text("Cell Padding", "15px"),
};

// Responsive Story
export const Responsive = Template.bind({});
Responsive.args = {
    ...Default.args,
};
Responsive.parameters = {
    viewport: {
        defaultViewport: 'responsive',
    },
};

// Story with Custom Actions
export const WithActions = Template.bind({});
WithActions.args = {
    ...Default.args,
    onClickRow: action("Row Clicked"),
    onClickHeader: action("Header Clicked")
};

// TypeScript Typings (Add to Table component and stories)
/**
 * Table Props Type
 * @typedef {Object} TableProps
 * @property {Array<Array<string>>} rows - Rows data
 * @property {Array<string>} headers - Headers data
 * @property {string} theme - Table theme ('Dark' or 'Light')
 * @property {string} borderWidth - Border width of the table cells
 * @property {string} cellPadding - Padding inside table cells
 */
