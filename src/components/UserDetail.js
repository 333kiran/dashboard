// import React from 'react';
// import { Descriptions, Card } from 'antd';

// const UserDetail = ({ user }) => {
//     return (
//         <Card style={{ margin: '20px 0' }}>
//             <Descriptions title="User Details" bordered column={{ xs: 1, sm: 1, md: 2 }}>
//                 <Descriptions.Item label="ID">{user.id}</Descriptions.Item>
//                 <Descriptions.Item label="Name">{user.name}</Descriptions.Item>
//                 <Descriptions.Item label="Username">{user.username}</Descriptions.Item>
//                 <Descriptions.Item label="Email">{user.email}</Descriptions.Item>
//                 <Descriptions.Item label="Address">{`${user.address.suite}, ${user.address.street}, ${user.address.city}, ${user.address.zipcode}`}</Descriptions.Item>
//                 <Descriptions.Item label="Phone">{user.phone}</Descriptions.Item>
//                 <Descriptions.Item label="Website">{user.website}</Descriptions.Item>
//             </Descriptions>
//         </Card>
//     );
// };

// export default UserDetail;

import React from 'react';
import { Card, Descriptions } from 'antd';

const UserDetail = ({ user }) => {
    return (
        <Card title={`User Details - ${user.name}`} style={{ width: '100%', marginTop: 16 }}>
            <Descriptions bordered column={{ xs: 1, sm: 2, md: 3 }}>
                <Descriptions.Item label="ID">{user.id}</Descriptions.Item>
                <Descriptions.Item label="Name">{user.name}</Descriptions.Item>
                <Descriptions.Item label="Username">{user.username}</Descriptions.Item>
                <Descriptions.Item label="Email">{user.email}</Descriptions.Item>
                <Descriptions.Item label="Address">{`${user.address.suite}, ${user.address.street}, ${user.address.city}, ${user.address.zipcode}`}</Descriptions.Item>
                <Descriptions.Item label="Phone">{user.phone}</Descriptions.Item>
                <Descriptions.Item label="Website">{user.website}</Descriptions.Item>
            </Descriptions>
        </Card>
    );
};

export default UserDetail;

