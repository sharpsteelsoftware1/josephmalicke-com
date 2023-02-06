import * as R from "ramda";
import { sanityItems } from "../lib/sanity";
import { makeJsx } from "../components/feed";

export default async function BlogPage() {
  const items = await sanityItems();
  const components = R.map(makeJsx)(items);
  return <div className="flex flex-col space-y-2">{components}</div>;
}
