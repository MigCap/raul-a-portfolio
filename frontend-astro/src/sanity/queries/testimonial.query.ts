import { useSanityClient } from '@sanity/astro';
import { mapTestimonials } from '@/sanity/utils';

export function getTestimonialsQuery() {
  return `*[_type == "testimonials"]`;
}

export async function getTestimonials(lang: string) {
  const fetchedTestimonials = await useSanityClient().fetch(
    getTestimonialsQuery(),
  );
  const testimonials = mapTestimonials(fetchedTestimonials, lang);
  return testimonials;
}
