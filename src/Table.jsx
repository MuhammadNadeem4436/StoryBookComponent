import { useEffect } from "react";
import React from "react";
import styles from "./table.module.css";
import PropTypes from "prop-types";
import { lightTheme, darkTheme } from "./Theme";

export const Table = ({
  rows,
  headers,
  borderWidth = "medium",
  cellPadding = "medium",
  theme = "Light",
  headerTextColor,
  headerBackgroundColor,
  headerBorderColor,
  cellTextColor,
  backgroundColor,
  cellBorderColor,
  onClickRow,
  onClickHeader,
}) => {
  useEffect(() => {
    if (headers.length < 1) {
      throw Error("Must have at least one header");
    } else if (!rows.every((r) => r.length === headers.length)) {
      throw Error("Row length must equal to header length");
    }
  }, [rows, headers]);

  const cellPaddingMap = {
    small: "3px",
    medium: "8px",
    large: "15px",
  };

  const borderWidthMap = {
    thin: "1px",
    medium: "2px",
    thick: "3px",
  };

  // Applying themes
  const themeStyle = theme === "Dark" ? darkTheme : lightTheme;

  return (
    <>
      <div className={styles.main}>
        {headers.map((h, columnIndex) => (
          <div key={columnIndex} className={styles.column}>
            <div
              className={styles.header}
              style={{
                color: headerTextColor || themeStyle.headerTextColor,
                padding: cellPaddingMap[cellPadding],
                backgroundColor:
                  headerBackgroundColor || themeStyle.headerBackgroundColor,
                border: `${borderWidthMap[borderWidth]} solid ${
                  headerBorderColor || themeStyle.headerBorderColor
                }`,
              }}
              onClick={() => onClickHeader(columnIndex)}
            >
              {h}
            </div>
            <div className={styles.rows}>
              {rows.map((r, rowIndex) => (
                <div
                  key={rowIndex}
                  className={styles.cell}
                  style={{
                    color: cellTextColor || themeStyle.cellTextColor,
                    backgroundColor: backgroundColor || themeStyle.backgroundColor,
                    padding: cellPaddingMap[cellPadding],
                    border: `${borderWidthMap[borderWidth]} solid ${
                      cellBorderColor || themeStyle.cellBorderColor
                    }`,
                  }}
                  onClick={() => onClickRow(rowIndex, columnIndex)}
                >
                  {r[columnIndex]}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

Table.propTypes = {
  borderWidth: PropTypes.oneOf(["thin", "medium", "thick"]),
  cellPadding: PropTypes.oneOf(["small", "medium", "large"]),
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  rows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  theme: PropTypes.oneOf(["Dark", "Light"]),
  headerTextColor: PropTypes.string,
  headerBackgroundColor: PropTypes.string,
  headerBorderColor: PropTypes.string,
  cellTextColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  cellBorderColor: PropTypes.string,
  onClickRow: PropTypes.func,
  onClickHeader: PropTypes.func,
};