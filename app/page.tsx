import { prisma } from "@/lib/prisma";

export default async function Home() {
  // When building the image we skip DB calls to avoid requiring a live DB
  // Set SKIP_PRERENDER=1 in the Dockerfile builder stage to use this path
  if (process.env.SKIP_PRERENDER === '1') {
    return (
      <button>Guest</button>
    )
  }

  const user = await prisma.user.findFirst({
    where: {
      email: 'test@test.com'
    }
  })

  return (
    <button>{user?.name}</button>
  )
}
