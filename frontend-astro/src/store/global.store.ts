import { type Languages, DEFAULT_LANG } from '@/i18n/config.i18n';
import { create } from 'zustand';

interface PortfolioState {
  lang: Languages;
  setLang: (lang: Languages) => void;
}

export const usePortfolioStore = create<PortfolioState>((set) => ({
  lang: DEFAULT_LANG,
  setLang: (lang: Languages) => set({ lang }),
}));
