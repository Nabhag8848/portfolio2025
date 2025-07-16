import styled from "@emotion/styled";
import { useEffect, useState, useCallback } from "react";

const StyledContainer = styled.div`
  padding: ${(props) =>
    `${props.theme.spacing["2xl"]} ${props.theme.spacing.base}`};
  color: ${(props) => props.theme.font.color.tertiary};
  max-width: 60rem;
  margin: 0 auto;
  opacity: 0;
  animation: fadeIn 0.5s ease-in-out forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    width: 95%;
    padding: ${(props) =>
      `${props.theme.spacing.xl} ${props.theme.spacing.base}`};
  }
`;

const StyledHeader = styled.h1`
  color: ${(props) => props.theme.font.color.secondary};
  font-weight: ${(props) => props.theme.font.weight.medium};
  font-size: ${(props) => props.theme.font.size.lg};
  margin-bottom: ${(props) => `${props.theme.spacing.lg}`};
  letter-spacing: -0.05em;
`;

const StyledSubHeading = styled.h2`
  font-weight: ${(props) => props.theme.font.weight.medium};
  font-size: ${(props) => props.theme.font.size.base};
  margin-bottom: ${(props) => `${props.theme.spacing.xl}`};
`;

const StyledMain = styled.main``;

const StyledPRContainer = styled.div`
  margin-bottom: ${(props) => `${props.theme.spacing.base}`};
  padding: ${(props) => `${props.theme.spacing.base}`};
  background: ${(props) => `${props.theme.background.tertiary}30`};
  backdrop-filter: blur(8px);
  border-radius: 12px;
  border: 1px solid ${(props) => `${props.theme.font.color.tertiary}10`};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-2px);
    background: ${(props) => `${props.theme.background.green}15`};
    border-color: ${(props) => `${props.theme.background.green}30`};
    box-shadow: 0 4px 12px ${(props) => `${props.theme.background.green}10`};
  }
`;

const StyledPRHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${(props) => `${props.theme.spacing.sm}`};
  gap: ${(props) => `${props.theme.spacing.sm}`};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const StyledPRTitle = styled.a`
  color: ${(props) => props.theme.font.color.primary};
  font-size: ${(props) => props.theme.font.size.base};
  font-weight: ${(props) => props.theme.font.weight.medium};
  text-decoration: none;
  line-height: ${(props) => props.theme.text.lineHeight.medium};
  flex: 1;

  &:hover {
    color: ${(props) => props.theme.background.green};
  }

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.font.size.sm};
  }
`;

const StyledRepoName = styled.div`
  color: ${(props) => props.theme.font.color.light};
  font-size: ${(props) => props.theme.font.size.xs};
  margin-bottom: ${(props) => `${props.theme.spacing.xs}`};
`;

const StyledPRMeta = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => `${props.theme.spacing.sm}`};
  flex-wrap: wrap;
`;

const StyledStatus = styled.span<{ status: string }>`
  font-size: ${(props) => props.theme.font.size.xs};
  padding: ${(props) => `${props.theme.spacing.xs} ${props.theme.spacing.sm}`};
  border-radius: 4px;
  font-weight: ${(props) => props.theme.font.weight.medium};
  white-space: nowrap;

  ${(props) => {
    if (props.status === "closed" && props.theme.__name__ === "dark") {
      return `
        background: oklch(15% 0.05 350);
        color: oklch(85% 0.15 350);
      `;
    }
    if (props.status === "open") {
      return `
        background: ${props.theme.background.green}20;
        color: ${props.theme.background.green};
      `;
    }
    return `
      background: ${props.theme.background.green}30;
      color: ${props.theme.background.green};
    `;
  }}
`;

const StyledDate = styled.span`
  font-size: ${(props) => props.theme.font.size.xs};
  color: ${(props) => props.theme.font.color.light};
  width: 90px;
  text-align: right;
  display: inline-block;
`;

const StyledLabel = styled.span`
  font-size: ${(props) => props.theme.font.size.xxs};
  padding: ${(props) => `${props.theme.spacing.xxs} ${props.theme.spacing.xs}`};
  border-radius: 3px;
  background: ${(props) => `${props.theme.font.color.tertiary}20`};
  color: ${(props) => props.theme.font.color.light};
  white-space: nowrap;
`;

const StyledLabelsContainer = styled.div`
  display: flex;
  gap: ${(props) => `${props.theme.spacing.xs}`};
  flex-wrap: wrap;
  margin-top: ${(props) => `${props.theme.spacing.xs}`};
`;

const StyledLoading = styled.div`
  color: ${(props) => props.theme.font.color.tertiary};
  text-align: center;
  padding: ${(props) => `${props.theme.spacing.xl}`};
`;

const StyledLoadingMore = styled.div`
  color: ${(props) => props.theme.font.color.light};
  text-align: center;
  padding: ${(props) => `${props.theme.spacing.lg}`};
  font-size: ${(props) => props.theme.font.size.sm};
`;

const StyledError = styled.div`
  color: oklch(70% 0.15 350);
  text-align: center;
  padding: ${(props) => `${props.theme.spacing.xl}`};
`;

const StyledEndMessage = styled.div`
  color: ${(props) => props.theme.font.color.light};
  text-align: center;
  padding: ${(props) => `${props.theme.spacing.lg}`};
  font-size: ${(props) => props.theme.font.size.sm};
  border-top: 1px solid ${(props) => `${props.theme.font.color.tertiary}20`};
  margin-top: ${(props) => `${props.theme.spacing.lg}`};
