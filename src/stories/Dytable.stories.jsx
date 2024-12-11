import React from "react";
import { Table } from "../Table";
import { withKnobs, array , text , select} from '@storybook/addon-knobs';

export default {
    title: "Table/Dynamic Rows and Headers",
    component: Table,
    argTypes: {
        rows: { control: {
                    type: 'array',
                    seprator: ','
                }},
        headers: {  control: {
                    type: 'array',
                    seprator: ','
                } },
        theme: {
            control: {
                type: "select",
                option: ["Dark , Light"]
            }
        }
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
    theme: "Dark"
};