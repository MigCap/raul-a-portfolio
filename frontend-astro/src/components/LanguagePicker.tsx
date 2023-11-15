import { Menu, Transition } from "@headlessui/react";
import { getRedirect } from "@/i18n/utils";
import { LANGUAGES } from "@/i18n/ui";

export const LanguagePicker = ({lang, currentPath}: any) => {
  return (
    <nav>
      <ul className="hidden md:flex lg:flex lg:space-x-7 lg:ml-14">
        <li>
          <Menu>
            <Menu.Button className="text-white hover:text-almost-white inline-flex w-full justify-center gap-x-1.5 rounded-full bg-[color:var(--accent-regular)] border-fuchsia-900 px-3 py-1 text-sm font-semibold shadow-sm ring-gray-300 hover:border-almost-white">
              Language
              <svg
                className="-mr-1 h-5 w-5 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"></path>
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
              <Menu.Items className="absolute right-0 mt-4 w-40 py-3 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <LanguagePickerMenuItem
                  givenLanguage={LANGUAGES.EN}
                  currentLanguage={lang}
                  currentPath={currentPath}
                >English</LanguagePickerMenuItem>
                <LanguagePickerMenuItem
                  givenLanguage={LANGUAGES.ES}
                  currentLanguage={lang}
                  currentPath={currentPath}
                >Español</LanguagePickerMenuItem>
              </Menu.Items>
            </Transition>
          </Menu>
        </li>
      </ul>
    </nav>
  );
};

const LanguagePickerMenuItem = ({
  givenLanguage,
  currentLanguage,
  currentPath,
  children
}: {
  givenLanguage: string;
  currentLanguage: string;
  currentPath: string;
  children: any
}) => {
  const isSameLAng = currentLanguage === givenLanguage;
  console.log('🚀 ~ getRedirect(givenLanguage, currentLanguage, currentPath):', getRedirect(givenLanguage, currentLanguage, currentPath));

  return (
    <Menu.Item disabled={isSameLAng}>
      {({ active }) => (
        <a
          className={`${
            (active || isSameLAng) &&
            'bg-gray-100 text-gray-900'
          } block w-full text-left px-4 py-2 text-sm cursor-pointer`}
          href={getRedirect(givenLanguage, currentLanguage, currentPath)}
        >
          {children}
        </a>
      )}
    </Menu.Item>
  );
};
