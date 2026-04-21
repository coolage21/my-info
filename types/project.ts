export type Category = "project" | "sideProject";

export interface Project {
  type: Category;
  id: number;
  title: string;
  date: string;
  count: number;
  tool: string[];
  subDesc: string;
  mainDesc: string;
  role: string;
  link?: { link: string; linkttl: string }[];
  contList: string[];
  strength: string[];
  image: string;
  imageList: string[];
  imageAlt: string;
}
