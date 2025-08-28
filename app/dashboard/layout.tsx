import { AntdRegistry } from "@ant-design/nextjs-registry";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return <AntdRegistry>{children}</AntdRegistry>;
}
