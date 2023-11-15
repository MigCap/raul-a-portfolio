import { urlForImage } from '@/sanity/utils';

export function mapWorkToLang(lang: string, work: any) {
  return {
    ...work,
    title: work.title?.find((e: any) => e['_key'] === lang).value || work.title,
    slug: work.slug.current,
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

export function mapCategories(categories: any) {
  return categories.map((category: any) => {
    return {
      ...category,
      id: category._id,
    };
  });
}

export function sortWorksByMostRecent(works: any) {
  return works.sort(
    (a: { _createdAt: number }, b: { _createdAt: number }) =>
      b._createdAt.valueOf() - a._createdAt.valueOf(),
  );
}
