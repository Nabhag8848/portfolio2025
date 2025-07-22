import styled from "@emotion/styled";
import { ProfileLink } from "./ProfileLink";
import { HeaderLink } from "./HeaderLink";
import { Link } from "react-router";

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

const StyledHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${(props) => `${props.theme.spacing.lg}`};

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: ${(props) => props.theme.spacing.sm};
  }
`;

const StyledHeader = styled.h1`
  color: ${(props) => props.theme.font.color.secondary};
  font-weight: ${(props) => props.theme.font.weight.medium};
  font-size: ${(props) => props.theme.font.size.lg};
  letter-spacing: -0.05em;
  margin: 0;
`;

const StyledContributionsBadge = styled(Link)`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.xs};
  padding: ${(props) => `${props.theme.spacing.xs} ${props.theme.spacing.sm}`};
  background: ${(props) => `${props.theme.background.tertiary}cc`};
  border: 1px solid #22c55e80;
  color: #22c55e;
  text-decoration: none;
  border-radius: 6px;
  font-size: ${(props) => props.theme.font.size.xs};
  font-weight: ${(props) => props.theme.font.weight.medium};
  line-height: 1;
  white-space: nowrap;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 4px 12px #22c55e20,
    0 2px 4px ${(props) => `${props.theme.font.color.tertiary}20`};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px #22c55e30,
      0 4px 8px ${(props) => `${props.theme.font.color.tertiary}30`};
  }

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.font.size.xxs};
    padding: ${(props) =>
      `${props.theme.spacing.xxs} ${props.theme.spacing.xs}`};
  }
`;

const StyledBadgeIcon = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #22c55e;
  display: inline-block;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  box-shadow: 0 0 0 2px #22c55e20;

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.7;
      transform: scale(1.1);
    }
  }
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
      <StyledHeaderContainer>
        <StyledHeader>Nabhag Motivaras</StyledHeader>
        <StyledContributionsBadge to="/contributions">
          <StyledBadgeIcon />
          Contributions
        </StyledContributionsBadge>
      </StyledHeaderContainer>
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
          I began my career by building four integrations for an Investing
          Monitoring Tool. Since then, have spent years specializing in the
          work of integrations, which I find demanding cause 90% of
          SaaS is just building integrations. While my broader expertise is in
          web engineering, I excel in building integrations, marketplace apps
          and could be the best choice for your needs.
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
              Sole engineer behind building entire system powering 160K+ therapy
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
              to="https://github.com/Nabhag8848/google-summer-of-code"
              companyName="Notion Integration for Rocket.Chat"
              dateRange=""
            />
            <StyledSubParagraph>
              Built a Notion integration for Rocket.Chat before AI code editors
              existed, and even after years, the rocketchat community still use
              my work as a reference for building their own integrations. Check
              out {" "}
              <a
                href="https://www.figma.com/file/1Tk99mGHBmbQpOiT3vP17i/NotionApp"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#22c55e" }}
              >
                figma-design
              </a>
              .
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
          <StyledSubSection>
            <HeaderLink
              to="https://github.com/Nabhag8848/openstatus-raycast-extension"
              companyName="OpenStatus Raycast Extension"
              dateRange=""
            />
            <StyledSubParagraph>
              Experience OpenStatus as if it's a native, keep an eye on current
              status updates, effortlessly create detailed status reports, and
              update them with lightning speed.
            </StyledSubParagraph>
          </StyledSubSection>
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
              to="https://github.com/Nabhag8848/yoursTruly.Backend"
              companyName="AI Integration for Rocket.Chat"
              dateRange=""
            />
            <StyledSubParagraph>
              Generate memes with AI and send them to your friends right into
              Rocket.Chat.
            </StyledSubParagraph>
          </StyledSubSection>
          <StyledSubSection>
            <HeaderLink
              to="https://github.com/Nabhag8848/monorepo-architecture"
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
              to="https://github.com/Nabhag8848/react-vite-template"
              companyName="React Vite Template"
              dateRange=""
            />
            <StyledSubParagraph>
              A modern, minimal React template built with Vite, featuring
              TypeScript, React Router, Emotion, and system-aware theming.
            </StyledSubParagraph>
          </StyledSubSection>
        </StyledSection>
      </StyledMain>
    </StyledContainer>
  );
};
