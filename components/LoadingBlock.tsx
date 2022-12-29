import React from "react";
import ContentLoader from "react-content-loader";

const LoadingBlock = () => (
  <ContentLoader
    speed={2}
    width={325}
    height={460}
    viewBox="0 0 325 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="48" y="30" rx="10" ry="10" width="210" height="220" />
    <rect x="30" y="265" rx="5" ry="5" width="90" height="12" />
    <rect x="165" y="265" rx="5" ry="5" width="130" height="12" />
    <rect x="30" y="290" rx="5" ry="5" width="265" height="13" />
    <rect x="30" y="310" rx="5" ry="5" width="265" height="13" />
    <rect x="30" y="330" rx="5" ry="5" width="265" height="13" />
    <rect x="30" y="370" rx="10" ry="10" width="90" height="25" />
    <rect x="30" y="405" rx="20" ry="20" width="175" height="40" />
    <circle cx="275" cy="425" r="20" />
  </ContentLoader>
);

export default LoadingBlock;
