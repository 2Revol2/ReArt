export const buildSvgLoader = () => {
  return {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };
};
