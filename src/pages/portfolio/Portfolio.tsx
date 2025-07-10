import styled from "@emotion/styled";
import { ProfileLink } from "./ProfileLink";
import { HeaderLink } from "./HeaderLink";

const StyledContainer = styled.div`
  padding: ${(props) =>
    `${props.theme.spacing["2xl"]} ${props.theme.spacing.base}`};
  color: ${(props) => props.theme.font.color.tertiary};
  max-width: 60rem;
  margin: 0 auto;
  opacity: 0;
  animation: fadeIn 0.5s ease-in-out forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    width: 95%;
    padding: ${(props) =>
      `${props.theme.spacing.xl} ${props.theme.spacing.base}`};
  }
`;

const StyledHeader = styled.h1`
  color: ${(props) => props.theme.font.color.secondary};
  font-weight: ${(props) => props.theme.font.weight.medium};
  font-size: ${(props) => props.theme.font.size.lg};
  margin-bottom: ${(props) => `${props.theme.spacing.lg}`};
  letter-spacing: -0.05em;
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
  margin-bottom: ${(props) => props.theme.spacing["2xl"]};
  width: 100%;
  text-align: justify;
`;

const StyledSubParagraph = styled(StyledParagraph)`
  font-size: ${(props) => props.theme.font.size.xs};
`;

const StyledSubHeader = styled.h3`
  color: ${(props) => props.theme.font.color.primary};
  font-size: ${(props) => props.theme.font.size.md};
  font-weight: ${(props) => props.theme.font.weight.regular};
  position: relative;
  display: inline-block;
  margin-bottom: ${(props) => props.theme.spacing["2xl"]};
  padding-bottom: ${(props) => props.theme.spacing.sm};

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${(props) => props.theme.background.green};
  }
`;

const StyledSection = styled.section`
  margin-bottom: ${(props) => props.theme.spacing["3xl"]};
`;

const StyledSubSection = styled.div`
  margin-bottom: ${(props) => props.theme.spacing["2xl"]};

  &:last-child {
    margin-bottom: 0;
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
            <HeaderLink
              to="https://www.rockethealth.app"
              companyName="Rocket Health"
              dateRange="Sep 2024 - May 2025"
            />
            <StyledSubParagraph>
              Sole engineer behind building entire system powering 100K+ therapy
              sessions and 40K+ users. Built event-driven system integrating
              Typeform, Calendly, and Razorpay; migrated messy legacy data via
              custom scripts; developed internal operation web app; and
              automated key workflows for seamless operations.
            </StyledSubParagraph>
          </StyledSubSection>
          <StyledSubSection>
            <HeaderLink
              to="https://www.github.com/revertinc/revert"
              companyName="Revert (now Ampersand)"
              dateRange="May 2024 - Aug 2024"
            />
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
            <HeaderLink
              to="https://summerofcode.withgoogle.com/archive/2023/projects/9v76k7Q8"
              companyName="Google Summer of Code"
              dateRange="May 2023 - Aug 2023"
            />
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
            <HeaderLink
              to="https://github.com/Nabhag8848?tab=overview&from=2023-12-01&to=2023-12-31&org=RocketChat"
              companyName="Rocket.Chat (contributor)"
              dateRange="Sep 2022 - May 2024"
            />
            <StyledSubParagraph>
              Contributed to GitHub integration and resolved critical bugs in
              Rocket.Chat. Authored a backward-compatible OAuth2 authorization
              approach for RocketChat.Apps, Maintainer of the Notion
              Integration, and actively supported new contributors through
              weekly Apps Engine workshops.
            </StyledSubParagraph>
          </StyledSubSection>
          <StyledSubSection>
            <HeaderLink
              to="https://neev.finance/"
              companyName="Neev.Finance"
              dateRange="May 2022 - Jun 2022"
            />
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
            <HeaderLink
              to="https://github.com/Nabhag8848/mcp-marketplace"
              companyName="MCP Marketplace"
              dateRange=""
            />
            <StyledSubParagraph>
              Discover MCP servers over the internet. Built a real-time engine
              that discovers and sync MCP servers as they appear in Github.
            </StyledSubParagraph>
          </StyledSubSection>
          <StyledSubSection>
            <HeaderLink
              to="https://monorepo-architecture.vercel.app"
              companyName="Monorepo Template"
              dateRange=""
            />
            <StyledSubParagraph>
              NX template with monorepo architecture for building full stack
              application with NestJS (TypeORM + Postgres), React (Shadcn +
              Tailwind), Redis (including BullMQ) and Apollo GraphQL.
            </StyledSubParagraph>
          </StyledSubSection>
          <StyledSubSection>
            <HeaderLink
              to="https://www.raycast.com/NabhagMotivaras/twenty"
              companyName="Twenty Raycast Extension"
              dateRange=""
            />
            <StyledSubParagraph>
              Raycast Extension for seamless twentyCRM management, enabling
              users to instantly create records across both standard and custom
              objects.
            </StyledSubParagraph>
          </StyledSubSection>
          <StyledSubSection>
            <HeaderLink
              to="https://github.com/Nabhag8848/CoverCraft"
              companyName="CoverCraft - Figma x Hashnode"
              dateRange=""
            />
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
