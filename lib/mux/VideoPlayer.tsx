"use client";
import MuxPlayer from "@mux/mux-player-react";

const VideoPlayer = ({
  playbackId,
  title,
  thumbTime,
}: {
  playbackId: string;
  title: string;
  thumbTime: number;
}) => {
  return (
    <MuxPlayer
      streamType="on-demand"
      playbackId={playbackId}
      title={title}
      thumbnailTime={thumbTime}
      style={{ height: "300px" }}
    />
  );
};

export { VideoPlayer };
