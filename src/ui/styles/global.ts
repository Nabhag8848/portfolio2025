import { ThemeType } from "@ui/types/theme";

export const globalStyles = (theme: ThemeType) => () => {
  return {
    ":root": {
      "font-size": "62.5%",
    },
    "*, *::before, *::after": {
      margin: 0,
      padding: 0,
      "box-sizing": "border-box",
      transition: "all 0.2s ease-in-out",
    },
    "*:focus": {
      outline: `1px solid ${theme.background.green}`,
      "outline-offset": "1px",
    },
    body: {
      backgroundColor: theme.background.tertiary,
      backgroundImage: theme.background.gradient,
      "overflow-x": "hidden",
      "font-family": theme.font.family.sans,
      "font-weight": theme.font.weight.regular,
      "line-height": theme.text.lineHeight.default,
      "min-height": "100vh",
      "letter-spacing": "-0.025em",
    },
    "::selection": {
      backgroundColor: theme.background.green,
      color: "oklch(98% 0 0)",
    },
  };
};
