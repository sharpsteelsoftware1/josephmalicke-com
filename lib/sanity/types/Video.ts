import * as R from "ramda";

export type Video = {
  _id: string;
  _createdAt: string;
  _type: string;
  playbackId: string;
  slug: {
    current: string;
  };
  thumbnailUrl: string;
  title: string;
  videoUrl: string;
};

const playbackUrl = (playbackId: string) =>
  `https://stream.mux.com/${playbackId}.m3u8`;

const thumbnailUrl = (playbackId: string) =>
  `https://image.mux.com/${playbackId}/thumbnail.png`;

const convertVideo = (sanityVideo: any): Video => ({
  _id: sanityVideo._id,
  _createdAt: sanityVideo._createdAt,
  _type: sanityVideo._type,
  playbackId: sanityVideo.video.asset.playbackId,
  slug: sanityVideo.slug,
  title: sanityVideo.title,
  thumbnailUrl: thumbnailUrl(sanityVideo.video.asset.data.playback_ids[0].id),
  videoUrl: playbackUrl(sanityVideo.video.asset.data.playback_ids[0].id),
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
