import { NextSeo, NextSeoProps } from "next-seo";

const seo: NextSeoProps = {
  title: 'Joseph Malicke',
  description: 'Documenting the traveling blues of Joseph Malicke.'
}

export default function Head() {
  return (
    <>
      <title>Joseph Malicke</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <NextSeo {...seo} useAppDir={true} />
    </>
  );
}
