import styled from "@emotion/styled";
import { ReactNode } from "react";
import { Link } from "react-router";

const StyledLink = styled(Link)`
  font-size: ${(props) => props.theme.font.size.base};
  color: ${(props) => props.theme.font.color.secondary};
  text-decoration: none;
  font-weight: ${(props) => props.theme.font.weight.regular};
  position: relative;
  display: inline-block;
  padding: ${(props) => `${props.theme.spacing.xs} ${props.theme.spacing.sm} ${props.theme.spacing.xs} 0`};

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    top: 100%;
    left: 2%;
    width: 95%;
    height: 30%;
    background-color: ${(props) => props.theme.background.green};
    transition: height 0.2s ease-in-out;
    z-index: -1;
    opacity: 0.4;
  }

  &:hover {
    background-color: transparent;
    &::after {
      height: 50%;
    }
  }

  @media (max-width: 440px) {
    font-size: ${(props) => props.theme.font.size.sm};
  }
`;

const StyledDiv = styled.div`
  margin-bottom: ${(props) => props.theme.spacing.base};
`;

type ProfileLinkProps = {
  to: string;
  children: ReactNode;
};

export const HeaderLink = ({ to, children }: ProfileLinkProps) => {
  return (
    <StyledDiv>
      <StyledLink to={to} target="_blank">
        {children}
      </StyledLink>
    </StyledDiv>
  );
};
