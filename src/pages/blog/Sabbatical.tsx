import styled from "@emotion/styled";
import { useEffect, useState } from "react";
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

const StyledHeader = styled.h1`
  color: ${(props) => props.theme.font.color.secondary};
  font-weight: ${(props) => props.theme.font.weight.medium};
  font-size: ${(props) => props.theme.font.size.lg};
  letter-spacing: -0.05em;
  margin: 0;
  margin-bottom: ${(props) => props.theme.spacing.lg};
`;

const StyledParagraph = styled.p`
  color: ${(props) => props.theme.font.color.tertiary};
  line-height: ${(props) => props.theme.text.lineHeight.paragraph};
  letter-spacing: ${(props) => props.theme.text.letterSpacing.wide};
  font-size: ${(props) => props.theme.font.size.xs};
  margin-bottom: ${(props) => props.theme.spacing.lg};
  width: 100%;
  text-align: justify;
`;

const StyledSubHeader = styled.h3`
  color: ${(props) => props.theme.font.color.primary};
  font-size: ${(props) => props.theme.font.size.md};
  font-weight: ${(props) => props.theme.font.weight.regular};
  position: relative;
  display: inline-block;
  margin-bottom: ${(props) => props.theme.spacing.lg};
  margin-top: ${(props) => props.theme.spacing["2xl"]};
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

  &:first-of-type {
    margin-top: 0;
  }
`;

const StyledSection = styled.section`
  margin-bottom: ${(props) => props.theme.spacing["2xl"]};
`;

const StyledListItem = styled.li`
  color: ${(props) => props.theme.font.color.tertiary};
  line-height: ${(props) => props.theme.text.lineHeight.paragraph};
  letter-spacing: ${(props) => props.theme.text.letterSpacing.wide};
  font-size: ${(props) => props.theme.font.size.xs};
  margin-bottom: ${(props) => props.theme.spacing.sm};
  text-align: justify;
`;

const StyledList = styled.ul`
  padding-left: ${(props) => props.theme.spacing.lg};
  margin-bottom: ${(props) => props.theme.spacing.lg};
`;

const StyledLink = styled.a`
  color: #22c55e;
  text-decoration: underline;
  font-weight: ${(props) => props.theme.font.weight.medium};

  &:hover {
    color: #16a34a;
  }
`;

const StyledBackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: ${(props) => props.theme.font.color.secondary};
  text-decoration: none;
  font-size: ${(props) => props.theme.font.size.xs};
  margin-bottom: ${(props) => props.theme.spacing.xl};
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.font.color.primary};
  }
`;

const StyledImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${(props) => props.theme.spacing.lg};
  margin: ${(props) =>
    `${props.theme.spacing.base} 0 ${props.theme.spacing["2xl"]}`};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${(props) => props.theme.spacing.base};
  }
`;

const StyledImageCard = styled.figure`
  margin: 0;
  background: ${(props) => `${props.theme.background.tertiary}cc`};
  border: 1px solid #22c55e30;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px ${(props) => `${props.theme.font.color.tertiary}12`};
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: zoom-in;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px ${(props) => `${props.theme.font.color.tertiary}20`};
  }

  img {
    display: block;
    width: 100%;
    height: auto;
    transition: transform 0.2s ease;
  }

  figcaption {
    padding: ${(props) =>
      `${props.theme.spacing.sm} ${props.theme.spacing.base}`};
    font-size: ${(props) => props.theme.font.size.xxs};
    color: ${(props) => props.theme.font.color.light};
    border-top: 1px solid #22c55e20;
  }

  &:hover img {
    transform: scale(1.02);
  }
`;

const StyledModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: grid;
  place-items: center;
  z-index: 1000;
  padding: ${(props) => props.theme.spacing.base};
`;

const StyledModalContent = styled.div`
  position: relative;
  bottom: 50vh;
  max-width: 92vw;
  max-height: 92vh;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.background.tertiary};
  border: 1px solid #22c55e30;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);

  img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: contain;
    max-height: 80vh;
    background: ${(props) => props.theme.background.tertiary};
    transition: transform 0.2s ease;
  }

  footer {
    padding: ${(props) =>
      `${props.theme.spacing.sm} ${props.theme.spacing.base}`};
    font-size: ${(props) => props.theme.font.size.xs};
    color: ${(props) => props.theme.font.color.secondary};
    border-top: 1px solid #22c55e20;
  }
`;

const StyledCloseButton = styled.button`
  position: absolute;
  top: ${(props) => props.theme.spacing.sm};
  right: ${(props) => props.theme.spacing.sm};
  background: #000000cc;
  border: 1px solid #000;
  color: #fff;
  padding: ${(props) => `${props.theme.spacing.xs} ${props.theme.spacing.sm}`};
  border-radius: 6px;
  cursor: pointer;
  font-size: ${(props) => props.theme.font.size.xs};
  transition: all 0.15s ease;

  &:hover {
    background: #000;
    border-color: #111;
  }
