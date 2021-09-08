import React from "react";

const TableBody = ({ items, columns }) => {
    return (
        <tbody>
            {items.map((item) => (
                <tr>{columns.map((column) => column.content(item))}</tr>
            ))}
        </tbody>
    );
};

export default TableBody;
