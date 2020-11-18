export default {
  // fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  fontSizes: [16, 18, 20, 24, 32, 48, 64],
  colors: {
    text: "#333333",
    greyText: "#555555",
    background: "#f7f7f7",
    primary: "#003262",
    secondary: "#3B7EA1",
    contrast: "#C4820E",
    accent: "#FDB515",
    highlight: "rgba(0, 176, 218, 0.1)",
    muted: "#F2EFEA",
    modes: {
      dark: {
        text: "#ffffff",
        background: "#001931",
        primary: "#00B0DA",
        muted: "#002C56",
      },
    },
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    body: "freight-sans-pro, sans-serif",
    heading: "freight-micro-pro, serif",
    monospace: "Menlo, monospace",
  },
  fontWeights: {
    body: 500,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  shadows: {
    small: "0 0 4px rgba(0, 0, 0, .125)",
    large: "0 0 24px rgba(0, 0, 0, .125)",
  },
  radii: {
    default: 4,
  },
  variants: {},
  cards: {
    primary: {
      p: 3,
      borderRadius: "default",
      boxShadow: "small",
    },
    compact: {
      p: 2,
      borderRadius: 2,
      border: "1px solid",
      borderColor: "muted",
    },
  },
  text: {
    heading: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      mb: 2,
    },
    pageTitle: {
      variant: "text.heading",
      color: "contrast",
      fontSize: [3, 4],
      mb: 4,
    },
    cardTitle: {
      variant: "text.heading",
      color: "primary",
      fontSize: [1, 2],
    },
    subtitle: {
      variant: "text.heading",
      fontWeight: 500,
      color: "greyText",
      fontSize: [0, 1],
    },
    caps: {
      textTransform: "uppercase",
      letterSpacing: "0.2em",
    },
  },
  links: {
    nav: {
      display: "block",
      width: "100%",
      p: 2,
      my: 2,
      color: "primary",
      textDecoration: "none",
      fontSize: 0,
      fontWeight: "bold",
      fontFamily: "body",
      bg: "transparent",
      transitionProperty: "background-color",
      transitionTimingFunction: "ease-out",
      transitionDuration: ".2s",
      borderRadius: "default",
      "&:hover": {
        color: "secondary",
        transition: "0.2s ease-in-out"
        // bg: "highlight",
      },
      "&.active": {
        color: "contrast",
        // bg: "highlight",
      },
    },
  },
  buttons: {
    primary: {
      color: "white",
      bg: "primary",
      fontFamily: "body",
      fontWeight: "body",
      cursor: "pointer",
      outline: "none",
    },
    icon: {
      cursor: "pointer",
      outline: "none",
      position: "absolute",
      top: "50%",
    },
    chip: {
      cursor: "pointer",
      outline: "none",
      borderRadius: "default",
      border: "1px solid #003262",
      bg: "transparent",
      color: "primary",
      py: 1,
      px: 2,
      mr: 2,
      mb: 2,
      fontFamily: "body",
      fontWeight: 700,
      "&:hover": {
        bg: "rgba(6, 94, 175, 0.1)",
      },
      "&.active": {
        bg: "primary",
        color: "white",
      },
    },
  },
  forms: {
    input: {
      fontFamily: "body",
      borderColor: "#C4C4C4",
    },
    select: {
      fontFamily: "body",
    },
    textarea: {
      fontFamily: "body",
      resize: "none",
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      fontWeight: "body",
    },
    a: {
      textDecoration: "none",
      color: "inherit",
      "&:hover": {
        color: "secondary",
      },
    },
  },
}
