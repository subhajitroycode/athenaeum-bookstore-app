import { useEffect, useState } from "react";

interface UseResponsiveItemsPerPageConfig {
  mobile?: number;
  tablet?: number;
  desktop?: number;
  xl?: number;
}

const defaultConfig: Required<UseResponsiveItemsPerPageConfig> = {
  mobile: 6,
  tablet: 8,
  desktop: 12,
  xl: 16,
};

export const useResponsiveItemsPerPage = (
  config?: UseResponsiveItemsPerPageConfig,
) => {
  const mergedConfig = { ...defaultConfig, ...config };

  const getItemsPerPage = () => {
    if (typeof window === "undefined") return mergedConfig.desktop;

    const width = window.innerWidth;

    if (width < 640) return mergedConfig.mobile;
    else if (width < 1024) return mergedConfig.tablet;
    else if (width < 1536) return mergedConfig.desktop;
    else return mergedConfig.xl;
  };

  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage());
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return itemsPerPage;
};
