"use client";

import React from "react";
import { Breadcrumb, Layout, theme } from "antd";

import Sidebar from "@/components/sidebar";

const { Header, Content, Footer } = Layout;

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
        <Sidebar />
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
            style={{ margin: "16px 0", fontSize: "16px" }}
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
