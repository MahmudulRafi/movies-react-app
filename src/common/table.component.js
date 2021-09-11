import React from "react";
import TableBody from "./table-body.component";
import TableHeader from "./table-header.component";

const Table = ({ columns, items, onSort, sortColumn }) => {
    return (
        <table class="table">
            <TableHeader
                columns={columns}
                onSort={onSort}
                sortColumn={sortColumn}
            />
            <TableBody columns={columns} items={items} />
        </table>
    );
};

export default Table;
