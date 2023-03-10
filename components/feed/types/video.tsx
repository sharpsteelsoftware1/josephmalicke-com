import { Video } from "../../../lib/sanity/types/Video";
import { FooterBar } from "../shared/FooterBar";
import { TeaserLink } from "../shared/TeaserLink";
import { VideoPlayer } from "../../../lib/mux/VideoPlayer";

const video = (isTeaser = false, sanityVideo: any) => {
  const title = (
    <div className="text-xl font-semibold text-black">{sanityVideo.title}</div>
  );
  return (
    <div className="p-4 space-y-4 bg-white" key={sanityVideo._id}>
      {isTeaser && (
        <TeaserLink slug={sanityVideo.slug.current}>{title}</TeaserLink>
      )}
      {!isTeaser && title}
      <VideoPlayer
        playbackId={sanityVideo.playbackId}
        title={sanityVideo.title}
        thumbTime={sanityVideo.thumbTime}
      />
      <div>{sanityVideo.description}</div>
      <FooterBar
        createdAt={sanityVideo._createdAt}
        label="permanent link"
        showLabel={isTeaser}
        slug={sanityVideo.slug}
      />
    </div>
  );
};

const videoFull = (sanityVideo: Video) => video(false, sanityVideo);
const videoTeaser = (sanityVideo: Video) => video(true, sanityVideo);

export { videoFull, videoTeaser };
