import { timeAgo } from "../../../util/timeAgo";
import { TeaserLink } from "./TeaserLink";

const FooterBar = ({
  createdAt,
  label = "read more",
  slug,
}: {
  createdAt: string;
  label?: string;
  slug: { current: string };
}) => (
  <div className="flex flex-row">
    <div className="text-neutral-500 text-md">
      {timeAgo(new Date(createdAt))}
    </div>
    <div className="text-end italic text-red-600 grow">
      {/* <TeaserLink slug={slug.current}> */}
      {/* <span className="italic text-red-600">{label}</span> */}
      {/* </TeaserLink> */}
    </div>
  </div>
);

export { FooterBar };
