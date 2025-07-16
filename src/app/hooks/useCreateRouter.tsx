import { Portfolio } from "@/pages/portfolio/Portfolio";
import { Contributions } from "@/pages/contributions/Contributions";
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
        </Route>
      </Route>
    )
  );
};
