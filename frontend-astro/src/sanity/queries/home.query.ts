import { useSanityClient } from "@sanity/astro";
import { mapHome } from "@/sanity/utils";

export function getHomeQuery() {
    return `*[_type == "home" && _id == 'home']`
}

export async function getHome(lang: string) {
    const fetchedHome = await useSanityClient().fetch(getHomeQuery());
    const home = mapHome(fetchedHome[0], lang);
    return home;
}
