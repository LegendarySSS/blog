import * as React from 'react';

import clsxm from '@/lib/clsxm';
import useLoaded from '@/hooks/useLoaded';

import { HatsuneMiku } from '@/components/HatsuneMiku';
import Layout from '@/components/layout/Layout';
import CustomLink from '@/components/links/CustomLink';
import Seo from '@/components/Seo';

export default function HomePage() {
  const isLoaded = useLoaded();
  return (
    <Layout>
      <Seo />
      <main>
        <section className={clsxm(isLoaded && 'fade-in-start')}>
          <div className='mt-[60px]  text-left tablet:mt-[80px] mb:mt-[40px]'>
            <article className=''>
              <div className='mx-8 flex flex-col items-start mb:mx-0'>
                <p
                  className='mb-8 text-4xl text-[#555] dark:text-[#bbb] mb:text-3xl'
                  data-fade='1'
                >
                  Welcome~
                </p>
                <HatsuneMiku />
                <div data-fade='5' className='mt-[60px] flex'>
                  <CustomLink href='/blog'>学习交流</CustomLink>
                  <CustomLink href='/projects' className='ml-6'>
                    思维碎片
                  </CustomLink>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>
    </Layout>
  );
}
