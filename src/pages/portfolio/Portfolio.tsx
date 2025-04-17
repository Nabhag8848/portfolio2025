import styled from "@emotion/styled";
import { Link } from "react-router";

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

export const Portfolio = () => {
  return (
    <StyledContainer>
      <StyledHeader>Nabhag Motivaras</StyledHeader>
      <StyledSubHeading>Full Stack Engineer</StyledSubHeading>
      <StyledNav>
        <StyledDiv>
          <StyledLink to="https://github.com/Nabhag8848" target="_blank">
            Github
          </StyledLink>
        </StyledDiv>
        <StyledDiv>
          <StyledLink to="https://x.com/NabhagMotivaras" target="_blank">
            Twitter
          </StyledLink>
        </StyledDiv>
        <StyledDiv>
          <StyledLink
            to="https://linkedin.com/in/nabhagmotivaras"
            target="_blank"
          >
            LinkedIn
          </StyledLink>
        </StyledDiv>
        <StyledDiv>
          <StyledLink to="mailto:motivaras.nabhag@gmail.com" target="_blank">
            Mail
          </StyledLink>
        </StyledDiv>
      </StyledNav>
    </StyledContainer>
  );
};
