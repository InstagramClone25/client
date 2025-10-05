import { type ReactNode, useEffect, useState } from 'react';

import { useTheme } from '@/hooks/useTheme';

interface IRectangleProps {
  children: ReactNode;
  className?: string;
}

function Rectangle({ children, className }: IRectangleProps) {
  const { resolvedTheme } = useTheme();

  const [iconColor, setIconColor] = useState('');

  useEffect(() => {
    if (resolvedTheme === 'black') setIconColor('text-[#f9f9f9]');
    else setIconColor('text-[#262626]');
  }, [resolvedTheme]);

  return (
    <div
      className={`${iconColor} ${resolvedTheme === 'black' ? 'bg-[#121212]' : 'bg-[#fafafa]'} ${className}`}
    >
      {children}
    </div>
  );
}

export default Rectangle;
