import client from "@sanity/client";
import { blogs } from "./types/Blog";

const sanityClient = client({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET_NAME,
  apiVersion: "2023-01-28",
  token: process.env.SANITY_TOKEN,
  useCdn: false,
});

const sanityApi = {
  blogs: blogs(sanityClient),
};

export default sanityApi;
export { sanityClient }