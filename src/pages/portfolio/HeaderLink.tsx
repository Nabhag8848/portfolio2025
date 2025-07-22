import styled from "@emotion/styled";
import { SoundLink } from "@ui/components/SoundLink";

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${(props) => props.theme.spacing.base};
  width: 100%;
`;

const StyledLink = styled(SoundLink)`
  font-size: ${(props) => props.theme.font.size.base};
  color: ${(props) => props.theme.font.color.primary};
  text-decoration: underline;
  font-weight: ${(props) => props.theme.font.weight.medium};
  position: relative;
  display: inline-block;
  padding: ${(props) =>
    `${props.theme.spacing.sm} ${props.theme.spacing.lg} ${props.theme.spacing.sm} 0`};
  background: ${(props) => `${props.theme.background.tertiary}30`};
  backdrop-filter: blur(8px);
  border-radius: 10px;
  border: 1px solid ${(props) => `${props.theme.font.color.tertiary}10`};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-2px);
    background: ${(props) => `${props.theme.background.green}15`};
    border-color: ${(props) => `${props.theme.background.green}30`};
    box-shadow: 0 4px 12px ${(props) => `${props.theme.background.green}10`};
  }

  @media (max-width: 440px) {
    font-size: ${(props) => props.theme.font.size.sm};
  }
`;

const StyledDate = styled.span`
  font-size: ${(props) => props.theme.font.size.xs};
  color: ${(props) => props.theme.font.color.light};
  font-weight: ${(props) => props.theme.font.weight.regular};
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.font.size.xxs};
  }

  @media (max-width: 440px) {
    white-space: normal;
    text-align: right;
    line-height: 1.2;
  }
`;

type HeaderLinkProps = {
  to: string;
  companyName: string;
  dateRange: string;
};

export const HeaderLink = ({ to, companyName, dateRange }: HeaderLinkProps) => {
  return (
    <StyledContainer>
      <StyledLink to={to} target="_blank">
        {companyName}
      </StyledLink>
      {dateRange && <StyledDate>{dateRange}</StyledDate>}
    </StyledContainer>
  );
};
