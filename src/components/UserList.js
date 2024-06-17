import React from 'react';
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import '../styles/App.css'

const UserList = ({ users }) => {
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            width: 50,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => <Link to={`/users/${record.id}`}>{text}</Link>,
        },
        {
            title: 'Username',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'City',
            dataIndex: ['address', 'city'],
            key: 'city',
        },
    ];

    return (
        <div className="user-list-table-container">
            <Table 
                columns={columns} 
                dataSource={users} 
                rowKey="id" 
                pagination={false} 
                scroll={{ x: true }}
            />
        </div>
    );
};

export default UserList;
