import * as R from "ramda";
import { Video } from "../../../../lib/sanity/types/Video";
import { FooterBar } from "../../shared/FooterBar";
import { TeaserLink } from "../TeaserLink";
import { VideoPlayer } from "./VideoPlayer";

const video = (sanityVideo: any) => {
  return (
    <div className="p-4 space-y-4 bg-white">
      <TeaserLink slug={sanityVideo.slug.current}>
        <div className="text-xl font-semibold text-black">
          {sanityVideo.title}
        </div>
      </TeaserLink>
      <VideoPlayer
        playbackId={sanityVideo.playbackId}
        title={sanityVideo.title}
      />
      <FooterBar
        createdAt={sanityVideo._createdAt}
        label="permanent link"
        slug={sanityVideo.slug}
      />
    </div>
  );
};

const videoTeaser = (sanityVideo: Video) => R.pipe(video)(sanityVideo);

export { videoTeaser };
