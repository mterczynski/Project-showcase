import messages from "../messages/en.json";

export type ProjectLink = {
  label: string;
  url: string;
};

export type Project = {
  title: string;
  image: string;
  alt?: string;
  description: string;
  tech: string;
  links: ProjectLink[];
};

// adds support for next-intl translation types
// https://next-intl.dev/docs/workflows/typescript
declare module "next-intl" {
  interface AppConfig {
    // ...
    Messages: typeof messages;
  }
}
