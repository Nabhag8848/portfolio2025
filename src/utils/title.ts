enum PageTitle {
  HOME = "Home",
  ABOUT = "About me",
  CONTRIBUTIONS = "Contributions",
}

export enum AppPath {
  HOME = "/home",
  ABOUT = "/about",
  CONTRIBUTIONS = "/contributions",
}

export const getPageTitleFromPath = (pathname: string): string => {
  switch (pathname as AppPath) {
    case AppPath.HOME:
      return PageTitle.HOME;
    case AppPath.ABOUT:
      return PageTitle.ABOUT;
    case AppPath.CONTRIBUTIONS:
      return PageTitle.CONTRIBUTIONS;
    default:
      return "Nabhag Motivaras";
  }
};
