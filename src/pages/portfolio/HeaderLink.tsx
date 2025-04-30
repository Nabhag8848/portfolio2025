import styled from "@emotion/styled";
import { ReactNode } from "react";
import { Link } from "react-router";

const StyledLink = styled(Link)`
  font-size: ${(props) => props.theme.font.size.base};
  color: ${(props) => props.theme.font.color.secondary};
  text-decoration: none;
  font-weight: ${(props) => props.theme.font.weight.regular};

  &:hover {
    background-color: ${(props) => props.theme.background.green};
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
