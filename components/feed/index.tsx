// import { blogFull, blogTeaser } from "./types/blog";
// import { videoFull, videoTeaser } from "./types/video";

// const makeJsx = (isTeaser = false) => (sanityItem: any) => {
//   if (sanityItem._type === "blog")
//     if (isTeaser) return blogTeaser(sanityItem);
//     else return blogFull(sanityItem);
//   else if (isTeaser) return videoTeaser(sanityItem);
//   else return videoFull(sanityItem);
// };

// export { makeJsx };

import { blogFull, blogTeaser } from "./types/blog";
import { videoFull, videoTeaser } from "./types/video";

const makeJsx = (sanityItem: any) => {
  if (sanityItem._type === "blog") return blogTeaser(sanityItem);
  else return videoTeaser(sanityItem);
};

export { makeJsx };
