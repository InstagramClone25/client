interface ToastPayload {
  message: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
}

let addToastHandler: ((toast: ToastPayload) => void) | null = null;

export function setAddToastHandler(handler: (toast: ToastPayload) => void) {
  addToastHandler = handler;
}

export function showToast(
  message: string,
  type?: 'success' | 'error' | 'warning' | 'info',
  duration?: number
) {
  if (addToastHandler) {
    addToastHandler({ message, type, duration });
  } else {
    console.warn('ToastManager chưa được mount!');
  }
}
