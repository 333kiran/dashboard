import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import UserList from "../components/UserList";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";
import SortButton from "../components/SortButton";
import Loader from "../components/Loader";
import { Layout, Spin, Alert, Row, Col } from "antd";

const { Content } = Layout;

const HomePage = () => {
  const {
    data: users,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/users");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState(null);

  const usersPerPage = 10;

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (sortOrder) {
    filteredUsers.sort((a, b) =>
      sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );
  }

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSort = (order) => {
    setSortOrder(order);
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  if (loading) return <Loader />; 

  if (error)
    return (
      <Alert
        message="Error"
        description={error.message}
        type="error"
        showIcon
      />
    );

  return (
    <Layout>
      <Content style={{ padding: "20px 30px" }}>
        <Row gutter={16} justify="start" align="middle">
          <Col xs={24} sm={12} md={12} lg={12}>
            <SearchBar onSearch={handleSearch} />
          </Col>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={12}
            style={{ textAlign: "right", marginTop: "10px" }}
          >
            <SortButton onSort={handleSort} />
          </Col>
        </Row>
        <UserList users={currentUsers} />
        <Pagination
          totalUsers={filteredUsers.length}
          usersPerPage={usersPerPage}
          currentPage={currentPage}
          paginate={paginate}
        />
      </Content>
    </Layout>
  );
};

export default HomePage;
