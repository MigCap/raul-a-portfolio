import { urlForImage } from '@/sanity/utils';
import type * as Schema from '@/schema';
import type { PortableTextBlock } from 'sanity';

function getFieldValueByLang(lang: string, field: any): string {
  return (
    (field.length && field.find((e: any) => e['_key'] === lang).value) || field as unknown as string
  );
}

function getPortableTextFieldValueByLang(lang: string, field: any): PortableTextBlock {
  return getFieldValueByLang(lang, field) as unknown as PortableTextBlock;
}

// ----------------- //

export function mapWorkToLang(lang: string, work: any) {
  return {
    ...work,
    slug: work.slug.current,
    title: getFieldValueByLang(lang, work.title),
    description: getFieldValueByLang(lang, work.description),
    img: urlForImage(work.imgUrl.asset),
  };
}

export function mapWorksForMainList(works: any, lang: any) {
  return works.reduce((acc: any, project: any) => {
    if (project.show_in_main_work_list) {
      acc = [...acc, mapWorkToLang(lang, project)];
    }
    return acc;
  }, []);
}

export function sortWorksByMostRecent(works: any) {
  return works.sort(
    (a: { _createdAt: number }, b: { _createdAt: number }) =>
      b._createdAt.valueOf() - a._createdAt.valueOf(),
  );
}

export function mapCategories(categories: Schema.Categories[], lang: string) {
  return categories.map((category: Schema.Categories) => {
    return {
      ...category,
      id: category._id,
      title: getFieldValueByLang(lang, category.title),
    };
  });
}

export function mapCategoriesByLang(categories: any) {
  return categories.map((category: any) => {
    return {
      ...category,
      id: category._id,
      title: category.title[0],
      slug: category.slug.current
    };
  });
}

export function mapHomePage(home: any, lang: string) {
  return {
    ...home,
    title: getFieldValueByLang(lang, home.title),
    description: getFieldValueByLang(lang, home.description),
    long_description: getFieldValueByLang(lang, home.long_description),
    img: urlForImage(home.imgUrl.asset),
  };
}

export function mapAboutPage(about: Schema.About, lang: string) {
  return {
    ...about,
    title: getFieldValueByLang(lang, about.title),
    description: getFieldValueByLang(lang, about.description),
    long_description: getFieldValueByLang(lang, about.long_description),
    background: getPortableTextFieldValueByLang(lang, about.background),
    education: getPortableTextFieldValueByLang(lang, about.education),
    img: urlForImage(about.imgUrl.asset),
  };
}
