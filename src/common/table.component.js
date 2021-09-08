import React from "react";
import TableBody from "./table-body.component";
import TableHeader from "./table-header.component";

const Table = ({ columns, items, onClick }) => {
    return (
        <table class="table">
            <TableHeader columns={columns} />
            <TableBody columns={columns} items={items} onClick={onClick} />
        </table>
    );
};

export default Table;
