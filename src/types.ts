import { IconName } from '@fortawesome/fontawesome-svg-core';

export type Image = {
  src: string;
  alt: string;
};

export type Favicon = {
  src: string;
};

export type Project = {
  title: string;
  description: string;
  icon: string;
  caption: string;
};

export type AboutMe = {
  markdown: string;
  profile: Image;
};

export type SocialLink = {
  url: string;
  name: string;
  icon: IconName;
};

export type Landing = {
  name: string;
  roles: string[];
  socialLinks: SocialLink[];
};
