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
                  Hi，我是朱明豪，一个普通的技术爱好者~
                </p>
                <p
                  className='text-lg text-[#555] dark:text-[#bbb]'
                  data-fade='1'
                >
                  随着AI技术的不断发展，知识获取的途径仿佛变得越来越快捷，越来越方便。在这个时代，博客的用途也变得更加多样化和重要。
                </p>
                <p
                  className={clsxm(
                    'mt-6  text-[#555] dark:text-[#bbb]',
                    '2xl:text-xl text-left text-lg'
                  )}
                  data-fade='3'
                >
                  为什么还要做博客？相信有写日记的朋友们能够明白。
                  <br />
                  <br />
                  有些技术点，用的时候上网搜一下，临时应急，过段时间还是给忘掉了，再用到的时候还要再上网搜，关键是要在海量的信息中筛选出最准确的一条答案，那这个时候博客的重要性就体现出来了，它可以系统性的记录我所遇到的问题以及当时的解决方案。
                  <br />
                  <br />
                  日常的一些想法、除本行业外的知识，能够用文字的方式记录下来，是一件很美好的事。
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
                  那与其说是博客，我更希望这个站点除了技术文章外海能够记录更多方面的东西。譬如生活感悟、社会热点、情感话题等一系列的分享。
                </p>
                <p
                  className={clsxm(
                    'mt-6  text-[#555] dark:text-[#bbb]',
                    '2xl:text-xl text-left text-lg'
                  )}
                  data-fade='3'
                >
                  希望在这里能够给你、你们带来一些启发和帮助，或者一些情感上的共鸣，欢迎留言交流！
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
