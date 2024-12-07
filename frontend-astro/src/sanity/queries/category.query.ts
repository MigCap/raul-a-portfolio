import { useSanityClient } from '@sanity/astro';
import { mapCategories, mapCategoriesByLang } from '@/sanity/utils';
import type * as Schema from '@/schema';

export function getCategoriesQuery() {
  return `*[_type == "categories"]`;
}

export async function getCategories(lang: string) {
  const fetchedCategories = await useSanityClient().fetch<Array<Schema.Categories>>(getCategoriesQuery());
  const categories = mapCategories(fetchedCategories, lang);
  return categories;
}

export function getCategoriesByLngQuery(lang: string) {
  return `*[_type == 'categories']{title[_key match '${lang}']{value}, slug}`;
}

export async function getCategoriesByLng(lang: string) {
  const fetchedCategories = await useSanityClient().fetch<Array<Schema.Categories>>(getCategoriesByLngQuery(lang));
  const categories = mapCategoriesByLang(fetchedCategories);
  return categories;
}

export function getWorkCategoriesQuery(workId: string, categoryKeys: string[]) {
  return `*[_type == 'categories' && _id in *[_type == 'works' && _id == '${workId}'].categories[_key in ${JSON.stringify(categoryKeys)}]._ref]{ _id, title, slug }`;
}

export async function getWorkCategoriesTitles(work: any, lang: string) {
  const workId = work._id;
  const categoryKeys = work.categories.map((item: any) => item._key);

  const fetchedWorkCategories = await useSanityClient().fetch<
    Array<Schema.Categories>
  >(getWorkCategoriesQuery(workId, categoryKeys));

  const workCategories = fetchedWorkCategories.map((c) => {
    return (
      c.title?.length &&
      c.title.find((t: { _key: string }) => t._key === lang)?.value
    );
  });

  return workCategories;
}
