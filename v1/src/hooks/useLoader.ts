import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useEffect, useState } from "react";

export function useLoader() {
  const [isLoading, setIsLoading] = useState(false);

  const showLoader = (message: string) => {
    toast.loading(message, {
      position: "bottom-center",
      autoClose: false,
      isLoading: true,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setIsLoading(true);
  };

  const showMessage = (message: string) => {
    toast.success(message, {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const showError = (message: string) => {
    toast.error(message, {
      position: "bottom-center",
      autoClose: 3500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const closeMessages = () => {
    toast.dismiss();
    setIsLoading(false);
  };

  return {
    showLoader,
    showMessage,
    closeMessages,
    showError,
  };
}

export default useLoader;
