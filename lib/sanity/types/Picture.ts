import { logGroq } from "../util/logGroq";

export type Picture = {
  sid: string;
  type: string;
  dateCreated: string;
  description: string;
  genreTag: string;
  isVisible: boolean;
  pictureUrl: string;
  slug: string;
  title: string;
};

const pictures =
  (sanityApi: any) =>
  async (page = 0, pageCount = 6) => {
    const start = page * pageCount;
    const end = start + pageCount;
    const groq = `
      *[(_type == "picture") && metadata.isVisible == true]
      {..., "totalCount": count(*[(_type == "picture") && metadata.isVisible == true]), 
      "pictureUrl": image.asset->url} 
      | order(metadata.dateCreated desc)
      [${start}...${end}] 
    `;
    const results = await sanityApi.fetch(groq);
    // logGroq(groq);
    return results;
  };

export { pictures };
