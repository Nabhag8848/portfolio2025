import { useState, useEffect, useCallback } from "react";
import { GitHubPR } from "@/types/github";
import { fetchGitHubPage, shouldStopFetching } from "@/utils/github";

interface UseContributionsReturn {
  prs: GitHubPR[];
  loading: boolean;
  loadingMore: boolean;
  error: string | null;
  totalCount: number;
  hasMore: boolean;
  loadMore: () => void;
}

export const useContributions = (): UseContributionsReturn => {
  const [prs, setPrs] = useState<GitHubPR[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const PER_PAGE = 100;

  const loadMore = useCallback(async () => {
    if (loadingMore || !hasMore) return;

    setLoadingMore(true);
    try {
      const data = await fetchGitHubPage(currentPage + 1, PER_PAGE);

      setPrs((prev) => [...prev, ...data.items]);
      setCurrentPage((prev) => prev + 1);

      if (shouldStopFetching(currentPage + 1, PER_PAGE, data)) {
        setHasMore(false);
      }
    } catch (err) {
      console.error("Error loading more:", err);
      setError(
        err instanceof Error ? err.message : "Failed to load more contributions"
      );
      setHasMore(false);
    } finally {
      setLoadingMore(false);
    }
  }, [currentPage, loadingMore, hasMore, PER_PAGE]);

  // Initial load
  useEffect(() => {
    const initialLoad = async () => {
      try {
        const data = await fetchGitHubPage(1, PER_PAGE);
        setPrs(data.items);
        setTotalCount(data.total_count);

        if (shouldStopFetching(1, PER_PAGE, data)) {
          setHasMore(false);
        }
      } catch (err) {
        console.error("Error in initial load:", err);
        setError(
          err instanceof Error ? err.message : "Failed to fetch contributions"
        );
      } finally {
        setLoading(false);
      }
    };

    initialLoad();
  }, [PER_PAGE]);

  return {
    prs,
    loading,
    loadingMore,
    error,
    totalCount,
    hasMore,
    loadMore,
  };
};
