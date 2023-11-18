import { DEFAULT_LANG, type TLanguages } from "@/i18n/ui";
import { create } from "zustand";

interface PortfolioState {
  lang: typeof DEFAULT_LANG;
  setLang: (lang: TLanguages) => void;
}

export const usePortfolioStore = create<PortfolioState>((set) => ({
  lang: DEFAULT_LANG,
  setLang: (lang: TLanguages) => set({ lang }),
}))
