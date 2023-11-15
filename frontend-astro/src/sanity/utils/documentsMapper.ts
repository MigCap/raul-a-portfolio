import { mapWorkToLang } from '@/i18n/utils';

export function mapWorksForMainList(works: any, lang: any) {
  return works.reduce((acc: any, project: any) => {
    if (project.show_in_main_work_list) {
      acc = [
        ...acc,
        mapWorkToLang(lang, project),
      ];
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
