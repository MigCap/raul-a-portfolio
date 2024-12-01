import { Menu, Transition } from "@headlessui/react";
import { getLangFromUrl, getRedirect } from "@/i18n/utils.i18n";
import { LANGUAGES, type Languages } from "@/i18n/ui.i18n";
import { usePortfolioStore } from "@/store/global.store";

interface Props {
  url: URL
}

const LanguagePicker = ({ url }: Props) => {
  const lang = getLangFromUrl(url);

  return (
    <nav>
      <ul className="flex md:flex lg:flex lg:space-x-7 lg:ml-14">
        <li>
          <Menu>
            <Menu.Button className="text-white hover:text-almost-white inline-flex w-full justify-center gap-x-1.5 rounded-full bg-[color:var(--accent-regular)] border-fuchsia-900 px-3 py-1 text-sm font-semibold shadow-sm ring-gray-300 hover:border-almost-white">
              {lang.toUpperCase()}
              <svg
                className="-mr-1 h-5 w-5 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Menu.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Menu.Items className="absolute right-0 mt-4 w-40 py-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <LanguagePickerMenuItem givenLanguage={LANGUAGES.EN} url={url}>
                  English
                </LanguagePickerMenuItem>
                <LanguagePickerMenuItem givenLanguage={LANGUAGES.ES} url={url}>
                  Español
                </LanguagePickerMenuItem>
                <LanguagePickerMenuItem givenLanguage={LANGUAGES.IT} url={url}>
                  Italiano
                </LanguagePickerMenuItem>
                <LanguagePickerMenuItem givenLanguage={LANGUAGES.FR} url={url}>
                  Francés
                </LanguagePickerMenuItem>
              </Menu.Items>
            </Transition>
          </Menu>
        </li>
      </ul>
    </nav>
  );
};

export default LanguagePicker;

const LanguagePickerMenuItem = ({
  givenLanguage,
  url,
  children
}: {
  givenLanguage: Languages;
  url: URL;
  children: any
}) => {
  const currentLanguage = getLangFromUrl(url);
  const selectedLang = currentLanguage === givenLanguage;
  const setLang = usePortfolioStore(state => state.setLang)

  return (
    <Menu.Item disabled={selectedLang}>
      {() => {
        return (
          <a
            className={`${selectedLang ? 'text-fuchsia-900 cursor-default' : ''} ${!selectedLang ? 'text-gray-900 hover:text-fuchsia-900 hover:bg-fuchsia-100 cursor-pointer' : ''} block w-full text-left px-4 py-2 text-sm`}
            href={getRedirect(givenLanguage, url)}
            onClick={() => setLang(givenLanguage)}
          >
            {children}
          </a>
        )
      }}
    </Menu.Item>
  );
};
