export function Modal({ children, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="relative w-full max-w-md rounded-lg bg-white p-4">
        {children}
        <button
          onClick={onClose}
          className="absolute right-2 top-2 text-xl text-gray-600"
        >
          ×
        </button>
      </div>
    </div>
  );
}
