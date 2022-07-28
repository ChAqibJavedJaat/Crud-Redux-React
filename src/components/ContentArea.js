import React, { useEffect } from "react";
import { Layout, Table, Space, Button, message } from "antd";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUsers } from "../redux/actions";
import axios from "axios";

const { Content } = Layout;

function ContentArea({ userData, fetchUsers }) {
  console.log("🚀 ~ file: home.js ~ line 6 ~ Home ~ userData", userData);
  useEffect(() => {
    fetchUsers();
  }, []);

  const data = userData.map((user) => {
    const onDelete = async (id) => {
      try {
        await axios.delete(
          `https://629f39e78b939d3dc292b3f2.mockapi.io/Crud/${id}`
        );
        fetchUsers();
      } catch (error) {
        if (error.response) {
          debugger;
          message.error("Deletion Failed ! Due to some Unknown Reason.")
          console.log(error.response.status);
          console.log(error.response.data);
        }
      }
    };
    return {
      key: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      actions: (
        <Space>
          <Link to={`/update/${user.id}`}>
            <Button type="primary" shape="round">
              Update
            </Button>
          </Link>

          <Button
            type="primary"
            shape="round"
            onClick={() => onDelete(user.id)}
          >
            Delete
          </Button>
        </Space>
      ),
    };
  });

  return (
    <div>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <div className="site-layout-content">
          {" "}
          <h1>Hello</h1>
          <Table
            pagination={false}
            columns={[
              {
                title: "Name",
                dataIndex: "name",
              },
              {
                title: "UserName",
                dataIndex: "username",
              },
              {
                title: "Email",
                dataIndex: "email",
              },
              {
                title: "Actions",
                dataIndex: "actions",
              },
            ]}
            dataSource={data}
          />
        </div>
      </Content>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.root.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentArea);
