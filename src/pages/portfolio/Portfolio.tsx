import styled from "@emotion/styled";
import { ProfileLink } from "./ProfileLink";
import { HeaderLink } from "./HeaderLink";

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
  line-height: ${(props) => props.theme.text.lineHeight.paragraph};
  letter-spacing: ${(props) => props.theme.text.letterSpacing.wide};
  font-size: ${(props) => props.theme.font.size.xs};
  margin-bottom: ${(props) => props.theme.spacing.xl};
`;

const StyledSubParagraph = styled(StyledParagraph)`
  font-size: ${(props) => props.theme.font.size.sm};
`;

const StyledSubHeader = styled.h3`
  color: ${(props) => props.theme.font.color.primary};
  font-size: ${(props) => props.theme.font.size.md};
  font-weight: ${(props) => props.theme.font.weight.regular};
  box-shadow: 0 20px ${(props) => props.theme.background.green};
  margin-bottom: ${(props) => props.theme.spacing["2xl"]};
`;

const StyledSection = styled.section``;
const StyledSubSection = styled.div``;

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
          <StyledSubSection>
            <HeaderLink to="https://www.rockethealth.app">
              Rocket Health - ( Sep 2024 - May 2025 )
            </HeaderLink>
            <StyledSubParagraph>
              Sole engineer behind building entire system powering 100K+ therapy
              sessions and 40K+ users. Built event-driven system integrating
              Typeform, Calendly, and Razorpay; migrated messy legacy data via
              custom scripts; developed internal operation web app; and
              automated key workflows for seamless operations.
            </StyledSubParagraph>
          </StyledSubSection>
          <StyledSubSection>
            <HeaderLink to="https://www.github.com/revertinc/revert">
              Revert (now Ampersand) - ( May 2024 - Aug 2024 )
            </HeaderLink>
            <StyledSubParagraph>
              Played a key role in building the new client-side, managing
              production, and leading a full app migration. Contributed to
              internal CRM SDKs and customized isomorphic JavaScript client SDKs
              for customer needs. Set up the foundation for a webhook system and
              maintained the codebase during critical periods. Conducted
              integration code reviews to ensure product stability.
            </StyledSubParagraph>
          </StyledSubSection>
          <StyledSubSection>
            <HeaderLink to="https://summerofcode.withgoogle.com/archive/2023/projects/9v76k7Q8">
              Google Summer of Code - ( May 2023 - Aug 2023 )
            </HeaderLink>
            <StyledSubParagraph>
              Built Notion App for Rocket.Chat, enabling seamless collaboration
              by allowing users to create, share, and interact with Notion pages
              and databases directly within Rocket.Chat. Implemented OAuth2
              authorization, multi-workspace support, message preservation, and
              in-chat Notion tables viewing — all with a user-centric and
              backward-compatible approach.
            </StyledSubParagraph>
          </StyledSubSection>
          <StyledSubSection>
            <HeaderLink to="https://github.com/Nabhag8848?tab=overview&from=2023-12-01&to=2023-12-31&org=RocketChat">
              Rocket.Chat - ( Sep 2022 - May 2024 )
            </HeaderLink>
            <StyledSubParagraph>
              Contributed to GitHub integration and resolved critical bugs in
              Rocket.Chat. Authored a backward-compatible OAuth2 authorization
              approach for RocketChat.Apps, Maintainer of the Notion
              Integration, and actively supported new contributors through
              weekly Apps Engine workshops.
            </StyledSubParagraph>
          </StyledSubSection>
          <StyledSubSection>
            <HeaderLink to="https://neev.finance/">
              Neev.Finance - ( May 2022 - Jun 2022 )
            </HeaderLink>
            <StyledSubParagraph>
              Developed a real-time crypto analytics dashboard using WebSockets,
              and NestJS (with Observer pattern). Integrated data feeds from
              four major exchange (FTX, OKX, Binance, Huobi Global) and
              implemented scheduled data storage using cron jobs.
            </StyledSubParagraph>
          </StyledSubSection>
        </StyledSection>
        <StyledSection>
          <StyledSubHeader>Projects</StyledSubHeader>
          <StyledSubSection>
            <HeaderLink to="https://www.raycast.com/NabhagMotivaras/twenty">
              Twenty Raycast Extension
            </HeaderLink>
            <StyledSubParagraph>
              Raycast Extension for seamless twentyCRM management, enabling
              users to instantly create records across both standard and custom
              objects.
            </StyledSubParagraph>
          </StyledSubSection>
          <StyledSubSection>
            <HeaderLink to="https://github.com/Nabhag8848/CoverCraft">
              CoverCraft - Figma x Hashnode
            </HeaderLink>
            <StyledSubParagraph>
              CoverCraft lets you instantly set cover images in Hashnode Blog,
              designed in Figma — no downloads, renaming, or platform switching.
            </StyledSubParagraph>
          </StyledSubSection>
        </StyledSection>
      </StyledMain>
    </StyledContainer>
  );
};
