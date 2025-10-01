import { useSelector } from 'react-redux';

import { ToastItem } from '@/components/toast/ToastItem';
import useToast from '@/hooks/useToast';
import type { RootState } from '@/store';

function Toast() {
  const toasts = useSelector((state: RootState) => state.toasts);

  const { removeToast } = useToast();

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col items-end space-y-2">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} {...toast} onClose={() => removeToast(toast.id)} />
      ))}
    </div>
  );
}

export default Toast;
