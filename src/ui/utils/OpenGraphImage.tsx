import { Helmet } from "react-helmet-async";

export const OpenGraphImage = () => {
  return (
    <Helmet>
      <meta property="og:title" content="Nabhag Motivaras" />
      <meta property="og:description" content="Full Stack Engineer" />
      <meta property="og:image" content="https://nabhag.dev/nabhag.jpeg" />
      <meta property="og:url" content="https://nabhag.dev" />
      <meta property="og:type" content="website" />
    </Helmet>
  );
};
