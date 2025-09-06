import { prisma } from "@/lib/prisma";
import { Button } from "antd";

export const dynamic = "force-dynamic";

export default async function Home() {
  if (process.env.SKIP_PRERENDER === "1") {
    return <Button>Guest</Button>;
  }

  const user = await prisma.user.findFirst({
    where: {
      email: "test@test.com",
    },
  });

  return <div>Home</div>;
}
