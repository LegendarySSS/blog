import * as React from 'react';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Plum from '@/components/layout/Plum';
import Player from '@/components/Player';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className='layout'>
        <div className='mx-8 mb:mx-4'>
          {children}
          <Footer />
        </div>
      </div>
      <Player />
      <Plum />
    </>
  );
}
