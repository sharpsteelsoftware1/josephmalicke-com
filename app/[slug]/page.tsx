import { sanityItem } from "../../lib/sanity";
import { makeJsx } from "../../components/feed";

export default async function BlogPage({ params }: { params: any }) {
  // const rawItem = await sanityItem(params.slug);
  // return <>{makeJsx(false)(rawItem)}</>;
  return <div>{JSON.stringify(params, null, 2)}</div>;
}
