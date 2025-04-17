import styled from "@emotion/styled";
import { ProfileLink } from "./ProfileLink";

const StyledContainer = styled.div`
  padding: ${(props) =>
    `${props.theme.spacing.xl} ${props.theme.spacing.base}`};
  color: ${(props) => props.theme.font.color.tertiary};
`;

const StyledHeader = styled.h1`
  color: ${(props) => props.theme.font.color.secondary};
  font-weight: ${(props) => props.theme.font.weight.medium};
  font-size: ${(props) => props.theme.font.size.lg};
  margin-bottom: ${(props) => `${props.theme.spacing.lg}`};
`;

const StyledSubHeading = styled.h2`
  font-weight: ${(props) => props.theme.font.weight.medium};
  font-size: ${(props) => props.theme.font.size.base};
  margin-bottom: ${(props) => `${props.theme.spacing.xl}`};
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: start;

  margin-bottom: ${(props) => `${props.theme.spacing.xl}`};

  @media (min-width: 1024px) {
    max-width: 50%;
  }
`;

const StyledMain = styled.main``;

const StyledParagraph = styled.p`
  color: ${(props) => props.theme.font.color.tertiary};
  font-size: ${(props) => props.theme.font.size.sm};
  line-height: ${(props) => props.theme.text.lineHeight.paragraph};
  letter-spacing: ${(props) => props.theme.text.letterSpacing.wide};

  margin-bottom: ${(props) => props.theme.spacing.xl};
`;

const StyledSubHeader = styled.h3`
  color: ${(props) => props.theme.font.color.secondary};
  font-size: ${(props) => props.theme.font.size.md};
  font-weight: ${(props) => props.theme.font.weight.regular};
  box-shadow: 0 20px ${(props) => props.theme.background.green};
  margin-bottom: ${(props) => props.theme.spacing["2xl"]};
`;

const StyledSection = styled.section``;

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
      <StyledMain>
        <StyledParagraph>
          I began my career in 2022, by building four integrations for an
          Investing Monitoring Tool. Since then, have spent two years
          specializing in the challenging work of integrations, which I find
          demanding cause 90% of SaaS is just building integrations. While my
          broader expertise is in web engineering, I excel in building
          integrations, marketplace apps and could be the best choice for your
          needs.
        </StyledParagraph>
        <StyledSection>
          <StyledSubHeader>Experience</StyledSubHeader>
        </StyledSection>
      </StyledMain>
    </StyledContainer>
  );
};
