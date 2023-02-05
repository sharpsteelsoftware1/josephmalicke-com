import { blogTeaser } from "./types/blog/blog";
import { videoTeaser } from "./types/video/video";

const makeJsx = (sanityItem: any) => {
  if (sanityItem._type === "blog") return blogTeaser(sanityItem);
  else return videoTeaser(sanityItem);
};

export { makeJsx };
