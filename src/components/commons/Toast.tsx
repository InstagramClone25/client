import { useEffect } from 'react';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  duration?: number; // auto hide sau X ms
  onClose?: () => void;
}

function Toast({ message, type = 'info', duration = 3000, onClose }: ToastProps) {
  useEffect(() => {
    if (!duration) return;
    const timer = setTimeout(() => {
      onClose?.();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className="toast toast-top toast-end">
      <div className={`alert alert-${type}`}>
        <span>{message}</span>
        {onClose && (
          <button className="ml-2" onClick={onClose}>
            ✖
          </button>
        )}
      </div>
    </div>
  );
}

export default Toast;
