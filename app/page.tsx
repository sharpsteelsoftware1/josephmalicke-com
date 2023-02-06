import * as R from "ramda";
import { sanityItems } from "../lib/sanity";
import { makeJsx } from "../components/feed";

export default async function BlogPage() {
  const items = await sanityItems();
  return <div className="flex flex-col space-y-2">{R.map(makeJsx(true))(items)}</div>;
}
