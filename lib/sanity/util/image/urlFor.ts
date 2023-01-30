import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "../..";

const builder = imageUrlBuilder(sanityClient);

const urlFor = (source: any) => builder.image(source);

export { urlFor };
