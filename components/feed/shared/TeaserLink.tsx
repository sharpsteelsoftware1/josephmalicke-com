import Link from "next/link";

const TeaserLink = ({
  slug,
  children,
}: {
  slug: string;
  children: any;
}): any => (
  <Link className="hover:underline cursor-pointer" href={`/${slug}`}>
    {children}
  </Link>
);

export { TeaserLink };
