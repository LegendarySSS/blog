import clsx from 'clsx';
import Image from 'next/image';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import items from '@/contents/story';
export default function ProjectsPage() {
  return (
    <Layout>
      <Seo templateTitle='碎碎念' />
      <main className='column-layout w-full'>
        {items.map((item) => (
          <div
            key={item.id}
            className='shadow-md bg-white rounded-lg break-inside-avoid mb-5 story-container'
          >
            <Image
              width={200}
              height={200}
              src={item.imageUrl}
              alt={item.title}
              className={clsx('m-auto mt-0 mb-4')}
            />
            <div className='p-4 pt-0'>
              <h2 className='story-title font-medium text-2xl mb-1'>
                {item.title}
              </h2>
              <div className='text-gray-500 italic'>{item.content}</div>
            </div>
          </div>
        ))}
      </main>
    </Layout>
  );
}
