import {
  CircleQuestionMarkIcon,
  GlobeIcon,
  InfoIcon,
  MapPinIcon,
  SmartphoneIcon,
} from "lucide-react";
import Image from "next/image";
import { SiInstagram, SiTiktok, SiX } from "@icons-pack/react-simple-icons";

export function Footer() {
  return (
    <footer className='bg-pink-500 text-white'>
      <div className='xs:px-8 mx-auto flex max-w-7xl flex-col justify-between gap-8 px-4 py-8 sm:flex-row sm:gap-32'>
        <div className='self-center sm:self-auto'>
          <Image
            src='/full-logo-pink.svg'
            width={208}
            height={58}
            alt='Logotipo completo da Theka'
            className='w-40 sm:w-52'
          />
        </div>
        <div className='flex flex-1 flex-col flex-wrap justify-between gap-8 sm:flex-row'>
          <div>
            <h4 className='mb-2.5 text-2xl'>Contato</h4>
            <ul className='flex flex-col gap-1'>
              <li className='flex items-center gap-2'>
                <SmartphoneIcon size={20} className='shrink-0' />
                <span>(84) 9 9999-2222</span>
              </li>
              <li className='flex items-center gap-2'>
                <GlobeIcon size={20} className='shrink-0' />
                <span>www.theka.com.br</span>
              </li>
              <li className='flex items-center gap-2'>
                <MapPinIcon size={20} className='shrink-0' />
                <span>Natal, RN</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className='mb-2.5 text-2xl'>Redes sociais</h4>
            <ul className='flex flex-col gap-1'>
              <li className='flex items-center gap-2'>
                <SiInstagram size={20} className='shrink-0' />
                <span>@theka.biblioteca</span>
              </li>
              <li className='flex items-center gap-2'>
                <SiTiktok size={20} className='shrink-0' />
                <span>@theka.biblioteca</span>
              </li>
              <li className='flex items-center gap-2'>
                <SiX size={20} className='shrink-0' />
                <span>@theka.biblioteca</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className='mb-2.5 text-2xl'>Ajuda</h4>
            <ul className='flex flex-col gap-1'>
              <li className='flex items-center gap-2'>
                <InfoIcon size={20} className='shrink-0' />
                <span>Central de ajuda</span>
              </li>
              <li className='flex items-center gap-2'>
                <CircleQuestionMarkIcon size={20} className='shrink-0' />
                <span>FAQ</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
