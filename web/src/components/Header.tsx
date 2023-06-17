import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
  return (
    <div className="flex h-screen w-1/4 items-center justify-center ">
      <div className="flex h-5/6 w-10/12 flex-col items-center space-y-1 bg-green-800 pt-5">
        <div className="flex h-10 w-3/4 items-center space-x-3 bg-blue-600">
          <Image src={'/home.png'} alt={''} height={25} width={25} />
          <Link href={'/'}>Home</Link>
        </div>
        <div className="flex h-10 w-3/4 items-center space-x-3 bg-blue-600">
          <Image src={'/notifications.png'} alt={''} height={25} width={25} />
          <Link href={'/'}>Notificações</Link>
        </div>
        <div className="flex h-10 w-3/4 items-center space-x-3 bg-blue-600">
          <Image src={'/account.png'} alt={''} height={25} width={25} />
          <Link href={'/perfio'}>Perfio</Link>
        </div>
        <div className="flex h-10 w-3/4 items-center space-x-3 bg-blue-600">
          <Image src={'/chat.png'} alt={''} height={25} width={25} />
          <Link href={'/'}>Mensagens</Link>
        </div>
        <div className="flex h-10 w-3/4 items-center space-x-3 bg-blue-600">
          <Image src={'/settings.png'} alt={''} height={25} width={25} />
          <Link href={'/'}>Configurações</Link>
        </div>
      </div>
    </div>
  )
}
