"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { CircleUserRoundIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MobileMenu } from "@/components/mobile-menu";
import { NAV_LINKS } from "@/constants/navigation";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 40rem)");
  const [prevIsDesktop, setPrevIsDesktop] = useState(isDesktop);

  const openMenu = () => setIsMobileMenuOpen(true);
  const closeMenu = () => setIsMobileMenuOpen(false);

  if (isDesktop !== prevIsDesktop) {
    setPrevIsDesktop(isDesktop);

    if (isDesktop) {
      closeMenu();
    }
  }

  return (
    <>
      <nav className='xs:inset-x-8 fixed inset-x-4 top-8 mx-auto max-w-7xl'>
        <div className='xs:gap-8 flex gap-4'>
          <button
            type='button'
            className='flex shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-white/20 bg-linear-to-b from-neutral-50/60 to-neutral-50/40 shadow-md/5 inset-shadow-sm backdrop-blur-xs transition-all duration-300 hover:scale-110 sm:cursor-auto sm:hover:scale-100'
            onClick={!isDesktop ? openMenu : undefined}
          >
            <Image
              src='/logo-grey.svg'
              alt='Logotipo da Theka'
              width={50}
              height={50}
              className='scale-105'
              priority
            />
          </button>
          <ul className='font-heading flex flex-1 items-center justify-between gap-4 rounded-full border border-white/20 bg-linear-to-b from-neutral-50/60 to-neutral-50/40 px-8 text-xl font-bold text-neutral-400 shadow-md/5 inset-shadow-sm backdrop-blur-xs'>
            {NAV_LINKS.map((link) => (
              <li key={link.href} className='hidden sm:block'>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
            <li className='hidden sm:block'>
              <button
                aria-label='Perfil do usuário'
                className='flex cursor-pointer items-center'
              >
                <CircleUserRoundIcon size={25} />
              </button>
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
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMenu} />
    </>
  );
}
