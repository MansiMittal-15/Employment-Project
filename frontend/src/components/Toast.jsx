import React, { useEffect } from "react";

const Toast = ({ toastData, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);
  return (
    <div className="max-w-96 p-4 text-xl rounded-xl text-center absolute bottom-6 right-6 bg-black z-30 text-white m-4">
      {toastData.success ? `✅ ` : `⛔ `} {toastData.message}
    </div>
  );
};

export default Toast;
