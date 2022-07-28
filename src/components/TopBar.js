import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
const { Header } = Layout;

const topLinks = [
  { label: "Home", link: "/", key: "home" },
  { label: "Add", link: "/addUser", key: "addUser" },
 
].map((item) => ({
  key: item.key,
  label: <Link to={item.link}>{item.label}</Link>,
}));
function TopBar() {
  return (
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={topLinks}
        />
      </Header>
  );
}

export default TopBar;
