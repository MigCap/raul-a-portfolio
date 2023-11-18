import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";
import { InternationalizedArrayString, InternationalizedArrayText, InternationalizedArrayFormattedText } from "./sanity-schema-internationalized";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * User Info
 *
 *
 */
export interface UserInfo extends SanityDocument {
  _type: "user_info";

  /**
   * name — `string`
   *
   *
   */
  name?: string;

  /**
   * fullName — `string`
   *
   *
   */
  fullName?: string;

  /**
   * Main Mail — `string`
   *
   *
   */
  mainEmail?: string;

  /**
   * Contact Mail — `string`
   *
   *
   */
  contactEmail?: string;

  /**
   * imgUrl — `image`
   *
   *
   */
  imgUrl?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

/**
 * Home
 *
 *
 */
export interface Home extends SanityDocument {
  _type: "home";

  /**
   * title — `internationalizedArrayString`
   *
   *
   */
  title?: InternationalizedArrayString;

  /**
   * description — `internationalizedArrayString`
   *
   *
   */
  description?: InternationalizedArrayString;

  /**
   * long_description — `internationalizedArrayText`
   *
   *
   */
  long_description?: InternationalizedArrayText;

  /**
   * imgUrl — `image`
   *
   *
   */
  imgUrl?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

/**
 * About
 *
 *
 */
export interface About extends SanityDocument {
  _type: "about";

  /**
   * title — `internationalizedArrayString`
   *
   *
   */
  title: InternationalizedArrayString;

  /**
   * description — `internationalizedArrayString`
   *
   *
   */
  description: InternationalizedArrayString;

  /**
   * long_description — `internationalizedArrayText`
   *
   *
   */
  long_description: InternationalizedArrayText;

  /**
   * background — `internationalizedArrayFormattedText`
   *
   *
   */
  background: InternationalizedArrayFormattedText;

  /**
   * education — `internationalizedArrayFormattedText`
   *
   *
   */
  education: InternationalizedArrayFormattedText;

  /**
   * imgUrl — `image`
   *
   *
   */
  imgUrl: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

/**
 * Works
 *
 *
 */
export interface Works extends SanityDocument {
  _type: "works";

  /**
   * language — `string`
   *
   *
   */
  language?: string;

  /**
   * title — `internationalizedArrayString`
   *
   *
   */
  title?: InternationalizedArrayString;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Show in main work list — `boolean`
   *
   *
   */
  show_in_main_work_list?: boolean;

  /**
   * Description — `internationalizedArrayString`
   *
   *
   */
  description?: InternationalizedArrayString;

  /**
   * Project Link — `string`
   *
   *
   */
  projectLink?: string;

  /**
   * Code Link — `string`
   *
   *
   */
  codeLink?: string;

  /**
   * Categories — `array`
   *
   *
   */
  categories?: Array<SanityKeyedReference<Categories>>;

  /**
   * ImageUrl — `image`
   *
   *
   */
  imgUrl?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

/**
 * Categories
 *
 *
 */
export interface Categories extends SanityDocument {
  _type: "categories";

  /**
   * title — `internationalizedArrayString`
   *
   *
   */
  title?: InternationalizedArrayString;
}

/**
 * Experiences
 *
 *
 */
export interface Experiences extends SanityDocument {
  _type: "experiences";

  /**
   * Year — `string`
   *
   *
   */
  year?: string;

  /**
   * Works — `array`
   *
   *
   */
  works?: Array<SanityKeyed<WorkExperience>>;
}

/**
 * Work Experience
 *
 *
 */
export interface WorkExperience extends SanityDocument {
  _type: "workExperience";

  /**
   * title — `string`
   *
   *
   */
  title?: string;

  /**
   * company — `string`
   *
   *
   */
  company?: string;

  /**
   * desc — `string`
   *
   *
   */
  desc?: string;
}

export type BlockContent = Array<
  | SanityKeyed<SanityBlock>
  | SanityKeyed<{
      _type: "image";
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    }>
>;

export type Documents =
  | UserInfo
  | Home
  | About
  | Works
  | Categories
  | Experiences
  | WorkExperience;
