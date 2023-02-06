import * as R from "ramda";
import { Blog } from "../../../lib/sanity/types/Blog";
import { SanityText } from "../../../lib/sanity/util/portable/SanityText";
import { FooterBar } from "../shared/FooterBar";
import { TeaserLink } from "../shared/TeaserLink";

const blogTsx = (isTeaser = false, sanityBlog: Blog) => {
  const content = isTeaser ? sanityBlog.content[0] : sanityBlog.content;
  return (
    <div
      className="p-4 space-y-4 bg-white"
      key={sanityBlog._id}
    >
      <TeaserLink slug={sanityBlog.slug.current}>
        <div className="text-xl font-semibold text-black">
          {sanityBlog.title}
        </div>
      </TeaserLink>
      <div className="flex flex-col items-center space-y-4">
        <SanityText value={content} />
      </div>
      {isTeaser && (
        <FooterBar createdAt={sanityBlog._createdAt} slug={sanityBlog.slug} />
      )}
    </div>
  );
};

const blogFull = (sanityBlog: Blog) => blogTsx(false, sanityBlog);
const blogTeaser = (sanityBlog: Blog) => blogTsx(true, sanityBlog);

export { blogFull, blogTeaser };
