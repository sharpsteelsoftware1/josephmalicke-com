import { PortableText } from "@portabletext/react";
import { urlFor } from "../image/urlFor";

const portableImage = {
  types: {
    image: ({ value }: any) => {
      return <img src={urlFor(value).width(200).url()} />;
    },
  },
};

const SanityText = ({ value }: { value: any }) => (
  <PortableText value={value} components={portableImage} />
);

export { SanityText };
