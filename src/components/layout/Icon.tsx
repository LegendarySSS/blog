import Image from 'next/legacy/image';
import { useEffect, useState } from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaRegLightbulb } from 'react-icons/fa';
import { MdOutlineArticle } from 'react-icons/md';
import { SiWechat } from 'react-icons/si';

import ThemeButton from '@/components/buttons/ThemeButton';
import UnstyledLink from '@/components/links/UnstyledLink';

const Icon = () => {
  const [showImage, setShowImage] = useState(false);
  const handleClickOutside = (event: MouseEvent) => {
    if ((event.target as HTMLElement).closest('.relative') === null) {
      setShowImage(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  return (
    <div className='flex gap-[24px] text-[22px]'>
      <UnstyledLink href='/blog' className='hidden mb:inline'>
        <MdOutlineArticle />
      </UnstyledLink>
      <UnstyledLink href='/fragment' className='hidden mb:inline'>
        <FaRegLightbulb />
      </UnstyledLink>
      <a
        href='https://github.com/LegendarySSS'
        rel='noreferrer'
        target='_blank'
      >
        <BsGithub />
      </a>
      <div className='relative'>
        <a className='cursor-pointer' onClick={() => setShowImage(!showImage)}>
          <SiWechat />
        </a>
        <div className='w-32 h-32 absolute top-12 -left-8'>
          <Image
            src='https://telegraph-image-9jg.pages.dev/file/AgACAgEAAyEGAASNsUhIAAMeZ1AV5jeXrm78M9-EF8wm15wpmrMAAuysMRswY4BGquk7s3VQmNkBAAMCAAN5AAM2BA.png'
            alt=''
            layout='fill'
            className={`transition duration-300 ${
              showImage ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>
      </div>
      <ThemeButton />
    </div>
  );
};

export default Icon;
