import ChatForum from '@/components/Chatforum';
import { currentUser } from '@clerk/nextjs/server'

export default async function Page({ params }) {
  const user = await currentUser()
  const { slug } = await params
  return <ChatForum slug={slug} Clerkuser={{ id: user.id, name: user.firstName, token: user.publicMetadata.token }} />
}