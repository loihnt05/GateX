"use client";

import React from "react";
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
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo text-white">LOGO</div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={items1}
          style={{ flex: 1, minWidth: 0, height: "100%", fontSize: "16px" }}
        />
      </Header>
      <Content style={{ margin: "0 16px", height: "100%" }}>
        <div>
          <Breadcrumb
            items={[{ title: "Home" }, { title: "List" }, { title: "App" }]}
            style={{ margin: "16px 0" }}
          />
        </div>
        <div
          style={{
            padding: 24,
            minHeight: 360,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
}
