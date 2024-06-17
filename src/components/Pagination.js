import React from 'react';
import { Pagination as AntPagination } from 'antd';

const Pagination = ({ totalUsers, usersPerPage, currentPage, paginate }) => {
    const handleChange = (page) => {
        paginate(page);
    };

    return (
        <AntPagination
            current={currentPage}
            total={totalUsers}
            pageSize={usersPerPage}
            onChange={handleChange}
            style={{ textAlign: 'center', marginTop: '20px' }}
        />
    );
};

export default Pagination;
