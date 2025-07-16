export interface GitHubPR {
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

export interface GitHubResponse {
  items: GitHubPR[];
  total_count: number;
}

export interface FetchPageResult extends GitHubResponse {
  filtered_count: number;
  original_count: number;
}

export type PRStatus = "merged" | "closed" | "open";
