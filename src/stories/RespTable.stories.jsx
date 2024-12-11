import React from 'react';
import { Table } from '../Table';
import { withKnobs, select, text } from '@storybook/addon-knobs';

export default {
  title: 'Table/Responsive',
  component: Table,
  // decorators: [withKnobs], // Uncomment if needed
  parameters: {
    viewport: {
      defaultViewport: 'responsive',
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '375px',
            height: '667px',
          },
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px',
          },
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1440px',
            height: '900px',
          },
        },
        largeDesktop: {
          name: 'Large Desktop',
          styles: {
            width: '1920px',
            height: '1080px',
          },
        },
      },
    },
  },
};

export const ResponsiveTable = () => {
  const rows = [
    ['Awais', 'Khan', 'awaiskhan@gmail.com', '12345'],
    ['Abubaker', 'Mukhtar', 'abubaker@gmail.com', '12345'],
    ['M.Nadeem', 'Akram', 'nadeemakram4436@gmail.com', '03021436596'],
  ];

  const headers = ['First Name', 'Last Name', 'Email', 'Phone No.'];

  // Define styles for header and rows
  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    margin: '20px 0',
  };

  const headerStyle = {
    backgroundColor: '#f4f4f4',
    textAlign: 'left',
    padding: '12px 15px',
    fontSize: '16px',
    fontWeight: 'bold',
  };

  const rowStyle = {
    textAlign: 'left',
    padding: '12px 15px',
    fontSize: '14px',
  };

  const alternateRowStyle = {
    ...rowStyle,
    backgroundColor: '#f9f9f9',
  };

  // Media queries for responsive font sizes and padding
  const mediaQueries = {
    '@media (max-width: 375px)': {
      fontSize: '12px',
      padding: '8px 10px',
    },
    '@media (max-width: 768px)': {
      fontSize: '14px',
      padding: '10px 12px',
    },
    '@media (min-width: 1440px)': {
      fontSize: '16px',
      padding: '12px 15px',
    },
  };

  return (
    <div style={tableStyle}>
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                style={{
                  ...headerStyle,
                  ...mediaQueries,
                }}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, columnIndex) => (
                <td
                  key={columnIndex}
                  style={{
                    ...(rowIndex % 2 === 0 ? rowStyle : alternateRowStyle),
                    ...mediaQueries,
                  }}
                  onClick={() => console.log(`Row ${rowIndex} Column ${columnIndex} clicked`)}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
