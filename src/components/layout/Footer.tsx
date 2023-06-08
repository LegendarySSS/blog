import CustomLink from '@/components/links/CustomLink';

export default function Footer() {
  return (
    <footer className='my-16 text-right text-[#b3b3b3] '>
      <section className='flex flex-col items-end'>
        <div>
          <a
            href='https://creativecommons.org/licenses/by-nc-sa/4.0/'
            rel='noreferrer'
            target='_blank'
          >
            CC BY-NC-SA 4.0
          </a>{' '}
          {new Date().getFullYear()}
          <a
            href='https://github.com/LegendarySSS'
            target='_blank'
            className='pl-1'
            rel='noreferrer'
          >
            © MingHao Zhu
          </a>
        </div>
        <CustomLink href='https://beian.miit.gov.cn/'>
          京ICP备20002952号
        </CustomLink>
      </section>
    </footer>
  );
}
