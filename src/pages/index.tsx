import * as React from 'react';

import clsxm from '@/lib/clsxm';
import useLoaded from '@/hooks/useLoaded';

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
          <div className='mt-[120px]  text-left tablet:mt-[80px] mb:mt-[40px]'>
            <article className=''>
              <div className='mx-8 flex flex-col items-start mb:mx-0'>
                <p
                  className='mb-8 text-4xl text-[#555] dark:text-[#bbb] mb:text-3xl'
                  data-fade='1'
                >
                  前端艺术的探索与实践
                </p>
                <p
                  className='text-lg text-[#555] dark:text-[#bbb]'
                  data-fade='1'
                >
                  前端技术的发展不仅仅是为了实现功能，更是为了创造艺术。
                </p>
                <p
                  className={clsxm(
                    'mt-6  text-[#555] dark:text-[#bbb]',
                    '2xl:text-xl text-left text-lg'
                  )}
                  data-fade='3'
                >
                  在大前端时代下，技术的更新换代非常快，我们需要不断学习新的技术，才能跟上时代的步伐。同时，我们也需要不断思考技术的发展方向，以及技术对于社会的影响。
                </p>
                <hr
                  className='mx-auto my-[2em] h-0 w-[50px] border-t-[1px] border-[#7d7d7d4d] mb:my-[1em]'
                  data-fade='4'
                />
                <p
                  className={clsxm(
                    'mt-6  text-[#555] dark:text-[#bbb]',
                    '2xl:text-xl text-left text-lg'
                  )}
                  data-fade='3'
                >
                  同时，我们也需要关注前端艺术对于用户体验的影响，以及如何在艺术与实用性之间取得平衡。在技术的发展过程中，我们也需要关注技术的可持续性，以及技术对于环境的影响。
                </p>
                <p
                  className={clsxm(
                    'mt-6  text-[#555] dark:text-[#bbb]',
                    '2xl:text-xl text-left text-lg'
                  )}
                  data-fade='3'
                >
                  因此，作为一名前端开发者，我们需要不断学习、思考、创新，才能在前端艺术的探索与实践中不断前行。
                </p>
                <p
                  className={clsxm(
                    'mt-6  text-[#555] dark:text-[#bbb]',
                    '2xl:text-xl text-left text-lg'
                  )}
                  data-fade='3'
                >
                  不要停止学习，不要停止探索，不要停止创新。只有不断前行，才能不断超越自我。
                </p>
                <hr
                  className='mx-auto my-[2em] h-0 w-[50px] border-t-[1px] border-[#7d7d7d4d] mb:my-[1em]'
                  data-fade='4'
                />
                <p
                  className={clsxm(
                    ' mt-2 text-[#555] dark:text-[#bbb]',
                    '2xl:text-xl text-left text-lg'
                  )}
                  data-fade='4'
                >
                  内容将持续更新... Find me on{' '}
                  <CustomLink href='https://github.com/LegendarySSS'>
                    Github
                  </CustomLink>{' '}
                  and{' '}
                  <CustomLink href='https://gitee.com/zmhmysong'>
                    Gitee
                  </CustomLink>
                  .
                </p>

                <p
                  className={clsxm(
                    ' mt-2 text-[#555] dark:text-[#bbb]',
                    '2xl:text-xl text-left text-lg'
                  )}
                  data-fade='4'
                >
                  Learning is like sailing against the current, if you don't
                  advance, you will retreat!
                </p>

                <div data-fade='5' className='mt-4 flex'>
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
