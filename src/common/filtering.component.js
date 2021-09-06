import React from "react";

const Filtering = (props) => {
    
    const { items, onClick, selectedItem } = props;

    return (
        <div className="col-lg-2">
            <ul class="list-group">
                {items.map((item) => (
                    <li
                        style={{ cursor: "pointer" }}
                        key={item.id}
                        onClick={() => onClick(item.name)}
                        class={
                            selectedItem === item.name
                                ? "list-group-item active"
                                : "list-group-item"
                        }
                    >
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Filtering;
