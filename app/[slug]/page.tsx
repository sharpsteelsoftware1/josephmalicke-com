import { sanityItem } from "../../lib/sanity";
import { makeJsx } from "../../components/feed";

export const dynamic = "force-dynamic";
export const dynamicParams = true;

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const rawItem = await sanityItem(params.slug);
  return <>{makeJsx(false)(rawItem)}</>;
}
