import { useSanityClient } from '@sanity/astro';
import imageUrlBuilder from "@sanity/image-url";

export const imageBuilder = imageUrlBuilder(useSanityClient());

export function urlForImage(source: any) {
  return imageBuilder.image(source) as unknown as string;
}
