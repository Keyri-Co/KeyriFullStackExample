import { useEffect, useState } from "react";

import { ISize } from "./types";
import { DIMENSIONS, DimensionTypes, Routes } from "./constants";
import { useHistory } from "react-router-dom";

export const useIsSmallerDimension = (mediaValue: DimensionTypes) => {
  const { width }: ISize = useWindowSize();
  return !!width && width < DIMENSIONS[mediaValue];
};

export const useWindowSize = (): ISize => {
  const [windowSize, setWindowSize] = useState<ISize>({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
};

export const useRedirect = (shouldRedirect: boolean) => {
  const history = useHistory();
  useEffect(() => {
    shouldRedirect && history.push(Routes.Home);
  }, [shouldRedirect, history]);
};
