import Image from 'next/legacy/image';
import { BsGithub } from 'react-icons/bs';
import { FaRegLightbulb } from 'react-icons/fa';
import { MdOutlineArticle } from 'react-icons/md';
import { SiWechat } from 'react-icons/si';

import ThemeButton from '@/components/buttons/ThemeButton';
import UnstyledLink from '@/components/links/UnstyledLink';

const Icon = () => {
  return (
    <div className='flex gap-[24px] text-[22px]'>
      <UnstyledLink href='/blog' className='hidden mb:inline'>
        <MdOutlineArticle />
      </UnstyledLink>
      <UnstyledLink href='/projects' className='hidden mb:inline'>
        <FaRegLightbulb />
      </UnstyledLink>
      <a
        href='https://github.com/LegendarySSS'
        rel='noreferrer'
        target='_blank'
      >
        <BsGithub />
      </a>
      <a className="hover:opacity-100">
        <SiWechat />
      </a>
      <Image src="https://i.ibb.co/pfyHcqD/141682592143-pic.jpg" alt="" layout="fill" className="opacity-0 transition duration-300 absolute  z-[-1]" />
      <ThemeButton />
    </div>
  );
};

export default Icon;
