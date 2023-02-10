import { TeaserLink } from "./TeaserLink";
import { TimeAgo } from "./TimeAgo";

const FooterBar = ({
  createdAt,
  label = "read more",
  slug,
  showLabel = true,
}: {
  createdAt: string;
  label?: string;
  slug: { current: string };
  showLabel?: boolean;
}) => (
  <div className="flex flex-row">
    <div className="text-neutral-500 text-md">
      <TimeAgo createdAt={createdAt} />
    </div>
    <div className="text-end italic text-red-600 grow">
      {showLabel && (
        <TeaserLink slug={slug.current}>
          <span className="italic text-red-600">{label}</span>
        </TeaserLink>
      )}
    </div>
  </div>
);

export { FooterBar };
