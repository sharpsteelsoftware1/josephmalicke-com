import { PortableText } from "@portabletext/react";
import { PortableTextComponents } from "@portabletext/react";
import { urlFor } from "../image/urlFor";

const components: PortableTextComponents = {
  types: {
    image: ({ value }: any) => {
      return <img src={urlFor(value).width(200).url()} alt="image" />;
    },
  },
};

const SanityText = ({ value }: { value: any }) => (
  <PortableText value={value} components={components} />
);

export { SanityText };
