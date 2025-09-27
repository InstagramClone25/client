import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import { setAddToastHandler } from '@/lib/toast';

import { Toast } from './Toast';

interface ToastItem {
  id: number;
  message: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
}

export function ToastManager() {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  useEffect(() => {
    setAddToastHandler(({ message, type = 'info', duration = 3000 }) => {
      const id = Date.now();
      setToasts((prev) => [...prev, { id, message, type, duration }]);

      if (duration) {
        setTimeout(() => {
          setToasts((prev) => prev.filter((t) => t.id !== id));
        }, duration);
      }
    });
  }, []);

  const handleClose = (id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return ReactDOM.createPortal(
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} onClose={handleClose} />
      ))}
    </div>,
    document.body
  );
}
