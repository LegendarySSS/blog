import { Theme } from '@giscus/react';
import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';

export default function Comment() {
  const { theme } = useTheme();

  return (
    <Giscus
      key={theme}
      repo='LegendarySSS/blog-demo'
      repoId='R_kgDOJcAK5g'
      category='General'
      categoryId='DIC_kwDOJcAK5s4CXDzE'
      mapping='pathname'
      reactionsEnabled='0'
      emitMetadata='0'
      loading='lazy'
      theme={theme as Theme}
    />
  );
}
