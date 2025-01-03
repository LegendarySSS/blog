import clsx from 'clsx';
import Image from 'next/image';
import { PhotoProvider, PhotoView } from 'react-photo-view';

import 'react-photo-view/dist/react-photo-view.css';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import items from '@/contents/story';
export default function ProjectsPage() {
  return (
    <Layout>
      <Seo templateTitle='碎碎念' />
      <main className='column-layout w-full'>
        {items.map((item) => {
          return (
            <div
              key={item.id}
              className='shadow-md bg-white rounded-lg break-inside-avoid mb-5 story-container'
            >
              <PhotoProvider
                speed={() => 800}
                loadingElement={
                  <div className='flex justify-center items-center'>
                    <div className='w-16 h-16 border-4 border-gray-300 border-t-black rounded-full animate-spin'></div>
                  </div>
                }
                easing={(type) =>
                  type === 2
                    ? 'cubic-bezier(0.36, 0, 0.66, -0.56)'
                    : 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                }
                maskOpacity={0.8}
              >
                <PhotoView src={item.imageUrl}>
                  <Image
                    loading='lazy'
                    width={200}
                    height={200}
                    src={item.imageUrl}
                    alt={item.title}
                    className={clsx('m-auto mt-0 mb-4')}
                  />
                </PhotoView>
              </PhotoProvider>
              <div className='p-4 pt-0'>
                <h2 className='story-title font-medium text-2xl mb-1'>
                  {item.title}
                </h2>
                <div className='text-gray-500 italic'>{item.content}</div>
              </div>
            </div>
          );
        })}
      </main>
    </Layout>
  );
}
