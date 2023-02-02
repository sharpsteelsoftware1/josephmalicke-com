import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

TimeAgo.addDefaultLocale(en);

const timeAgoApi = new TimeAgo("en-US");

const timeAgo = (date: Date) => timeAgoApi.format(date);

export { timeAgo }