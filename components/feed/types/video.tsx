import * as R from "ramda";
import { Video } from "../../../lib/sanity/types/Video";
import { FooterBar } from "../shared/FooterBar";
import { TeaserLink } from "../shared/TeaserLink";
import { VideoPlayer } from "../../../lib/mux/VideoPlayer";

const video = (isTeaser = false, sanityVideo: any) => {
  const footerBarLabel = isTeaser ? "permanent link" : "";

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
        thumbTime={sanityVideo.thumbTime}
      />
      <FooterBar
        createdAt={sanityVideo._createdAt}
        label={footerBarLabel}
        slug={sanityVideo.slug}
      />
    </div>
  );
};

const videoFull = (sanityVideo: Video) => video(false, sanityVideo);
const videoTeaser = (sanityVideo: Video) => video(true, sanityVideo);

export { videoFull, videoTeaser };
