import { useSanityClient } from '@sanity/astro';
import { mapCategories, mapCategoriesByLang } from '@/sanity/utils';
import type * as Schema from '@/schema';

export function getCategoriesQuery() {
  return `*[_type == "categories"]`;
}

export async function getCategories(lang: string) {
  const fetchedCategories = await useSanityClient().fetch<
    Array<Schema.Categories>
  >(getCategoriesQuery());
  const categories = mapCategories(fetchedCategories, lang);
  return categories;
}

export function getCategoriesByLngQuery(lang: string) {
  return `*[_type == 'categories']{title[_key match '${lang}']{value}, slug}`;
}

export async function getCategoriesByLng(lang: string) {
  const fetchedCategories = await useSanityClient().fetch(getCategoriesByLngQuery(lang));
  const categories = mapCategoriesByLang(fetchedCategories);
  return categories;
}
