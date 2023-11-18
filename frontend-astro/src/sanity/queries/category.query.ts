import { useSanityClient } from "@sanity/astro";
import { mapCategories } from "@/sanity/utils";
import type * as Schema from '@/schema';

export function getCategoriesQuery() {
    return `*[_type == "categories"]`
}

export async function getCategories(lang: string) {
    const fetchedCategories = await useSanityClient().fetch<Array<Schema.Categories>>(getCategoriesQuery());
    const categories = mapCategories(fetchedCategories, lang);
    return categories;
}
