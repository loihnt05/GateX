import React from "react";

import { Menu } from "antd";
import MenuItem from "antd/es/menu/MenuItem";
import LoginBtn from "./button-login";

export default function Sidebar() {
  return (
    <div style={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "center" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          // items={items}
          style={{
            width: "full",
            flex: "1",
            whiteSpace: "nowrap",
            display: "flex",
            minWidth: 0,
            height: "100%",
            fontSize: "16px",
            alignItems: "center",
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: "1px",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          }}
        >
          <MenuItem key={"1"}>
            <span style={{ userSelect: "none" }}>Dashboard</span>
          </MenuItem>
          <MenuItem key={"2"}>
            <span style={{ userSelect: "none" }}>About</span>
          </MenuItem>
          <Menu.SubMenu title="News & Events">
            <MenuItem key={"3-1"}>
              <span style={{ userSelect: "none" }}>News</span>
            </MenuItem>
            <MenuItem key={"3-2"}>
              <span style={{ userSelect: "none" }}>Announcements</span>
            </MenuItem>
            <MenuItem key={"3-3"}>
              <span style={{ userSelect: "none" }}>Events</span>
            </MenuItem>
          </Menu.SubMenu>
          <Menu.SubMenu title="HR">
            <MenuItem key={"4-1"}>
              <span style={{ userSelect: "none" }}>Admissions</span>
            </MenuItem>
            <MenuItem key={"4-2"}>
              <span style={{ userSelect: "none" }}>Schedules</span>
            </MenuItem>
            <MenuItem key={"4-3"}>
              <span style={{ userSelect: "none" }}>Careers</span>
            </MenuItem>
            <MenuItem key={"4-4"}>
              <span style={{ userSelect: "none" }}>Policies</span>
            </MenuItem>
            <MenuItem key={"4-5"}>
              <span style={{ userSelect: "none" }}>Training</span>
            </MenuItem>
          </Menu.SubMenu>
          <Menu.SubMenu title="Services">
            <MenuItem key={"5-1"}>
              <span style={{ userSelect: "none" }}>Online registration</span>
            </MenuItem>
            <MenuItem key={"5-2"}>
              <span style={{ userSelect: "none" }}>Payments</span>
            </MenuItem>
            <MenuItem key={"5-3"}>
              <span style={{ userSelect: "none" }}>Support</span>
            </MenuItem>
          </Menu.SubMenu>
          <Menu.SubMenu title="Resources">
            <MenuItem key={"6-1"}>
              <span style={{ userSelect: "none" }}>Documents</span>
            </MenuItem>
            <MenuItem key={"6-2"}>
              <span style={{ userSelect: "none" }}>Forms</span>
            </MenuItem>
            <MenuItem key={"6-3"}>
              <span style={{ userSelect: "none" }}>Guides</span>
            </MenuItem>
          </Menu.SubMenu>
          <Menu.SubMenu title="Contact">
            <MenuItem key={"7-1"}>
              <span style={{ userSelect: "none" }}>Info</span>
            </MenuItem>
            <MenuItem key={"7-2"}>
              <span style={{ userSelect: "none" }}>Map</span>
            </MenuItem>
            <MenuItem key={"7-3"}>
              <span style={{ userSelect: "none" }}>Feedback</span>
            </MenuItem>
          </Menu.SubMenu>
        </Menu>
      </div>
      <div style={{ marginLeft: "auto", padding: "0 16px" }}>
        <LoginBtn/>
      </div>
    </div>
  );
}
