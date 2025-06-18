import { useCallback, useMemo, useState } from "react";

interface UseHoverBind {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

type UseHoverResult = [boolean, UseHoverBind];

export const useHover = (): UseHoverResult => {
  const [isHovered, setIsHovered] = useState(false);

  const onMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return useMemo(() => [isHovered, { onMouseEnter, onMouseLeave }], [isHovered, onMouseEnter, onMouseLeave]);
};
