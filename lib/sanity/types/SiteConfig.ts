import { logGroq } from "../util/log/logGroq";

export type SiteConfig = {
  imageUrl: string;
};

const siteConfig = (sanityApi: any) => async () => {
  const groq = `
      *[(_type == "siteConfig")]
      {"imageUrl": image.asset->url}
    `;
  const results = await sanityApi.fetch(groq);
  // logGroq(groq);
  return results;
};

export { siteConfig };
