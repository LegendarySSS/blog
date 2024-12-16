/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as React from 'react';

import { createHatsuneMiku } from './createHatsuneMiku';

export function HatsuneMiku() {
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const head = document.querySelectorAll('head')[0];
    const script = document.createElement('script');
    script.setAttribute('name', 'ammo');
    script.src = '/js/ammo.wasm.js';
    head.appendChild(script);
    if (!ref.current) {
      return;
    }
    const intervalID = setInterval(() => {
      //@ts-ignore
      if (window['Ammo']) {
        if (intervalID) {
          clearInterval(intervalID);
        }
        //@ts-ignore
        window['Ammo']().then(() => createHatsuneMiku(ref.current!));
      }
    }, 100);

    return () => {
      if (intervalID) {
        clearInterval(intervalID);
        //@ts-ignore
        window['Ammo'] = null;
        const scripts = document.querySelectorAll('script');
        scripts.forEach((item) => {
          const name = item.getAttribute('name');
          if (name === 'ammo') {
            item.remove();
          }
        });
      }
    };
  }, []);

  return <div className='HatsuneMiku h-[500px] w-full' ref={ref}></div>;
}
