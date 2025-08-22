import { createContext, useContext, useEffect, useState } from "react";

// Tạo context
const ModalContext = createContext();

// Custom hook để dùng modal ở bất cứ đâu
// eslint-disable-next-line react-refresh/only-export-components
export const useModalContext = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [isShowing, setIsShowing] = useState(false);
  const [content, setContent] = useState(null);

  // Khóa scroll khi modal mở
  useEffect(() => {
    if (isShowing) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [isShowing]);

  // Hàm mở modal
  const openPopup = (content) => {
    setContent(content);
    setIsShowing(true);
  };

  // Hàm đóng modal
  const closePopup = () => {
    setContent(null);
    setIsShowing(false);
  };

  return (
    <ModalContext.Provider
      value={{ isShowing, content, openPopup, closePopup }}
    >
      {children}

      {/* Modal */}
      {isShowing && (
        <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black">
          <div className="relative rounded-lg bg-white p-6 shadow-lg">
            {content}
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={closePopup}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};
