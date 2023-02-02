import * as R from "ramda";
import { blogTeaser } from "../components/blogTsx";
import sanityApi from "../lib/sanity";

export default async function BlogPage() {
  const blogs = await sanityApi.blogs();
  return <>{R.map(blogTeaser)(blogs)}</>;
}
 