import { XMarkIcon } from '@heroicons/react/20/solid';

export default function Modal({ title, isOpen, onClose, children }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-2xl">
        {title && (
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-2xl font-bold text-gray-900">{title}</h3>

            <button
              onClick={onClose}
              className="rounded-md p-1 text-gray-500 transition hover:bg-gray-100 hover:text-gray-700"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
        )}
        <div className="modal-inner">{children}</div>
      </div>
    </div>
  );
}
