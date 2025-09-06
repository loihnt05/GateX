import React from "react";
import { Menu } from "antd";
import Link from "next/link";
import LoginBtn from "./button-login";

const items = [
  {
    key: "1",
    label: <Link href="/dashboard">Dashboard</Link>,
  },
  {
    key: "2",
    label: <Link href="/about">About</Link>,
  },
  {
    key: "sub1",
    label: "News & Events",
    children: [
      {
        key: "3-1",
        label: <Link href="/news">News</Link>,
      },
      {
        key: "3-2",
        label: <Link href="/announcements">Announcements</Link>,
      },
      {
        key: "3-3",
        label: <Link href="/events">Events</Link>,
      },
    ],
  },
  {
    key: "sub2",
    label: "HR",
    children: [
      {
        key: "4-1",
        label: <Link href="/admissions">Admissions</Link>,
      },
      {
        key: "4-2",
        label: <Link href="/schedules">Schedules</Link>,
      },
      {
        key: "4-3",
        label: <Link href="/careers">Careers</Link>,
      },
      {
        key: "4-4",
        label: <Link href="/policies">Policies</Link>,
      },
      {
        key: "4-5",
        label: <Link href="/training">Training</Link>,
      },
    ],
  },
  {
    key: "sub3",
    label: "Services",
    children: [
      {
        key: "5-1",
        label: <Link href="/online-registration">Online registration</Link>,
      },
      {
        key: "5-2",
        label: <Link href="/payments">Payments</Link>,
      },
      {
        key: "5-3",
        label: <Link href="/support">Support</Link>,
      },
    ],
  },
  {
    key: "sub4",
    label: "Resources",
    children: [
      {
        key: "6-1",
        label: <Link href="/documents">Documents</Link>,
      },
      {
        key: "6-2",
        label: <Link href="/forms">Forms</Link>,
      },
      {
        key: "6-3",
        label: <Link href="/guides">Guides</Link>,
      },
    ],
  },
  {
    key: "sub5",
    label: "Contact",
    children: [
      {
        key: "7-1",
        label: <Link href="/info">Info</Link>,
      },
      {
        key: "7-2",
        label: <Link href="/map">Map</Link>,
      },
      {
        key: "7-3",
        label: <Link href="/feedback">Feedback</Link>,
      },
    ],
  },
];

export default function Sidebar() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={items}
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
        />
      </div>
      <div style={{ marginLeft: "auto", padding: "0 16px" }}>
        {/* Make sure LoginBtn is imported or defined */}
        <LoginBtn /> 
      </div>
    </div>
  );
}