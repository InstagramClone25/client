import './index.scss';

import { useLayoutEffect, useRef } from 'react';

interface ToastProps {
  id: number;
  message: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  duration: number;
  onClose: (id: number) => void;
}

const CLASS_BY_TYPE: Record<NonNullable<ToastProps['type']>, string> = {
  success: 'alert-success',
  error: 'alert-error',
  warning: 'alert-warning',
  info: 'alert-info',
};

export function ToastItem({ id, message, type = 'info', duration, onClose }: ToastProps) {
  const toastRef = useRef({} as HTMLDivElement);

  const handleClose = () => {
    toastRef.current.classList.add('leaving');

    setTimeout(() => onClose(id), 1300);
  };

  useLayoutEffect(() => {
    toastRef.current.style.setProperty('--duration', `${duration}ms`);
    toastRef.current.onanimationend = ({ animationName }) => {
      if (animationName === 'processing') handleClose();
    };
  }, []);

  return (
    <div
      ref={toastRef}
      className={`alert relative m-0 mb-2 flex h-11 items-center overflow-hidden border-0 py-0 ${CLASS_BY_TYPE[type]}`}
    >
      <span>{message}</span>
      <button className="ml-2" onClick={handleClose}>
        ✖
      </button>

      <div className="absolute bottom-0 left-0 h-1 w-full">
        <div className="bar flex h-full w-full bg-gray-200"></div>
      </div>
    </div>
  );
}
