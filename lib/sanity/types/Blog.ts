export type Blog = {
  _id: string;
  _createdAt: string;
  _type: string;
  content: any[];
  slug: {
    current: string;
  };
  title: string;
};

const blogs =
  (sanityClient: any) =>
  async (page = 0, pageCount = 6): Promise<Blog[]> => {
    const start = page * pageCount;
    const end = start + pageCount;
    const groq = /* groq */ `
      *[(_type == "blog") && !(_id in path('drafts.**'))]
      {..., "totalCount": count(*[(_type == "blog")])} 
      | order(_createdAt desc)
      [${start}...${end}] 
    `;
    const results = await sanityClient.fetch(groq);
    return results;
  };

export { blogs };