`;

interface GitHubPR {
  html_url: string;
  title: string;
  state: string;
  created_at: string;
  closed_at: string | null;
  updated_at: string;
  repository_url: string;
  labels: Array<{
    name: string;
    color: string;
  }>;
  pull_request: {
    merged_at: string | null;
  };
}

interface GitHubResponse {
  items: GitHubPR[];
  total_count: number;
}

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const getRepoNameFromUrl = (url: string): string => {
  const parts = url.split("/");
  return parts[parts.length - 1];
};

const getRepoOwnerFromUrl = (url: string): string => {
  const parts = url.split("/");
  return parts[parts.length - 2];
};

const isExternalContribution = (pr: GitHubPR): boolean => {
  const owner = getRepoOwnerFromUrl(pr.repository_url);
  // Filter out PRs from user's own repositories
  return (
    owner.toLowerCase() !== "nabhag8848" && owner.toLowerCase() !== "nabhag9949"
  );
};

const getStatus = (pr: GitHubPR): string => {
  if (pr.pull_request.merged_at) return "merged";
  return pr.state;
};

export const Contributions = () => {
  const [prs, setPrs] = useState<GitHubPR[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const PER_PAGE = 100; // GitHub's default page size

  const fetchPage = useCallback(async (page: number) => {
    try {
      const response = await fetch(
        `https://api.github.com/search/issues?q=author:nabhag8848+is:pr+-user:nabhag9949+is:public&per_page=${PER_PAGE}&page=${page}`
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
    } catch (err) {
      throw err;
    }
  }, []);

  const loadMore = useCallback(async () => {
    if (loadingMore || !hasMore) return;

    setLoadingMore(true);
    try {
      const data = await fetchPage(currentPage + 1);

      setPrs((prev) => [...prev, ...data.items]);
      setCurrentPage((prev) => prev + 1);

      // More robust end detection
      const isLastPage = data.original_count < PER_PAGE; // GitHub returned less than full page
      const noMoreItems = data.items.length === 0; // No filtered items found
      const reachedGitHubLimit = (currentPage + 1) * PER_PAGE >= 1000; // GitHub search API limit

      if (isLastPage || noMoreItems || reachedGitHubLimit) {
        setHasMore(false);
      }
    } catch (err) {
      console.error("Error loading more:", err);
      setError(
        err instanceof Error ? err.message : "Failed to load more contributions"
      );
      setHasMore(false); // Stop trying to load more on error
    } finally {
      setLoadingMore(false);
    }
  }, [currentPage, loadingMore, hasMore, fetchPage]);

  // Initial load
  useEffect(() => {
    const initialLoad = async () => {
      try {
        const data = await fetchPage(1);
        setPrs(data.items);
        setTotalCount(data.total_count);

        // Check if we should stop after first page
        const isOnlyPage = data.original_count < PER_PAGE;
        const noItems = data.items.length === 0;

        if (isOnlyPage || noItems) {
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
  }, [fetchPage]);

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (
        !hasMore ||
        loadingMore ||
        window.innerHeight + document.documentElement.scrollTop <
          document.documentElement.offsetHeight - 1000
      ) {
        return; // Don't load if no more data, already loading, or not near bottom
      }

      loadMore();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loadMore, hasMore, loadingMore]);

  if (loading) {
    return (
      <StyledContainer>
        <StyledHeader>Pull Requests</StyledHeader>
        <StyledLoading>Loading contributions...</StyledLoading>
      </StyledContainer>
    );
  }

  if (error && prs.length === 0) {
    return (
      <StyledContainer>
        <StyledHeader>Pull Requests</StyledHeader>
        <StyledError>Error: {error}</StyledError>
      </StyledContainer>
    );
  }

  return (
    <StyledContainer>
      <StyledHeader>Opensource contributions</StyledHeader>
      <StyledSubHeading>Pull Requests</StyledSubHeading>
      <StyledMain>
        {prs.map((pr) => (
          <StyledPRContainer key={pr.html_url}>
            <StyledRepoName>
              {getRepoOwnerFromUrl(pr.repository_url)}/
              {getRepoNameFromUrl(pr.repository_url)}
            </StyledRepoName>
            <StyledPRHeader>
              <StyledPRTitle
                href={pr.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {pr.title}
              </StyledPRTitle>
              <StyledPRMeta>
                <StyledDate>
                  {pr.pull_request.merged_at
                    ? `${formatDate(pr.pull_request.merged_at)}`
                    : pr.closed_at
                    ? `${formatDate(pr.closed_at)}`
                    : `${formatDate(pr.created_at)}`}
                </StyledDate>
                <StyledStatus status={getStatus(pr)}>
                  {getStatus(pr)}
                </StyledStatus>
              </StyledPRMeta>
            </StyledPRHeader>
            {pr.labels.length > 0 && (
              <StyledLabelsContainer>
                {pr.labels.map((label) => (
                  <StyledLabel key={label.name}>{label.name}</StyledLabel>
                ))}
              </StyledLabelsContainer>
            )}
          </StyledPRContainer>
        ))}

        {loadingMore && (
          <StyledLoadingMore>Loading more contributions...</StyledLoadingMore>
        )}

        {!hasMore && prs.length > 0 && (
          <StyledEndMessage>🎉 You've reached the end!.</StyledEndMessage>
        )}

        {!hasMore && prs.length === 0 && (
          <StyledEndMessage>
            No external contributions found. All PRs might be from your own
            repositories.
          </StyledEndMessage>
        )}

        {error && prs.length > 0 && (
          <StyledError>Error loading more: {error}</StyledError>
        )}
      </StyledMain>
    </StyledContainer>
  );
};
