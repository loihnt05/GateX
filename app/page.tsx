import { prisma } from "@/lib/prisma";

// Ensure this page is rendered dynamically at request time so DB calls
// run when the container is started and `DATABASE_URL` is available.
export const dynamic = 'force-dynamic';

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
