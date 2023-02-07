import { NextSeo, NextSeoProps } from "next-seo";

const NEXT_SEO_DEFAULT: NextSeoProps = {
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://josephmalicke.com",
    title: "Joseph Malicke rocks",
    description: "Joseph Malicke is a legend",
    images: [
      {
        url: "https://via.placeholder.com/600?text=meow",
        width: 600,
        height: 600,
        alt: "Joseph Malicke alt",
        type: "image/jpeg",
      },
    ],
    siteName: "Joseph Malicke",
  },
};

export default function Head() {
  return (
    <>
      <title>Joseph Malicke</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <NextSeo {...NEXT_SEO_DEFAULT} useAppDir={true} />
    </>
  );
}
