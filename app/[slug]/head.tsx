import { NextSeo, NextSeoProps } from "next-seo";
import { sanityItem } from "../../lib/sanity";
import { SITE_SEO_DEFAULTS } from "../head";

export default async function Head({ params }: { params: { slug: string } }) {
  const rawItem = await sanityItem(params.slug);

  const PAGE_SEO: NextSeoProps = {
    ...SITE_SEO_DEFAULTS,
    twitter: {
      cardType: "player",

    },
    openGraph: {
      title: rawItem.title,
      type: "video.episode",
      description: rawItem.description,
      images: [
        {
          url: rawItem.thumbnailUrl,
          alt: "Video thumbnail",
          type: "image/jpeg",
        },
      ],
      videos: [
        {
          url: rawItem.staticRenditionUrl,
        },
      ],
      url: "https://josephmalicke.com",
      locale: "en_US",
      siteName: "Joseph Malicke",
    },
  };

  return (
    <>
      <title>Joseph Malicke</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <NextSeo {...PAGE_SEO} useAppDir={true} />
    </>
  );
}
