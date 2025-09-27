interface ToastProps {
  id: number;
  message: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  onClose: (id: number) => void;
}

const typeClass: Record<NonNullable<ToastProps['type']>, string> = {
  success: 'alert-success',
  error: 'alert-error',
  warning: 'alert-warning',
  info: 'alert-info',
};

export function Toast({ id, message, type = 'info', onClose }: ToastProps) {
  return (
    <div className={`alert ${typeClass[type]} flex items-center`}>
      <span>{message}</span>
      <button className="ml-2" onClick={() => onClose(id)}>
        ✖
      </button>
    </div>
  );
}
