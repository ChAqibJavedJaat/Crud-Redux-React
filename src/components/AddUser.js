import { Button, Form, Input } from "antd";
import axios from "axios";
import { message } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";
import TopBar from "./TopBar";

const App = () => {
  const navigate = useNavigate();
  const params = useParams();

  axios
    .get(`https://629f39e78b939d3dc292b3f2.mockapi.io/Crud/${params.id}`)
    .then((res) => console.log(res.data));

  const onFinish = (values) => {
    if (params.id) {
      axios.put(
        `https://629f39e78b939d3dc292b3f2.mockapi.io/Crud/${params.id}`
      );
    } else {
      axios
        .post("https://629f39e78b939d3dc292b3f2.mockapi.io/Crud", values)
        .then(() => {
          message.success("Done Successfully");
          navigate("/");
        })
        .catch(() => message.error("Success Failed"));
    }
  };

  return (
    <>
      <TopBar />
      <Form
        style={{ marginTop: "30px" }}
        name="addUser"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 6 }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,

              message: "Please input your name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 6, span: 6 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default App;
