import { type ReactNode } from 'react';

interface IRectangleProps {
  children: ReactNode;
  className?: string;
}

function Rectangle({ children, className }: IRectangleProps) {
  return <div className={`${className} bg-base-300`}>{children}</div>;
}

export default Rectangle;
