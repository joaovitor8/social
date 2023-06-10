import { Feed } from '@/components/Feed'
import { Header } from '@/components/Header'
import { More } from '@/components/More'

export default function Home() {
  return (
    <main className="flex">
      <Header />
      <Feed />
      <More />
    </main>
  )
}
