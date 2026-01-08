enum PageTitle {
  HOME = "Home",
  ABOUT = "About me",
  CONTRIBUTIONS = "Contributions",
  SABBATICAL = "Sabbatical",
  RESUME = "Resume",
}

export enum AppPath {
  HOME = "/home",
  ABOUT = "/about",
  CONTRIBUTIONS = "/contributions",
  SABBATICAL = "/blog/sabbatical",
  RESUME = "/resume",
}

export const getPageTitleFromPath = (pathname: string): string => {
  switch (pathname as AppPath) {
    case AppPath.HOME:
      return PageTitle.HOME;
    case AppPath.ABOUT:
      return PageTitle.ABOUT;
    case AppPath.CONTRIBUTIONS:
      return PageTitle.CONTRIBUTIONS;
    case AppPath.SABBATICAL:
      return PageTitle.SABBATICAL;
    case AppPath.RESUME:
      return PageTitle.RESUME;
    default:
      return "Nabhag Motivaras";
  }
};
