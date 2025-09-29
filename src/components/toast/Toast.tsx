import { ToastItem } from '@/components/toast/ToastItem';
import useToast from '@/hooks/useToast';

function Toast() {
  const { toasts, removeToast } = useToast();

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col items-end space-y-2">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} {...toast} onClose={() => removeToast(toast.id)} />
      ))}
    </div>
  );
}

export default Toast;
