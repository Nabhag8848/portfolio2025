import { ReactNode } from "react";
import styled from "@emotion/styled";

interface AppLayoutProps {
  children: ReactNode;
}

const StyledContainer = styled.div`
  width: 40dvw;
  height: 100dvh;
  margin-left: 30vw;

  @media (max-width: 1023px) {
    margin-left: 0;
    width: 100dvw;
  }
`;

export const AppLayout = ({ children }: AppLayoutProps) => {
  return <StyledContainer>{children}</StyledContainer>;
};
