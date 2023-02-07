import * as R from "ramda";
import client from "@sanity/client";
import { blogs } from "./types/Blog";
import { convertVideo, videos } from "./types/Video";
import { logGroq } from "./util/log/logGroq";

const sanityClient = client({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET_NAME,
  apiVersion: "2023-01-28",
  token: process.env.SANITY_TOKEN,
  useCdn: false,
});

const sanityApi = {
  blogs: blogs(sanityClient),
  videos: videos(sanityClient),
};

const isVideo = (sanityItem: any) => sanityItem._type == "video";
const mutate = (sanityItem: any) => {
  if (isVideo(sanityItem)) return convertVideo(sanityItem);
  else return sanityItem;
};

const sanityItems = async (page = 0, pageCount = 6) => {
  const start = page * pageCount;
  const end = start + pageCount;
  const groq = /* groq */ `
      *[(_type == "blog" || _type == "video") && !(_id in path('drafts.**'))]
      {..., video{asset->}, "totalCount": count(*[(_type == "blog" || _type == "video")])} 
      | order(_createdAt desc)
      [${start}...${end}] 
    `;
  const rawResults = await sanityClient.fetch(groq);
  logGroq(groq)
  const results = R.map(mutate)(rawResults);
  return results;
};

const sanityItem = async (slug: string) => {
  const groq = /* groq */ `
      *[(slug.current == "${slug}") && !(_id in path('drafts.**'))]
      {..., video{asset->}, "totalCount": count(*[(slug.current == "${slug}")])} 
    `;
  const rawResults = await sanityClient.fetch(groq);
  const result = R.map(mutate)(rawResults)[0];
  return result;
};

export default sanityApi;
export { sanityClient, sanityItem, sanityItems };
