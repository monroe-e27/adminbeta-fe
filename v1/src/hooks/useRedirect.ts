import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router";

export const useRedirect = (initialState: boolean = false) => {
  const navigate = useNavigate();
  const [redirect, setRedirect] = useState(initialState);
  const handleRedirect = useCallback((path: any) => setRedirect(path), []);
  
  useEffect(() => {
    navigate(redirect);
  }, [redirect]);

  return { handleRedirect };
}

