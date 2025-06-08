import { useState, useCallback, useEffect } from "react";
import { useStartupStore } from "../store/startupStore";

export const useStartupHook = (initialState: null | undefined = null) => {

const [startupFilters, setStartupFilters] = useState(initialState);

  return {
    startupFilters,
    setStartupFilters
  };
}
