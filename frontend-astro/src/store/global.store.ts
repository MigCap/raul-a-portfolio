import { DEFAULT_LANG, type Languages } from "@/i18n/ui.i18n";
import { create } from "zustand";

interface PortfolioState {
  lang: typeof DEFAULT_LANG;
  setLang: (lang: Languages) => void;
}

export const usePortfolioStore = create<PortfolioState>((set) => ({
  lang: DEFAULT_LANG,
  setLang: (lang: Languages) => set({ lang }),
}))
