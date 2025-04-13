import { ReactNode } from "react";
import styled from "@emotion/styled";

interface AppLayoutProps {
  children: ReactNode;
}

const StyledContainer = styled.div`
  border: 1px solid indianred;
  width: 40vw;
  height: 100vh;
  margin-left: 30vw;
`;

export const AppLayout = ({ children }: AppLayoutProps) => {
  return <StyledContainer>{children}</StyledContainer>;
};
