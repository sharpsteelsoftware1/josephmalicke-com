"use client";
import MuxPlayer from "@mux/mux-player-react";

const VideoPlayer = ({
  playbackId,
  title,
}: {
  playbackId: string;
  title: string;
}) => {
  return (
    <MuxPlayer
      streamType="on-demand"
      playbackId={playbackId}
      title={title}
      style={{ height: "300px" }}
    />
  );
};

export { VideoPlayer };
