import { siteConfig } from "../data/site";

export type SeoInput = {
  title?: string;
  description?: string;
  image?: string;
  pathname?: string;
};

export const buildSeo = ({
  title = siteConfig.seo.defaultTitle,
  description = siteConfig.seo.defaultDescription,
  image = siteConfig.seo.ogImage,
  pathname = "/",
}: SeoInput = {}) => {
  const canonical = new URL(pathname, siteConfig.domain).toString();
  const ogImage = new URL(image, siteConfig.domain).toString();

  return {
    title,
    description,
    canonical,
    ogImage,
  };
};
