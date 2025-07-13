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
