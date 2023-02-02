import Link from "next/link";
import { Blog } from "../lib/sanity/types/Blog";
import { SanityText } from "../lib/sanity/util/portable/SanityText";

const teaserLink = (slug: string) => (children: any) =>
  (
    <Link className="cursor-pointer" href={`/${slug}`}>
      {children}
    </Link>
  );

const blogTsx =
  (isTeaser = false) =>
  (sanityBlog: Blog) => {
    const content = isTeaser ? sanityBlog.content[0] : sanityBlog.content;
    return (
      <div className="p-4 space-y-4" key={sanityBlog._id}>
        <div className="text-xl font-semibold text-black">
          {sanityBlog.title}
        </div>
        <div className="flex flex-col items-center space-y-4">
          <SanityText value={content} />
        </div>
        {isTeaser && (
          <div className="text-end italic text-red-600">read more</div>
        )}
      </div>
    );
  };

const blogFull = (sanityBlog: Blog) => blogTsx(false)(sanityBlog);
const blogTeaser = (sanityBlog: Blog) =>
  teaserLink(sanityBlog.slug.current)(blogTsx(true)(sanityBlog));

export { blogFull, blogTeaser };
