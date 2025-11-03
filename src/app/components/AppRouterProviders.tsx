import { Outlet } from "react-router";
import { StrictMode } from "react";
import { PageTitle } from "@ui/utils/PageTitle";
import { ThemeProvider } from "@emotion/react";
import { THEME_DARK } from "@ui/theme/dark";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { OpenGraphImage } from "@ui/utils/OpenGraphImage";
import { HelmetProvider } from "react-helmet-async";

export const AppRouterProviders = () => {
  const theme = THEME_DARK;

  document.documentElement.className = theme.__name__;

  return (
    <ThemeProvider theme={theme}>
      <StrictMode>
        <HelmetProvider>
          <PageTitle />
          <OpenGraphImage />
          <Outlet />
          <SpeedInsights />
        </HelmetProvider>
      </StrictMode>
    </ThemeProvider>
  );
};
