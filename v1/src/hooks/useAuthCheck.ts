import { validateAccess } from "../utils/authenticate";
import { useUserStore } from "../store/userStore";
import { useEffect } from "react";

function useAuthCheck(isProtected: boolean) {
  const jwtData = useUserStore((state) => state.jwtData);

  useEffect(() => {
    if (isProtected) validateAccess(jwtData);
  }, [isProtected, jwtData]);
}

export default useAuthCheck;
