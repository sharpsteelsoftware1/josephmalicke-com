import * as R from "ramda";
import { staticRenditionUrl } from "../../mux/util/staticRenditionUrl";
import { streamUrl } from "../../mux/util/streamUrl";
import { thumbnailUrl } from "../../mux/util/thumbnailUrl";

export type Video = {
  _id: string;
  _createdAt: string;
  _type: string;
  description: string;
  playbackId: string;
  slug: {
    current: string;
  };
  staticRenditionUrl: string;
  streamUrl: string;
  thumbTime: string;
  thumbnailUrl: string;
  title: string;
};

const convertVideo = (sanityVideo: any): Video => ({
  _id: sanityVideo._id,
  _createdAt: sanityVideo._createdAt,
  _type: sanityVideo._type,
  description: sanityVideo.description,
  playbackId: sanityVideo.video.asset.playbackId,
  slug: sanityVideo.slug,
  staticRenditionUrl: staticRenditionUrl(sanityVideo.video.asset.playbackId),
  title: sanityVideo.title,
  thumbTime: sanityVideo.thumbTime,
  thumbnailUrl: thumbnailUrl(sanityVideo.video.asset.playbackId),
  streamUrl: streamUrl(sanityVideo.video.asset.data.playback_ids[0].id),
});

const videos =
  (sanityClient: any) =>
  async (page = 0, pageCount = 6) => {
    const start = page * pageCount;
    const end = start + pageCount;
    const groq = /* groq */ `
      *[(_type == "video") && !(_id in path('drafts.**'))]
      {..., video{asset->}, "totalCount": count(*[(_type == "video")])} 
      | order(_createdAt desc)
      [${start}...${end}] 
    `;
    const sanityResults = await sanityClient.fetch(groq);
    const results = R.map(convertVideo)(sanityResults);
    return results;
  };

export { convertVideo, videos };
