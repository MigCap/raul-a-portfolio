import { useSanityClient } from "@sanity/astro";
import { mapCategories } from "@/sanity/utils";

export function getCategoriesQuery() {
    return `*[_type == "categories"]`
}

export async function getCategories(lang: string) {
    const fetchedCategories = await useSanityClient().fetch(getCategoriesQuery());
    const categories = mapCategories(fetchedCategories, lang);
    return categories;
}