`;

export const Sabbatical = () => {
  const [lightbox, setLightbox] = useState<null | {
    src: string;
    caption: string;
    alt: string;
  }>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    if (lightbox) {
      document.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <StyledContainer>
      <StyledBackLink to="/">← Back</StyledBackLink>
      <StyledHeader>Sabbatical</StyledHeader>
      <StyledParagraph>
        After wrapping up my last role in May, I decided to take a genuine break
        from work — something I'd been putting off in the name of momentum. The
        idea was simple: rest, reset, and return with clarity. What I didn't
        expect was for that break to turn into one of the most important periods
        of personal and professional growth I've experienced.
      </StyledParagraph>

      <StyledSection>
        <StyledSubHeader>When Rest Became a Wake-Up Call</StyledSubHeader>
        <StyledParagraph>
          Shortly after stepping away from work, I started noticing things I'd
          been brushing aside for months:
        </StyledParagraph>
        <StyledList>
          <StyledListItem>I was tired all the time.</StyledListItem>
          <StyledListItem>I struggled to focus.</StyledListItem>
          <StyledListItem>My memory felt unreliable.</StyledListItem>
          <StyledListItem>Even my tongue felt sticky.</StyledListItem>
        </StyledList>
        <StyledParagraph>
          Hoping it was just burnout, I tried interviewing again — but something
          was off. I wasn't cognitively there.
        </StyledParagraph>
        <StyledParagraph>
          A few tests later, in late August, I finally understood why:
        </StyledParagraph>
        <StyledParagraph>
          My Vitamin D3 level was 6.28 ng/mL, which is severely low, and my
          Vitamin B12 was also significantly deficient. Those vague symptoms
          weren't just stress — they were my body signaling a deeper imbalance.
        </StyledParagraph>
        <StyledImageGrid>
          <StyledImageCard
            onClick={() =>
              setLightbox({
                src: "/d3.jpeg",
                caption: "Vitamin D3",
                alt: "Vitamin D3 lab result",
              })
            }
          >
            <img src="/d3.jpeg" alt="Vitamin D3 lab result" />
            <figcaption>Vitamin D3</figcaption>
          </StyledImageCard>
          <StyledImageCard
            onClick={() =>
              setLightbox({
                src: "/b12.jpeg",
                caption: "Vitamin B12",
                alt: "Vitamin B12 lab result",
              })
            }
          >
            <img src="/b12.jpeg" alt="Vitamin B12 lab result" />
            <figcaption>Vitamin B12</figcaption>
          </StyledImageCard>
        </StyledImageGrid>
      </StyledSection>

      {lightbox && (
        <StyledModalOverlay
          role="dialog"
          aria-modal="true"
          aria-label={`${lightbox.caption} - expanded view`}
          onClick={() => setLightbox(null)}
        >
          <StyledModalContent onClick={(e) => e.stopPropagation()}>
            <StyledCloseButton onClick={() => setLightbox(null)}>
              Close
            </StyledCloseButton>
            <img src={lightbox.src} alt={lightbox.alt} />
            <footer>{lightbox.caption}</footer>
          </StyledModalContent>
        </StyledModalOverlay>
      )}

      <StyledSection>
        <StyledSubHeader>
          Rebuilding Slowly: Health First, Learning Next
        </StyledSubHeader>
        <StyledParagraph>
          Once I began my treatment protocol, I made conscious and simple
          changes:
        </StyledParagraph>
        <StyledList>
          <StyledListItem>
            I started running every day, even if just for a short while
          </StyledListItem>
          <StyledListItem>
            I spent 20 minutes in sunlight, three times a day, to naturally
            boost Vitamin D
          </StyledListItem>
          <StyledListItem>I prioritized rest without guilt</StyledListItem>
        </StyledList>
        <StyledParagraph>
          Instead of pushing myself back into work, I used the break to heal —
          and to learn.
        </StyledParagraph>
        <StyledParagraph>
          I filled long-standing knowledge gaps thoughtfully, returning to core
          web topics through platforms like{" "}
          <StyledLink
            href="https://web.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            web.dev
          </StyledLink>{" "}
          (
          <StyledLink
            href="https://github.com/Nabhag8848/web.dev/tree/main"
            target="_blank"
            rel="noopener noreferrer"
          >
            reference
          </StyledLink>
          ) . I studied things I'd always wanted to understand better.
        </StyledParagraph>
        <StyledParagraph>
          I also documented parts of my journey as I started feeling better in
          my{" "}
          <StyledLink
            href="https://github.com/Nabhag8848/goals/wiki"
            target="_blank"
            rel="noopener noreferrer"
          >
            goals wiki
          </StyledLink>
          .
        </StyledParagraph>
        <StyledParagraph>
          In parallel, I kept coding to stay in flow. One of the highlights?
        </StyledParagraph>
        <StyledParagraph>
          I built a Chrome extension for TwentyCRM that scrapes lead data from
          LinkedIn and directly upserts it into the CRM — saving manual entry
          and making the process seamless. (
          <StyledLink
            href="https://github.com/twentyhq/twenty/pull/15521"
            target="_blank"
            rel="noopener noreferrer"
          >
            reference
          </StyledLink>
          )
        </StyledParagraph>
        <StyledParagraph>
          It was a simple but useful reminder: I may be resting, but I'm still a
          builder at heart.
        </StyledParagraph>
      </StyledSection>

      <StyledSection>
        <StyledSubHeader>What This Time Gave Me</StyledSubHeader>
        <StyledParagraph>
          This wasn't just a break. It was a reset — physically, mentally, and
          technically.
        </StyledParagraph>
        <StyledList>
          <StyledListItem>
            I learned that energy and clarity start with health
          </StyledListItem>
          <StyledListItem>
            I rediscovered the joy of learning without pressure
          </StyledListItem>
          <StyledListItem>
            I realized that pausing is not the opposite of progress — sometimes,
            it's how you find new direction
          </StyledListItem>
        </StyledList>
        <StyledParagraph>
          The time I took off didn't set me back. It gave me space to grow.
        </StyledParagraph>
      </StyledSection>

      <StyledSection>
        <StyledSubHeader>What's Next</StyledSubHeader>
        <StyledParagraph>
          Now that my energy is returning and my routine feels grounded, I'm
          excited to explore new opportunities again.
        </StyledParagraph>
        <StyledParagraph>
          If you're building something meaningful and value ownership, clarity,
          and thoughtful engineering — I'd love to talk.
        </StyledParagraph>
      </StyledSection>
    </StyledContainer>
  );
};
