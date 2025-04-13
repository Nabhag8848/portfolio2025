import { AppLayout } from "@app/components/AppLayout";
import { Global, useTheme } from "@emotion/react";
import { globalStyles } from "@ui/styles/global";
import { Outlet } from "react-router";

export const DefaultLayout = () => {
  const theme = useTheme();
  const styles = globalStyles(theme);

  return (
    <AppLayout>
      <Global styles={styles} />
      <Outlet />
    </AppLayout>
  );
};
