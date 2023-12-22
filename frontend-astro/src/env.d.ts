/// <reference types="astro/client" />
/// <reference types="@sanity/astro/module" />
/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
    readonly SANITY_PROJECT_ID: string;
}
  
interface ImportMeta {
    readonly env: ImportMetaEnv;
}
