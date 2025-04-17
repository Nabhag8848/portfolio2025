import styled from "@emotion/styled";
import { ProfileLink } from "./ProfileLink";

const StyledContainer = styled.div`
  padding: ${(props) =>
    `${props.theme.spacing.xl} ${props.theme.spacing.base}`};
`;

const StyledHeader = styled.h1`
  color: ${(props) => props.theme.font.color.secondary};
  font-weight: ${(props) => props.theme.font.weight.regular};
  font-size: ${(props) => props.theme.font.size.lg};
  margin-bottom: ${(props) => `${props.theme.spacing.lg}`};
`;

const StyledSubHeading = styled.h2`
  color: ${(props) => props.theme.font.color.tertiary};
  font-weight: ${(props) => props.theme.font.weight.regular};
  font-size: ${(props) => props.theme.font.size.base};
  margin-bottom: ${(props) => `${props.theme.spacing.xl}`};
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: start;

  @media (min-width: 1024px) {
    max-width: 50%;
  }
`;

export const Portfolio = () => {
  return (
    <StyledContainer>
      <StyledHeader>Nabhag Motivaras</StyledHeader>
      <StyledSubHeading>Full Stack Engineer</StyledSubHeading>
      <StyledNav>
        <ProfileLink to="https://github.com/Nabhag8848">Github</ProfileLink>
        <ProfileLink to="https://x.com/NabhagMotivaras">Twitter</ProfileLink>
        <ProfileLink to="https://linkedin.com/in/nabhagmotivaras">
          LinkedIn
        </ProfileLink>
        <ProfileLink to="mailto:motivaras.nabhag@gmail.com">Mail</ProfileLink>
      </StyledNav>
    </StyledContainer>
  );
};
