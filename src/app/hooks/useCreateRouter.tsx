import { Portfolio } from "@/pages/portfolio/Portfolio";
import { Contributions } from "@/pages/contributions/Contributions";
import { Sabbatical } from "@/pages/blog/Sabbatical";
import { Resume } from "@/pages/resume/Resume";
import { GithubRedirect } from "@/pages/redirects/GithubRedirect";
import { LinkedInRedirect } from "@/pages/redirects/LinkedInRedirect";
import { TwitterRedirect } from "@/pages/redirects/TwitterRedirect";
import { AppRouterProviders } from "@app/components/AppRouterProviders";
import { DefaultLayout } from "@ui/layout/components/DefaultLayout";
import { AppPath } from "@utils/title";
import { Route } from "react-router";
import { createBrowserRouter, createRoutesFromElements } from "react-router";

export const useCreateRouter = () => {
  return createBrowserRouter(
    createRoutesFromElements(
      <Route element={<AppRouterProviders />}>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Portfolio />} />
          <Route path={AppPath.HOME} element={<></>} />
          <Route path={AppPath.ABOUT} element={<></>} />
          <Route path={AppPath.CONTRIBUTIONS} element={<Contributions />} />
          <Route path={AppPath.SABBATICAL} element={<Sabbatical />} />
          <Route path={AppPath.RESUME} element={<Resume />} />
        </Route>
        <Route path="/github" element={<GithubRedirect />} />
        <Route path="/linkedin" element={<LinkedInRedirect />} />
        <Route path="/twitter" element={<TwitterRedirect />} />
      </Route>
    )
  );
};
