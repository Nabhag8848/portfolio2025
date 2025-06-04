import styled from "@emotion/styled";
import { ReactNode } from "react";
import { SoundLink } from "@ui/components/SoundLink";

const StyledLink = styled(SoundLink)`
  font-size: ${(props) => props.theme.font.size.sm};
  color: ${(props) => props.theme.font.color.secondary};
  text-decoration: none;
  font-weight: ${(props) => props.theme.font.weight.medium};
  padding: ${(props) => `${props.theme.spacing.xs} ${props.theme.spacing.sm}`};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    background-color: ${(props) => props.theme.background.green};
    transition: height 0.2s ease-in-out;
    z-index: -1;
    opacity: 0.2;
  }

  &:hover {
    background-color: transparent;
    &::after {
      height: 100%;
    }
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
