import sanityApi from "../lib/sanity";
import { SanityText } from "../lib/sanity/util/portable/SanityText";

export default async function Page() {
  const blog = await sanityApi.blogs();

  return (
    <div className="flex flex-col p-4 space-y-4 items-center max-w-md mx-auto">
      <SanityText value={blog[0].content} />
    </div>
  );
}
