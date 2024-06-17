

import React from 'react';
import { Dropdown, Menu } from 'antd';

const SortButton = ({ onSort }) => {
    const handleSort = (type) => {
        onSort(type);
    };

    const menu = (
        <Menu>
            <Menu.Item onClick={() => handleSort('asc')}>
                A-Z
            </Menu.Item>
            <Menu.Item onClick={() => handleSort('desc')}>
                Z-A
            </Menu.Item>
        </Menu>
    );

    return (
        <Dropdown overlay={menu} placement="bottomLeft">
            <button className="sort-button">Sort by Name</button>
        </Dropdown>
    );
};

export default SortButton;
