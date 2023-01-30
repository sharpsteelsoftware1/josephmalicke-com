import * as R from "ramda";
import Image from "next/image";
import sanityApi from "../lib/sanity";
import { SanityText } from "../lib/sanity/util/portable/SanityText";

const siteImage = ({ imageUrl }: { imageUrl: string }) => (
  <Image
    src={imageUrl}
    alt="Site Image"
    fill
    sizes="(max-width: 640px) 100vw,
              (max-width: 768px) 50vw,
              33vw"
    className="rounded-xl object-scale-down md:object-scale-down"
  />
);

export default async function Page() {
  const siteConfig = await sanityApi.siteConfig();
  const siteImageJsx = R.map(siteImage)(siteConfig)[0];

  const blog = await sanityApi.blogs();

  return (
    <>
      <div>
        <SanityText value={blog[0].content} />
      </div>
    </>
  );
}
