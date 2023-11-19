export interface GitHubUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  score: number;
}

export interface GlobalContextProps {
  users: GitHubUser[] | null;
  setUsers: React.Dispatch<React.SetStateAction<GitHubUser[] | null>>;
  uniqueUser: GitHubUser | null;
  setUniqueUser: React.Dispatch<React.SetStateAction<GitHubUser | null>>;
  userProjects: any[] | null; // You might want to define a type for user projects as well
  setUserProjects: React.Dispatch<React.SetStateAction<any[] | null>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
  searchStep: number;
  setSearchStep: React.Dispatch<React.SetStateAction<number>>;
}

export interface Owner {
  login: string;
  avatar_url: string;
}

export interface License {
  key: string;
  name: string;
}

export interface Project {
  id: number;
  name: string;
  owner: Owner;
  full_name: string;
  html_url: string;
  description: string;
  language: string;
  forks_count: number;
  watchers_count: number;
  stargazers_count: number;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_discussions: boolean;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: License;
  allow_forking: boolean;
  is_template: boolean;
  web_commit_signoff_required: boolean;
  topics: string[];
  visibility: string;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
}

export interface ProjectListProps {
  projects: Project[];
}

export interface GitHubUserResponse {
  total_count: number;
  items: {
    id: number;
    login: string;
    avatar_url: string;
  }[];
}

export interface UserCardProps {
  uniqueUser: {
    login: string;
    avatar_url: string;
    html_url: string;
    name: string;
    bio: string;
    public_repos: number;
    followers: number;
    following: number;
    created_at: string; // Adjust the type based on the actual type of created_at
    updated_at: string; // Adjust the type based on the actual type of updated_at
  };
}