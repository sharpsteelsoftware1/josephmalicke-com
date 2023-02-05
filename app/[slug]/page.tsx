import * as R from "ramda";
import { blogFull } from "../../components/feed/types/blog/blog";
import sanityApi from "../../lib/sanity";

export default async function BlogPage() {
  const blogs = await sanityApi.blogs();
  return <>{R.map(blogFull)(blogs)}</>;
}
