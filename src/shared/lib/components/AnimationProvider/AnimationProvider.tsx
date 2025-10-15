import { createContext, ReactNode, useContext, useEffect, useMemo, useRef, useState } from "react";

type SpringType = typeof import("@react-spring/web");
type GestureType = typeof import("@use-gesture/react");

interface AnimationContextType {
  Gesture?: GestureType;
  Spring?: SpringType;
  isLoaded?: boolean;
}

const AnimationContext = createContext<AnimationContextType>({});

const getAsyncAnimationModules = () => {
  return Promise.all([import("@react-spring/web"), import("@use-gesture/react")]);
};

export const useAnimation = () => {
  return useContext(AnimationContext) as Required<AnimationContextType>;
};

export const AnimationProvider = ({ children }: { children: ReactNode }) => {
  const GestureRef = useRef<GestureType>();
  const SpringRef = useRef<SpringType>();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    getAsyncAnimationModules().then(([Spring, Gesture]) => {
      GestureRef.current = Gesture;
      SpringRef.current = Spring;
      setIsLoaded(true);
    });
  }, []);

  const value = useMemo(
    () => ({
      Gesture: GestureRef.current,
      Spring: SpringRef.current,
      isLoaded,
    }),
    [isLoaded],
  );

  return <AnimationContext.Provider value={value}>{children}</AnimationContext.Provider>;
};
