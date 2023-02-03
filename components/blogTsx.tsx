import * as R from "ramda";
import Link from "next/link";
import { Blog } from "../lib/sanity/types/Blog";
import { SanityText } from "../lib/sanity/util/portable/SanityText";
import { timeAgo } from "../util/timeAgo";

const teaserLink =
  (slug: string) =>
  (children: any): any =>
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
          <div className="flex flex-row">
            <div className="text-neutral-500 text-md">
              {timeAgo(new Date(sanityBlog._createdAt))}{" "}
            </div>
            <div className="text-end italic text-red-600 grow">read more</div>
          </div>
        )}
      </div>
    );
  };

const blogFull = (sanityBlog: Blog) => blogTsx(false)(sanityBlog);
const blogTeaser = (sanityBlog: Blog) =>
  R.pipe(blogTsx(true), teaserLink(sanityBlog.slug.current))(sanityBlog);

export { blogFull, blogTeaser };
