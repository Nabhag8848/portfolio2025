import {
  GitHubPR,
  GitHubResponse,
  FetchPageResult,
  PRStatus,
} from "@/types/github";

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export const getRepoNameFromUrl = (url: string): string => {
  const parts = url.split("/");
  return parts[parts.length - 1];
};

export const getRepoOwnerFromUrl = (url: string): string => {
  const parts = url.split("/");
  return parts[parts.length - 2];
};

export const isExternalContribution = (pr: GitHubPR): boolean => {
  const owner = getRepoOwnerFromUrl(pr.repository_url);
  // Filter out PRs from user's own repositories
  return (
    owner.toLowerCase() !== "nabhag8848" && owner.toLowerCase() !== "nabhag9949"
  );
};

export const getStatus = (pr: GitHubPR): PRStatus => {
  if (pr.pull_request.merged_at) return "merged";
  return pr.state as PRStatus;
};

export const fetchGitHubPage = async (
  page: number,
  perPage: number = 100
): Promise<FetchPageResult> => {
  const response = await fetch(
    `https://api.github.com/search/issues?q=author:nabhag8848+is:pr+-user:nabhag9949+is:public&per_page=${perPage}&page=${page}`
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data: GitHubResponse = await response.json();

  // Filter out PRs from user's own repositories
  const filteredItems = data.items.filter(isExternalContribution);

  return {
    ...data,
    items: filteredItems,
    filtered_count: filteredItems.length,
    original_count: data.items.length,
  };
};

export const shouldStopFetching = (
  currentPage: number,
  perPage: number,
  data: FetchPageResult
): boolean => {
  const isLastPage = data.original_count < perPage;
  const noMoreItems = data.items.length === 0;
  const reachedGitHubLimit = (currentPage + 1) * perPage >= 1000;

  return isLastPage || noMoreItems || reachedGitHubLimit;
};
