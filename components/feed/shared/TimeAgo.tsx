"use client";
import "client-only";

import TimeAgoApi from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

TimeAgoApi.addDefaultLocale(en);
const timeAgoApi = new TimeAgoApi("en-US");
const timeAgoFormatter = (date: Date) => timeAgoApi.format(date);

const TimeAgo = ({ createdAt }: { createdAt: string }) => (
  <div className="text-neutral-500 text-md">
    {timeAgoFormatter(new Date(createdAt))}
  </div>
);

export { TimeAgo };
