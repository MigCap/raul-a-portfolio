import { useSanityClient } from "@sanity/astro";
import { mapHomePage } from "@/sanity/utils";

export function getHomeQuery() {
    return `*[_type == "home" && _id == 'home']`
}

export async function getHomePage(lang: string) {
    const fetchedHome = await useSanityClient().fetch(getHomeQuery());
    const home = mapHomePage(fetchedHome[0], lang);
    return home;
}
