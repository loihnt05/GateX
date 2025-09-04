"use client";

import React from "react";
import "./custom-menu-gap.css";
import { Breadcrumb, Layout, Menu, MenuProps, theme } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  PieChartOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer } = Layout;

const menuItems = [
  { key: "1", icon: <PieChartOutlined />, label: "Dashboard" },
  { key: "2", icon: <UserOutlined />, label: "Users" },
  { key: "3", icon: <VideoCameraOutlined />, label: "Videos" },
  { key: "4", icon: <UploadOutlined />, label: "Upload" },
];
const items1: MenuProps["items"] = menuItems.map((item) => ({
  key: item.key,
  label: `page ${item.key}`,
  icon: item.icon,
}));
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout className="h-full">
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          padding: "0 0px",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={items1}
          style={{
            display: "flex",
            minWidth: 0,
            height: "100%",
            fontSize: "18px",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: "1px",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          }}
          className="custom-menu-gap"
        />
      </Header>
      <Content
        style={{
          margin: "0 16px",
          height: "100%",
          background: colorBgContainer,
        }}
      >
        <div>
          <Breadcrumb
            items={[{ title: "Home" }, { title: "List" }, { title: "App" }]}
            style={{ margin: "16px 0" , fontSize: "16px"}}
          />
        </div>
        <div
          style={{
            padding: 24,
            minHeight: 360,
            background: "#fff",
            borderRadius: borderRadiusLG,
            fontSize: "16px",
          }}
        >
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
}
