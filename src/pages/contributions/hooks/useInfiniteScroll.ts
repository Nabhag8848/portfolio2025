import { useEffect } from "react";

interface UseInfiniteScrollOptions {
  hasMore: boolean;
  isLoading: boolean;
  onLoadMore: () => void;
  threshold?: number;
}

export const useInfiniteScroll = ({
  hasMore,
  isLoading,
  onLoadMore,
  threshold = 1000,
}: UseInfiniteScrollOptions): void => {
  useEffect(() => {
    const handleScroll = () => {
      if (
        !hasMore ||
        isLoading ||
        window.innerHeight + document.documentElement.scrollTop <
          document.documentElement.offsetHeight - threshold
      ) {
        return;
      }

      onLoadMore();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore, isLoading, onLoadMore, threshold]);
};
