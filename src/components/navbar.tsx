import { CircleUserRoundIcon } from "lucide-react";
import Image from "next/image";

export function Navbar() {
  return (
    <nav className='xs:inset-x-8 fixed inset-x-4 top-8 mx-auto max-w-7xl'>
      <div className='xs:gap-8 flex gap-4'>
        <div className='flex shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-linear-to-b from-neutral-50/60 to-neutral-50/40 shadow-md/5 inset-shadow-sm backdrop-blur-sm'>
          <Image
            src='/logo-grey.svg'
            alt='Logotipo da Theka'
            width={50}
            height={50}
            className='scale-105'
          />
        </div>
        <ul className='font-heading flex flex-1 items-center justify-between gap-4 rounded-full border border-white/20 bg-linear-to-b from-neutral-50/60 to-neutral-50/40 px-8 text-xl font-bold text-neutral-400 shadow-md/5 inset-shadow-sm backdrop-blur-sm'>
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
