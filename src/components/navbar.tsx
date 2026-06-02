import { CircleUserRoundIcon } from "lucide-react";
import Image from "next/image";

export function Navbar() {
  return (
    <nav className='fixed inset-x-8 top-8 mx-auto max-w-7xl'>
      <div className='flex gap-8'>
        <div className='flex shrink-0 items-center justify-center rounded-full border border-white/50 bg-white/10 shadow-lg backdrop-blur-sm'>
          <Image
            src='/logo-grey.svg'
            alt='Logotipo da Theka'
            width={50}
            height={50}
          />
        </div>
        <ul className='font-heading flex flex-1 items-center justify-between gap-4 rounded-full border border-white/50 bg-white/10 px-8 text-xl font-bold text-[#5A5A5A] shadow-lg backdrop-blur-sm'>
          <li className='hidden sm:block'>
            <a href=''>Início</a>
          </li>
          <li className='hidden sm:block'>
            <a href=''>Acervo</a>
          </li>
          <li className='hidden sm:block'>
            <a href=''>Sobre nós</a>
          </li>
          <li className='hidden sm:block'>
            <a href=''>Contato</a>
          </li>
          <li className='hidden sm:block'>
            <CircleUserRoundIcon size={25} />
          </li>
          <li className='mx-auto block shrink-0 sm:hidden'>
            <Image
              src='/full-logo-grey.svg'
              alt='Logotipo completo da Theka'
              width={95}
              height={26}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
}
