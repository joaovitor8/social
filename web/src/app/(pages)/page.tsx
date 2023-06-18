import { CriarPostagem } from '@/components/CriarPostagem'
import { Postagem } from '@/components/Postagens'

export default function Home() {
  return (
    <div className="mt-5 flex w-6/12 flex-col items-center space-y-5">
      <CriarPostagem />
      <Postagem />
      <Postagem />
      <Postagem />
      <Postagem />
      <Postagem />
      <Postagem />
      <Postagem />
      <Postagem />
      <Postagem />
      <Postagem />
    </div>
  )
}
