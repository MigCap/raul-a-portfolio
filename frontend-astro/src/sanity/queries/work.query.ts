import { useSanityClient } from "@sanity/astro";
import { mapWorksForMainList, sortWorksByMostRecent } from "@/sanity/utils";

export function getWorksQuery() {
    return `*[_type == "works"]`
}


export async function getWorks(lang: string) {
    const fetchedWorks = await useSanityClient().fetch(getWorksQuery());
    const works = mapWorksForMainList(fetchedWorks, lang);
    return works;
}

export async function getMostRecentWorks(lang: string) {
    const works = await getWorks(lang);
    const mostRecentWorks = sortWorksByMostRecent(works).slice(0, 4);
    return mostRecentWorks;
}
