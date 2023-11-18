import { useSanityClient } from "@sanity/astro";
import { mapAboutPage } from "@/sanity/utils";
import type * as Schema from '@/schema';

export function getAboutPageQuery() {
    return `*[_type == "about"]`
}

export async function getAboutPage(lang: string) {
    const fetchedAboutPage = await useSanityClient().fetch<Array<Schema.About>>(getAboutPageQuery());
    const aboutPage = mapAboutPage(fetchedAboutPage[0], lang);
    return aboutPage;
}
