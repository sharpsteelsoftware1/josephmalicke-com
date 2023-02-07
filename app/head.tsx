import { NextSeo, NextSeoProps } from "next-seo";
import { OpenGraphVideo } from "next-seo/lib/types";

const wtf: OpenGraphVideo
const NEXT_SEO_DEFAULT: NextSeoProps = {
  openGraph: {
    title: "Mux video",
    type: "video.episode",
    description: "Joseph Malicke is a legend",
    images: [
      {
        url: "https://image.mux.com/Gi2BUxv00khusNrjSgFZyqicErDvNP5026aSnc7uDVZeU/thumbnail.png",
        // width: 600,
        // height: 600,
        alt: "Joseph Malicke alt",
        type: "image/jpeg",
      },
    ],
    videos: [
      {
        url: "https://stream.mux.com/900XdUmJxuaR0001jyLgSryGBVZY6zho3VEGKTDSDUmt02E/high.mp4"
      }
    ],
    url: "https://josephmalicke.com",
    locale: "en_US",
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
