import React from 'react'
import {
  HomeFilled,
  InfoCircleOutlined,
  NotificationOutlined,
  TeamOutlined,
  AppstoreOutlined,
  FolderOpenOutlined,
  LockOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Menu, MenuProps } from 'antd';
import "../app/dashboard/custom-menu-gap.css";

const menuItems = [
  { key: "1", icon: <HomeFilled className='font-bold text-lg' />, label: "Dashboard" },
  { key: "2", icon: <InfoCircleOutlined className='font-bold text-lg' />, label: "About" },
  { key: "3", icon: <NotificationOutlined className='font-bold text-lg' />, label: "News & Events" },
  { key: "4", icon: <TeamOutlined className='font-bold text-lg' />, label: "HR" },
  { key: "5", icon: <AppstoreOutlined className='font-bold text-lg' />, label: "Services" },
  { key: "6", icon: <FolderOpenOutlined className='font-bold text-lg' />, label: "Resources" },
  { key: "7", icon: <LockOutlined className='font-bold text-lg' />, label: "Internal" },
  { key: "8", icon: <PhoneOutlined className='font-bold text-lg' />, label: "Contact" },
];
const items: MenuProps["items"] = menuItems.map((item) => ({
  key: item.key,
  label: <span style={{ userSelect: "none" }} key={item.key}>{`${item.label}`}</span>,
  icon: item.icon,
}));

export default function Sidebar() {
  return (
    <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={items}
          style={{
            width: "auto",
            flex: "none",
            whiteSpace: "nowrap",
            display: "flex",
            minWidth: 0,
            height: "100%",
            fontSize: "18px",
            justifyContent: "space-around",
            alignItems: "center",
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: "1px",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          }}
          className="custom-menu-gap"
        />
  )
}
