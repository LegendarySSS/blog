import * as React from 'react';

import useCanvasCursor from '@/hooks/useCanvasCursor';

import Header from '@/components/layout/Header';
import Plum from '@/components/layout/Plum';

export default function Layout({ children }: { children: React.ReactNode }) {
  useCanvasCursor();
  return (
    <>
      <Header />
      <div className='layout'>
        <div className='mx-8 mb:mx-4'>{children}</div>
      </div>
      <Plum />

      <canvas className='pointer-events-none fixed inset-0' id='canvas' />
    </>
  );
}
