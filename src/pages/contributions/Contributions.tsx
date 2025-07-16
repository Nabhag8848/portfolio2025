import styled from "@emotion/styled";
import { GitHubPR } from "@/types/github";
import {
  formatDate,
  getRepoNameFromUrl,
  getRepoOwnerFromUrl,
  getStatus,
} from "@/utils/github";
import { useContributions } from "./hooks/useContributions";
import { useInfiniteScroll } from "./hooks/useInfiniteScroll";

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

interface PRItemProps {
  pr: GitHubPR;
}

const PRItem = ({ pr }: PRItemProps) => (
  <StyledPRContainer>
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
            ? formatDate(pr.pull_request.merged_at)
            : pr.closed_at
            ? formatDate(pr.closed_at)
            : formatDate(pr.created_at)}
        </StyledDate>
        <StyledStatus status={getStatus(pr)}>{getStatus(pr)}</StyledStatus>
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
);

export const Contributions = () => {
  const { prs, loading, loadingMore, error, hasMore, loadMore } =
    useContributions();

  useInfiniteScroll({
    hasMore,
    isLoading: loadingMore,
    onLoadMore: loadMore,
    threshold: 1000,
  });

  if (loading) {
    return (
      <StyledContainer>
        <StyledHeader>Opensource contributions</StyledHeader>
        <StyledSubHeading>Pull Requests</StyledSubHeading>
        <StyledLoading>Loading contributions...</StyledLoading>
      </StyledContainer>
    );
  }

  if (error && prs.length === 0) {
    return (
      <StyledContainer>
        <StyledHeader>Opensource contributions</StyledHeader>
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
          <PRItem key={pr.html_url} pr={pr} />
        ))}

        {loadingMore && (
          <StyledLoadingMore>Loading more contributions...</StyledLoadingMore>
        )}

        {!hasMore && prs.length > 0 && (
          <StyledEndMessage>🎉 You've reached the end!</StyledEndMessage>
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
