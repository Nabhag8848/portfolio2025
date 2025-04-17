import styled from "@emotion/styled";
import { ReactNode } from "react";
import { Link } from "react-router";

const StyledLink = styled(Link)`
  font-size: ${(props) => props.theme.font.size.sm};
  color: ${(props) => props.theme.font.color.secondary};
  text-decoration: none;
  font-weight: ${(props) => props.theme.font.weight.medium};
  padding: ${(props) => `0 ${props.theme.spacing.xs}`};

  &:hover {
    background-color: ${(props) => props.theme.background.green};
  }
`;

const StyledDiv = styled.div``;

type ProfileLinkProps = {
  to: string;
  children: ReactNode;
};

export const ProfileLink = ({ to, children }: ProfileLinkProps) => {
  return (
    <StyledDiv>
      <StyledLink to={to} target="_blank">
        {children}
      </StyledLink>
    </StyledDiv>
  );
};
