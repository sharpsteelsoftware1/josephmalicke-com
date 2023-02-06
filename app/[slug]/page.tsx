import { sanityItem } from "../../lib/sanity";
import { makeJsx } from "../../components/feed";

export default async function BlogPage({ params }: { params: any }) {
  const rawItem = await sanityItem(params.slug);
  console.log(JSON.stringify(rawItem, null, 2));

  // const component = makeJsx(rawItem);
  // return <>{makeJsx(false)(rawItem)}</>;
  return <div>{JSON.stringify(rawItem, null, 2)}</div>;
  // return component;
}
