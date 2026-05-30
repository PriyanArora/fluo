import type { Config } from "tailwindcss";

const pixelScale = Array.from({ length: 1000 }, (_, index) => index).reduce(
  (scale, value) => {
    scale[value] = `${value}px`;
    return scale;
  },
  {
    full: "100%",
    inherit: "inherit",
    max: "max-content",
  } as Record<string, string>,
);

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/chainops/**/*.{ts,tsx}"],
  theme: {
    extend: {
      spacing: pixelScale,
      width: pixelScale,
      height: pixelScale,
      maxWidth: pixelScale,
      minHeight: pixelScale,
      inset: pixelScale,
      borderWidth: pixelScale,
      lineHeight: pixelScale,
      borderRadius: {
        0: "0px",
      },
    },
  },
  plugins: [],
};

export default config;
