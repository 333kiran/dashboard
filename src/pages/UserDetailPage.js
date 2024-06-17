
import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import UserDetail from '../components/UserDetail';
import { Layout, Spin, Alert } from 'antd';
import Loader from '../components/Loader';

const { Content } = Layout;

const UserDetailPage = () => {
    const { id } = useParams();
    const { data: user, loading, error } = useFetch(`https://jsonplaceholder.typicode.com/users/${id}`);

    if (loading) return  <Loader />;
    if (error) return <Alert message="Error" description={error.message} type="error" showIcon />;

    return (
        <Layout>
            <Content style={{ padding: '20px 50px' }}>
                <UserDetail user={user} />
            </Content>
        </Layout>
    );
};

export default UserDetailPage;
