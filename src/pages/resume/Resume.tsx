import styled from "@emotion/styled";

const StyledContainer = styled.div`
  padding: ${(props) =>
    `${props.theme.spacing["2xl"]} ${props.theme.spacing.base}`};
  max-width: 100%;
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
    padding: ${(props) =>
      `${props.theme.spacing.xl} ${props.theme.spacing.base}`};
  }
`;

const StyledIframe = styled.iframe`
  width: 100%;
  height: calc(100vh - 120px);
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 12px ${(props) => `${props.theme.font.color.tertiary}20`};

  @media (max-width: 768px) {
    height: calc(100vh - 80px);
  }
`;

export const Resume = () => {
  // Convert Google Drive sharing link to embeddable format
  // Original: https://drive.google.com/file/d/1iERQ-GjHoHi0l72JEtrk3-laij1dqSCA/view?usp=sharing
  // Embeddable: https://drive.google.com/file/d/1iERQ-GjHoHi0l72JEtrk3-laij1dqSCA/preview
  const resumeUrl =
    "https://drive.google.com/file/d/1iERQ-GjHoHi0l72JEtrk3-laij1dqSCA/preview";

  return (
    <StyledContainer>
      <StyledIframe
        src={resumeUrl}
        title="Resume"
        allow="autoplay"
      />
    </StyledContainer>
  );
};

