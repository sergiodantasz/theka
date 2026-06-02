"use client";

import { PanelLeftCloseIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { NAV_LINKS } from "@/constants/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={`fixed inset-0 z-10 bg-black/20 transition-opacity duration-500 ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
        aria-hidden='true'
      />
      <aside
        className={`fixed top-4 z-20 min-w-2/3 rounded-r-3xl bg-white p-8 shadow-lg transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className='mb-8 flex items-center justify-between gap-16'>
          <Image
            src='/full-logo-grey.svg'
            alt='Logotipo completo da Theka'
            width={95}
            height={26}
          />
          <button
            type='button'
            className='cursor-pointer rounded-full bg-neutral-50/50 p-2 transition-all hover:bg-neutral-50'
            onClick={onClose}
            aria-label='Fechar menu'
          >
            <PanelLeftCloseIcon size={20} />
          </button>
        </div>
        <ul className='font-heading flex flex-col gap-2 text-xl font-semibold'>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} onClick={onClose}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
