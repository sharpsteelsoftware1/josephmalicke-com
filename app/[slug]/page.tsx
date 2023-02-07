import { sanityItem } from "../../lib/sanity";
import { makeJsx } from "../../components/feed";

export const dynamic = "force-dynamic";

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const rawItem = await sanityItem(params.slug);
  console.log(
    `Params are ${JSON.stringify(params)} and rawItem is ${JSON.stringify(
      rawItem
    )}`
  );

  // const component = makeJsx(rawItem);
  // return <>{makeJsx(false)(rawItem)}</>;
  return <div>{JSON.stringify(rawItem, null, 2)}</div>;
  // return component;
}

