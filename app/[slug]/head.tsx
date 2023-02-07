import { NextSeo, NextSeoProps } from "next-seo";
import { sanityItem } from "../../lib/sanity";

export default async function Head({ params }: { params: { slug: string } }) {
  const rawItem = await sanityItem(params.slug);
  const og: NextSeoProps = {
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
      <NextSeo {...og} useAppDir={true} />
    </>
  );
}
