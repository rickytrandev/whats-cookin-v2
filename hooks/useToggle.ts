import { useState } from "react";

function useToggle(initialState: boolean) {
  const [state, setState] = useState(initialState);

  const toggle = () => {
    setState(!state);
  };

  return [state, toggle] as const;
}

export default useToggle;