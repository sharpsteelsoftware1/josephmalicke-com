import { logGroq } from "../util/log/logGroq";

export type Blog = {
  content: string;
  type: string;
  dateCreated: string;
  description: string;
  genreTag: string;
  isVisible: boolean;
  pictureUrl: string;
  slug: string;
  title: string;
};

const blogs =
  (sanityApi: any) =>
  async (page = 0, pageCount = 6) => {
    const start = page * pageCount;
    const end = start + pageCount;
    const groq = /* groq */ `
      *[(_type == "blog")]
      {..., "totalCount": count(*[(_type == "blog")])} 
      | order(metadata.dateCreated desc)
      [${start}...${end}] 
    `;
    const results = await sanityApi.fetch(groq);
    return results;
  };

export { blogs };
